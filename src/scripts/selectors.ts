import {
  jsonSchemaProperties,
  jsonSchemaTypes,
  microdataItemtype,
  microdataProperty,
  microdataRoot,
  Types,
} from '@stencila/schema'
import fs from 'fs'
import path from 'path'

// Output path for the file containing generated CSS custom selector definitions
const cssPath = path.join(__dirname, '..', 'selectors.css')

// Output path for the file containing generated JS translation function
const tsPath = path.join(__dirname, '..', 'selectors.ts')

/**
 * Generate custom CSS selectors for types and properties
 * in the Stencila Schema.
 *
 * For the root node, use the exact matcher (`=`), for others
 * use the "container the word" matcher (`~=`).
 *
 * For types, there is only one selector, having the name of the type, and
 * using the `itemtype` attribute eg.
 *
 * ```css
 * :--Article [itemtype~="http://schema.org/Article]
 * :--List [itemtype~="http://schema.org/ItemList]
 * :--CodeChunk [itemtype~="http://schema.stenci.la/CodeChunk]
 * ```
 *
 * For array properties, there are two selectors, for different
 * HTML element roles: `array` and `item`. For example,
 * for the `CreativeWork.authors` property there is...
 *
 * Selector for the property's root element (usually a <ol>)
 *
 * ```css
 * :--authors [data-itemprop~="authors"]
 * ```
 *
 * Selector for the property's item elements (usually <li>s)
 *
 * ```css
 * :--author [itemprop~="author"]
 * ```
 *
 * For other properties, there is just one selector, e.g.
 *
 * ```css
 * :--text [itemprop~="text"]
 * ```
 */
const generateSelectors = async (): Promise<void> => {
  const [attrRoot, valueRoot] = Object.entries(microdataRoot())[0]
  const rootSelectorCss = `@custom-selector :--root [${attrRoot}='${valueRoot}'];`
  const rootSelectorJs = `case ":--root": return "[${attrRoot}='${valueRoot}']"`

  const types = await jsonSchemaTypes()

  const [typeSelectorsCss, typeSelectorsJs] = types
    .map((type) => {
      const itemtype = microdataItemtype(type as keyof Types)
      return itemtype !== undefined
        ? [
            `@custom-selector :--${type} [itemtype~='${itemtype}'];`,
            `case ":--${type}": return "[itemtype~='${itemtype}']"`,
          ]
        : undefined
    })
    .reduce(
      (prev: [string[], string[]], curr) => {
        return curr !== undefined
          ? [
              [...prev[0], curr[0]],
              [...prev[1], curr[1]],
            ]
          : prev
      },
      [[], []]
    )

  const props = await jsonSchemaProperties()

  const propSelectors = Object.entries(props)
    .map(
      ([name, prop]): Record<string, string> => {
        if (prop.isPlural) {
          const [[arrayAttr, arrayValue]] = Object.entries(
            microdataProperty(name, 'array')
          )
          const [[itemAttr, itemValue]] = Object.entries(
            microdataProperty(name, 'item')
          )
          return {
            [name]: `[${arrayAttr}~='${arrayValue}']`,
            [name.slice(0, -1)]: `[${itemAttr}~='${itemValue}']`,
          }
        } else {
          const [[attr, value]] = Object.entries(microdataProperty(name))
          return {
            [name]: `[${attr}~='${value}']`,
          }
        }
      }
    )
    .reduce((prev, curr) => {
      for (const [key, value] of Object.entries(curr)) {
        if (key in prev && !prev[key].includes(value)) prev[key] += `, ${value}`
        else prev[key] = value
      }
      return prev
    }, {})

  const propSelectorsCss = Object.entries(propSelectors).map(
    ([name, selectors]) => `@custom-selector :--${name} ${selectors};`
  )

  const propSelectorsJs = Object.entries(propSelectors).map(
    ([name, selectors]) => `case ":--${name}": return "${selectors}"`
  )

  // Generate some utility selector groups for more ergonomic theme authoring
  const listTypes = [
    ':--Article:--root > :--affiliations',
    ':--Collection',
    ':--List',
    ':--references > ol',
  ]

  const codeBlockTypes = [':--CodeBlock', ':--CodeChunk']

  const codeTypes = [
    ...codeBlockTypes,
    ':--Code',
    ':--CodeError',
    ':--CodeExpression',
    ':--CodeFragment',
    ':--SoftwareSourceCode',
  ]

  const mediaTypes = [
    ':--CodeBlock',
    ':--CodeChunk',
    ':--Datatable',
    ':--Figure',
    ':--ImageObject',
    ':--MediaObject',
    ':--Table',
    ':--VideoObject',
  ]

  const header = `/* Generated by ${path.basename(__filename)}. Do not edit. */`

  const css = `${header}

/**
 * Root selector
 */
${rootSelectorCss}


/**
 * Type selectors
 */
${typeSelectorsCss.join('\n')}

/**
 * Property selectors
 */
${propSelectorsCss.join('\n')}


/**
 * Group element selectors
 */
@custom-selector :--ListTypes ${listTypes.join(',')};
@custom-selector :--CodeBlockTypes ${codeBlockTypes.join(',')};
@custom-selector :--CodeTypes ${codeTypes.join(',')};
@custom-selector :--MediaTypes ${mediaTypes.join(',')};

`
  fs.writeFile(cssPath, css, () => css)

  const ts = `${header}

/**
 * Translate a custom semantic selector to the equivalent Microdata
 * attribute selector.
 *
 * e.g. :--Article -> [itemtype~='http://schema.org/Article']
 * e.g. :--author -> [itemprop~='http://schema.org/author']
 *
 * This does the inverse of the mapping defined in \`./selectors.css\`.
 */
export function translate(selectors: string): string {
  return selectors.replace(/:--\\w+/g, selector => {
    switch (selector) {
      ${rootSelectorJs}
      ${typeSelectorsJs.join('\n      ')}
      ${propSelectorsJs.join('\n      ')}
      default:
        throw new Error(\`Unknown custom selector: \${selector}\`)
    }
  })
}
`
  fs.writeFile(tsPath, ts, () => ts)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
if (module.parent === null) generateSelectors()

/**
 * A script to generate example `*.html` files and `../examples/examples.ts`.
 *
 * Run using `npm run build:examples`.
 *
 * To add an example,
 *
 * 1. write a `function` with a camelCased name that begins with the
 *    type of the top level node e.g. `articleDrosophila`, `datatableTitanic` and creates
 *    a HTML file with the same name (e.g. `articleDrosophila.html`) in `../examples/`
 *
 * 2. add the function to the `EXAMPLES` array.
 *
 * Examples are best generated by Encoda, since Thema targets the HTML that
 * it generates. Having said that, you _could_ generate examples using other tools 🛠️,
 * or even write HTML by hand ✍️.
 *
 * In some cases, examples are also converted to YAML (e.g. `articleDrosophila.yaml`)
 * by Encoda to be able to more easily see which nodes are being decoded from the source
 * format e.g. JATS, but not being encoded to HTML (ie. missing from example pages).
 */

import { convert } from '@stencila/encoda'
import fs from 'fs'
import path from 'path'

const EXAMPLES = [articleKitchenSink, articleDrosophila, articleAntibodies]

/**
 * Given a filename, return its path within the examples folder.
 */
const ex = (filename: string) =>
  path.join(__dirname, '..', 'examples', filename)

/**
 * Call Encoda `convert` with options required for the HTML used by this repo.
 */
const build = (input: string, outputs: string | string[]) =>
  convert(input, outputs, { encodeOptions: { isStandalone: false, theme: '' } })

/**
 * A kitchen sink article intended to have at
 * least one of every node type.
 */
function articleKitchenSink() {
  return build(ex('articleKitchenSink.json'), ex('articleKitchenSink.html'))
}

/**
 * An eLife article.
 */
function articleDrosophila() {
  return build('https://elifesciences.org/articles/49574v2', [
    ex('articleDrosophila.html'),
    ex('articleDrosophila.yaml')
  ])
}

/**
 * A PLoS article.
 */
function articleAntibodies() {
  return build(
    'https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1007207',
    [ex('articleAntibodies.html'), ex('articleAntibodies.yaml')]
  )
}

// Run each function
EXAMPLES.forEach(ex => ex())

// Generate `../examples/examples.ts`
fs.writeFileSync(
  ex('examples.ts'),
  `
// Generated by generate/${path.basename(__filename)}. Do not edit.

/**
 * Map of example names
 */
export const examples: {
  ${EXAMPLES.map(ex => `${ex.name}: string`).join('\n  ')}
} = {
  ${EXAMPLES.map(ex => `${ex.name}: '${ex.name}'`).join(',\n  ')}
}
`.trimLeft()
)
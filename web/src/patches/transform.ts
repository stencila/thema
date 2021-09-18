import { DomOperationTransform } from '@stencila/stencila'
import { assert, isText, panic, resolveNode } from './utils'

/**
 * Apply a transform operation
 *
 * Transform operations allow for a lightweight diff where only the type
 * of the node has changed. See the `diff_transform` function in `rust/src/patches/inlines.rs`
 * This function should be able to apply all the transforms potentially
 * generated on the server.
 *
 * Asserts that the element type is as expect in the `from` property of the operation.
 */
export function applyTransform(op: DomOperationTransform): void {
  const { address, from, to } = op

  const node = resolveNode(address)
  if (isText(node)) applyTransformString(node, from, to)
  else applyTransformElem(node, from, to)
}

/**
 * Apply a transform operation to a text node representing a `String`
 */
export function applyTransformString(
  text: Text,
  from: string,
  to: string
): void {
  assert(from === 'String', `Expected transform from type String, got ${from}`)

  const tag = TYPE_TAGS[to]
  if (tag === undefined) {
    throw panic(`Unexpected transform to type ${to}`)
  }

  const elem = document.createElement(tag)
  elem.textContent = text.textContent
  text.replaceWith(elem)
}

/**
 * Apply a transform operation to an element representing a `Node`
 */
export function applyTransformElem(
  elem: Element,
  from: string,
  to: string
): void {
  throw panic('todo')
}

/**
 * Tags used for various node types
 */
const TYPE_TAGS: Record<string, string> = {
  Emphasis: 'em',
  Delete: 'del',
  Strong: 'strong',
  Subscript: 'sub',
  Superscript: 'sup',
}

/**
 * Types corresponding to various element tags
 */
const TAGS_TYPE: Record<string, string> = {
  em: 'Emphasis',
  del: 'Delete',
  strong: 'Strong',
  sub: 'Subscript',
  sup: 'Superscript',
}

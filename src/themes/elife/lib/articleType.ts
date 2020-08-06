import { create, prepend } from '../../../util'
import { getType } from './dataProvider'
import { articleType, articleData } from './query'

const articleTypes = new Map([
  ['research-article', 'Research Article'],
  ['replication-study', 'Replication Study'],
])

const buildMenu = (contentHeaderMeta: Element, type: articleType): void => {
  prepend(
    contentHeaderMeta,
    create(
      'a',
      {
        href: `https://elifesciences.org/articles/${type}`,
        target: '_parent',
        class: 'meta__type',
      },
      articleTypes.get(type)
    )
  )
}

export const build = (
  contentHeaderMeta: Element,
  article: articleData
): void => {
  try {
    buildMenu(contentHeaderMeta, getType(article))
  } catch (err) {
    console.error(err)
  }
}

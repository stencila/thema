import { before, create, first } from '../../../util'

const articleTypeTitle = (type: string): string => {
  switch (type) {
    case 'replication-study':
      return 'Replication Study'
    case 'research-article':
    default:
      return 'Research Article'
  }
}

export const build = (type: string, attachBefore?: Element | null): Element => {
  let attachPoint: Element | null = first(':--datePublished')
  if (attachBefore !== undefined) {
    attachPoint = attachBefore
  }

  if (attachPoint === null) {
    throw new Error("Can't find element to bolt the article type above")
  }

  const wrapper = create(
    'div',
    { class: 'meta' },
    create(
      'a',
      {
        href: `https://elifesciences.org/articles/${type}`,
        target: '_parent',
        class: 'meta__type',
      },
      articleTypeTitle(type)
    ),
    create('span', { class: 'date' }, attachPoint.cloneNode() as Element)
  )
  before(attachPoint, wrapper)
  return wrapper
}

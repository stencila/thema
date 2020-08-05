import { create, first, wrap } from '../../../util'

export const build = (): void => {
  const articleDate = first(':--datePublished')
  if (articleDate === null) {
    return
  }

  const spanDate = create('span', { class: 'date' })
  wrap(articleDate, spanDate)
  // wrap(spanDate, create('div', { class: 'meta' }))
}

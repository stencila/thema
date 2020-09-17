import { create, first, wrap } from '../../../util'

export const build = (): Element | Promise<never> => {
  const articleDate = first(':--datePublished')
  if (articleDate === null) {
    return Promise.reject(
      new Error("Can't find element to wrap the meta around")
    )
  }
  const metaElement = create('div', { class: 'meta' })

  const spanDate = create('span', { class: 'date' })
  wrap(articleDate, spanDate)
  wrap(spanDate, metaElement)
  return metaElement
}

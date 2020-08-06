import { append, create } from '../../../util'
import { getSubjects } from './dataProvider'
import { articleData, subjectArea } from './query'

const buildMenu = (contentHeader: Element, subjects: subjectArea[]): void => {
  const subjectList = create('ol', { class: 'content-header__subject_list' })

  subjects.forEach((subject) => {
    append(
      subjectList,
      create(
        'li',
        { class: 'content-header__subject_list_item' },
        create(
          'a',
          {
            href: `https://elifesciences.org/subjects/${subject.id}`,
            class: 'content-header__subject_link',
            target: '_parent',
          },
          create('span', { class: 'content-header__subject' }, subject.name)
        )
      )
    )
  })

  append(contentHeader, subjectList)
}

export const build = (contentHeader: Element, article: articleData): void => {
  try {
    buildMenu(contentHeader, getSubjects(article))
  } catch (err) {
    console.error(err)
  }
}

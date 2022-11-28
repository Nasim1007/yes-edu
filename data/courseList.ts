import { ICourse } from '../models/ICourse'

export const courseList: ICourse[] = [
  {
    id: 1,
    name: 'Английский язык',
    icon: '/assets/icons/united-kingdom.svg',
    type: 'Языковые курсы'
  },
  {
    id: 2,
    name: 'Русский язык',
    icon: '/assets/icons/russia.svg',
    type: 'Языковые курсы'
  },
  {
    id: 3,
    name: 'Немецкий язык',
    icon: '/assets/icons/germany.svg',
    type: 'Языковые курсы'
  },

  {
    id: 4,
    name: 'Подготовка к Мед университету',
    icon: '/assets/icons/chemistry.svg',
    type: 'Подготовительные курсы'
  },

  {
    id: 6,
    name: 'Дошкольная подготовка',
    icon: '/assets/icons/schoolboy.svg',
    type: 'Подготовительные курсы'
  },
  {
    id: 7,
    name: 'Подготовка к ЦТ',
    icon: '/assets/icons/test.svg',
    type: 'Подготовительные курсы'
  },

  {
    id: 9,
    name: 'Программа 3 в 1',
    icon: '/assets/icons/webinar.png',
    type: 'Подготовительные курсы',
    info: 'Английский, русский и математика',
    student: 'Для детей от 7 до 15 лет'

  }
]
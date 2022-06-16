// regex to match any string that contains at least one non-space character
// U+00a0 = " " // this one is in the docs table god knows why
export const NOT_EMPTY = /^(?!(\s|\xa0)*$).+/

// labels for regions page tables
export const COMISSION_LABELS = ['ФИО', 'Должность', 'Мобильный', 'Домашний']
export const CHIEFS_LABELS = ['Должность', 'Имя', 'Телефон', 'Факс', 'Мобильный', 'Домашний']
export const SETTLEMENTS_LABELS = ['Название', 'Население', 'Тип']
export const HAZARD_LABELS = [
  'Название',
  'Адрес',
  'Руководитель',
  'Телефон',
  'Характеристика',
  'Примечания',
  'Тип'
]
export const DIVISIONS_LABELS = [
  'Название',
  'Адрес',
  'Руководитель',
  'Телефон',
  'Личный состав',
  'Количество техники',
  'Время готовности',
  'Максимальное количество личного состава',
  'Характеристика',
  'Тип'
]

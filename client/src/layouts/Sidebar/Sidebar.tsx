import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { MdInfo as DefaultIcon, MdLogout as LogoutIcon } from 'react-icons/md'

import Accordion from 'components/Accordion/Accordion'

import { useIsOverflow } from 'hooks/useIsOverflow'
import { useSidebar } from 'hooks/useSidebar'

import styles from './Sidebar.module.scss'

/**
 * MenuItem Component
 */
interface IMenuItem {
  title: string
  to: string
  icon?: React.ReactElement
  active?: boolean
}

const MenuItem = (props: IMenuItem) => {
  const outerRef = React.useRef<HTMLHeadingElement>(null),
    innerRef = React.useRef<HTMLSpanElement>(null)

  const { isOverflow, scrollDistance } = useIsOverflow(outerRef, innerRef)

  return (
    <NavLink
      to={props.to}
      className={classNames(styles.navlink, {
        [styles.active]: props.active,
        [styles.marquee]: isOverflow
      })}
    >
      {props.icon ?? <DefaultIcon />}
      <h3 ref={outerRef}>
        <span
          ref={innerRef}
          style={{
            transform: `translateX(-${scrollDistance}px)`
          }}
        >
          {props.title}
        </span>
      </h3>
    </NavLink>
  )
}

/**
 * Sidebar Component
 */
const Sidebar = () => {
  const { sidebarOpen } = useSidebar()

  // TODO: reduce to .map()
  return (
    <aside className={classNames(styles.container, { [styles.open]: sidebarOpen })}>
      <nav className={styles.navMenu}>
        <MenuItem title="О системе" to="#" active />
        <Accordion title="Паспорт Приморского Края">
          <MenuItem title="Муниципальные образования" to="#" active />
          <MenuItem title="Потенциально опасные объекты" to="#" />
          <MenuItem title="Населенные пункты" to="#" />
          <MenuItem title="Силы и средства (подразделения)" to="#" />
          <MenuItem title="Состав комиссии по ЧС" to="#" />
          <MenuItem title="Реки" to="#" />
          <MenuItem title="Объекты жизнеобеспечения" to="#" />
          <MenuItem title="Телефонные справочники" to="#" />
        </Accordion>
        <Accordion title="Оперативные данные">
          <MenuItem title="Оперативная обстановка" to="#" />
          <MenuItem title="Комиссии по ЧС" to="#" />
          <MenuItem title="Характеристики ЧС" to="#" />
          <MenuItem title="Справочная система" to="#" />
          <MenuItem title="Угроза ЧС" to="#" />
        </Accordion>
        <MenuItem title="Краевая комиссия по ЧС" to="#" active />
        <Accordion title="Нормативные акты">
          <MenuItem title="Законы РФ" to="#" />
          <MenuItem title="Указы президента РФ" to="#" />
          <MenuItem title="Постановления и распоряжения правительства РФ" to="#" />
          <MenuItem title="Законы Приморского края" to="#" />
          <MenuItem
            title="Постановления и Распоряжения Губернатира (Администрации) Приморского края"
            to="#"
          />
          <MenuItem title="Документы МЧС" to="#" />
          <MenuItem title="Документы ГО ЧС" to="#" />
          <MenuItem title="Документы других ведомств" to="#" />
        </Accordion>
        <MenuItem title="Критерии информации о ЧС" to="#" />
        <MenuItem title="Особо опасные объекты края" to="#" />
        <MenuItem title="Силы и средства защиты" to="#" />
        <MenuItem title="Оперативная обстановка" to="#" />
        <MenuItem title="Сводка оперативной обстановки" to="#" />
        <MenuItem title="Архив ЧС, снятых с контроля" to="#" />
        <MenuItem icon={<LogoutIcon />} title="Выйти" to="#" />
      </nav>
    </aside>
  )
}

export default Sidebar

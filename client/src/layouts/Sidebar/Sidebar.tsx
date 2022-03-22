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
}

const MenuItem = (props: IMenuItem) => {
  const outerRef = React.useRef<HTMLHeadingElement>(null),
    innerRef = React.useRef<HTMLSpanElement>(null)

  const { isOverflow, scrollDistance } = useIsOverflow(outerRef, innerRef)

  return (
    <NavLink
      to={props.to}
      className={(nav) =>
        classNames(styles.navlink, {
          [styles.active]: nav.isActive,
          [styles.marquee]: isOverflow
        })
      }
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
        <MenuItem title="О системе" to="about" />
        <Accordion title="Паспорт Приморского Края">
          <MenuItem title="Муниципальные образования" to="regions" />
          <MenuItem title="Населенные пункты" to="localities" />
          <MenuItem title="Реки" to="rivers" />
          <MenuItem title="Объекты жизнеобеспечения" to="facilities" />
          <MenuItem title="Телефонные справочники" to="phonebooks" />
        </Accordion>
        <MenuItem title="Угроза ЧС" to="outlook" />
        <MenuItem title="Краевая комиссия по ЧС" to="committee" />
        <Accordion title="Нормативные акты">
          <MenuItem title="Законы РФ" to="legal/ZRF" />
          <MenuItem title="Указы президента РФ" to="legal/UPR" />
          <MenuItem title="Постановления и распоряжения правительства РФ" to="legal/PPR" />
          <MenuItem title="Законы Приморского края" to="legal/ZPK" />
          <MenuItem
            title="Постановления и Распоряжения Губернатора (Администрации) Приморского края"
            to="legal/PG"
          />
          <MenuItem title="Документы МЧС" to="legal/VD" />
          <MenuItem title="Документы ГО ЧС" to="legal/DGC" />
          <MenuItem title="Документы других ведомств" to="legal/VDO" />
        </Accordion>
        <MenuItem title="Критерии информации о ЧС" to="synopsis" />
        <MenuItem title="Особо опасные объекты края" to="targets" />
        <MenuItem title="Силы и средства защиты" to="units" />
        <MenuItem title="Оперативная обстановка" to="situation" />
        <MenuItem title="Сводка оперативной обстановки" to="summary" />
        <MenuItem title="Архив ЧС, снятых с контроля" to="archive" />
        <MenuItem icon={<LogoutIcon />} title="Выйти" to="logout" />
      </nav>
    </aside>
  )
}

export default Sidebar

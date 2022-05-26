import classNames from 'classnames'

import NavItem from 'layouts/Sidebar/components/NavItem'
import Accordion from 'components/Accordion/Accordion'

import { useSidebar } from 'hooks/useSidebar'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
  const sidebarContext = useSidebar()

  // TODO: reduce to .map()
  return (
    <aside className={classNames(styles.container, { [styles.open]: sidebarContext?.isOpen })}>
      <nav className={styles.navMenu}>
        <NavItem title="О системе" to="/about" />
        <Accordion title="Паспорт Приморского Края">
          <NavItem title="Муниципальные образования" to="/regions" />
          <NavItem title="Населенные пункты" to="/localities" />
          <NavItem title="Реки" to="/rivers" />
          <NavItem title="Объекты жизнеобеспечения" to="/facilities" />
          <NavItem title="Телефонные справочники" to="/phonebooks" />
        </Accordion>
        <NavItem title="Угроза ЧС" to="/outlook" />
        <NavItem title="Краевая комиссия по ЧС" to="/committee" />
        <Accordion title="Нормативные акты">
          <NavItem title="Законы РФ" to="/legal/ZRF" />
          <NavItem title="Указы президента РФ" to="/legal/UPR" />
          <NavItem title="Постановления и распоряжения правительства РФ" to="/legal/PPR" />
          <NavItem title="Законы Приморского края" to="/legal/ZPK" />
          <NavItem
            title="Постановления и Распоряжения Губернатора (Администрации) Приморского края"
            to="/legal/PG"
          />
          <NavItem title="Документы МЧС" to="/legal/VD" />
          <NavItem title="Документы ГО ЧС" to="/legal/DGC" />
          <NavItem title="Документы других ведомств" to="/legal/VDO" />
        </Accordion>
        <NavItem title="Критерии информации о ЧС" to="/synopsis" />
        <NavItem title="Особо опасные объекты края" to="/targets" />
        <NavItem title="Силы и средства защиты" to="/units" />
        <NavItem title="Оперативная обстановка" to="/situation" />
        <NavItem title="Сводка оперативной обстановки" to="/summary" />
        <NavItem title="Архив ЧС, снятых с контроля" to="/archive" />
      </nav>
    </aside>
  )
}

export default Sidebar

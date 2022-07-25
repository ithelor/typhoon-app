import classNames from 'classnames'
import {
  BsInfoCircle as AboutIcon,
  BsLayoutTextWindow as RegionsIcon,
  BsExclamationTriangle as DangerIcon,
  BsPeople as CommissionsIcon,
  BsCheck2All as LegalIcon,
  BsFileText as DocsIcon,
  BsPerson as PersonIcon,
  BsFileCheck as CriteriaIcon,
  BsShieldCheck as UnitsIcon,
  BsClipboard as SituationIcon,
  BsClipboardData as SummaryIcon,
  BsArchive as ArchiveIcon
} from 'react-icons/bs'

import NavItem from 'layouts/Sidebar/components/NavItem'
import Accordion from './components/Accordion'

import { useSidebar } from 'hooks/useSidebar'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
  const sidebarContext = useSidebar()

  return (
    <aside className={classNames(styles.container, { [styles.open]: sidebarContext?.isOpen })}>
      <nav className={styles.navMenu}>
        <NavItem title="О системе" to="/about" icon={<AboutIcon />} />
        <NavItem title="Паспорт Приморского Края" to="/regions" icon={<RegionsIcon />} />
        <NavItem title="Угроза ЧС" to="/outlook" icon={<DangerIcon />} disabled />
        <NavItem title="Краевая комиссия по ЧС" to="/commissions" icon={<CommissionsIcon />} />
        <Accordion title="Нормативные акты">
          <NavItem title="Все" to="/legal" icon={<LegalIcon />} />
          <NavItem title="Законы РФ" to="/legal?type=ZRF" icon={<DocsIcon />} />
          <NavItem title="Указы президента РФ" to="/legal?type=UPR" icon={<PersonIcon />} />
          <NavItem
            title="Постановления и распоряжения правительства РФ"
            to="/legal?type=PPR"
            icon={<DocsIcon />}
          />
          <NavItem title="Законы Приморского края" to="/legal?type=ZPK" icon={<DocsIcon />} />
          <NavItem
            title="Постановления и Распоряжения Губернатора (Администрации) Приморского края"
            to="/legal?type=PG"
            icon={<PersonIcon />}
          />
          <NavItem title="Документы МЧС" to="/legal?type=VD" icon={<DocsIcon />} />
          <NavItem title="Документы ГО ЧС" to="/legal?type=DGC" icon={<DocsIcon />} />
          <NavItem title="Документы других ведомств" to="/legal?type=VDO" icon={<DocsIcon />} />
        </Accordion>
        <NavItem title="Критерии информации о ЧС" to="/criteria" icon={<CriteriaIcon />} disabled />
        <NavItem title="Особо опасные объекты края" to="/hazard" icon={<DangerIcon />} disabled />
        <NavItem title="Силы и средства защиты" to="/units" icon={<UnitsIcon />} disabled />
        <NavItem title="Оперативная обстановка" to="/situation" icon={<SituationIcon />} disabled />
        <NavItem
          title="Сводка оперативной обстановки"
          to="/summary"
          icon={<SummaryIcon />}
          disabled
        />
        <NavItem
          title="Архив ЧС, снятых с контроля"
          to="/archive"
          icon={<ArchiveIcon />}
          disabled
        />
      </nav>
    </aside>
  )
}

export default Sidebar

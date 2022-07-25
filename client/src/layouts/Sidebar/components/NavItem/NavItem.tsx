import React from 'react'
import classNames from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'
import { MdInfo as DefaultIcon } from 'react-icons/md'

import { useIsOverflow } from 'hooks/useIsOverflow'

import { CONTAINS_SEARCH } from 'shared/constants'

import styles from 'layouts/Sidebar/Sidebar.module.scss'

interface INavItem {
  title: string
  to: string
  icon?: React.ReactElement
  disabled?: boolean
}

const NavItem = (props: INavItem) => {
  const location = useLocation()

  const outerRef = React.useRef<HTMLHeadingElement>(null),
    innerRef = React.useRef<HTMLSpanElement>(null)

  const { isOverflow, scrollDistance } = useIsOverflow(outerRef, innerRef)

  const isActive = CONTAINS_SEARCH.find((value) => value === location.pathname)
    ? props.to === location.pathname + location.search
    : props.to === location.pathname

  return (
    <NavLink
      to={props.to}
      className={classNames(styles.navlink, {
        [styles.active]: isActive,
        [styles.marquee]: isOverflow,
        [styles.disabled]: props.disabled
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

export default NavItem

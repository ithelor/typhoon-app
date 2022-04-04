import React from 'react'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { MdExpandMore as ExpandMoreIcon, MdExpandLess as ExpandLessIcon } from 'react-icons/md'

import { useIsOverflow } from 'hooks/useIsOverflow'

import styles from './Accordion.module.scss'

interface IAccordion {
  title: string
  children: React.ReactElement[]
}

const Accordion = (props: IAccordion) => {
  const contentRef = React.useRef<HTMLDivElement>(null),
    outerRef = React.useRef<HTMLHeadingElement>(null),
    innerRef = React.useRef<HTMLSpanElement>(null)

  const [expanded, setExpanded] = React.useState(false)
  const { isOverflow, scrollDistance } = useIsOverflow(outerRef, innerRef)

  // expand accordion if child NavItem is [supposed to be] active
  const location = useLocation()

  const isActive = () => props.children.some((child) => location.pathname === child.props.to)

  React.useEffect(() => setExpanded(isActive), []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <li className={classNames(styles.container, { [styles.active]: isActive() })}>
      <button
        className={isOverflow ? styles.marquee : undefined}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
      </button>

      <div
        ref={contentRef}
        className={styles.content}
        style={
          expanded
            ? { height: contentRef.current?.scrollHeight, marginBottom: '1rem' }
            : { height: '0' }
        }
      >
        {props.children}
      </div>
    </li>
  )
}

export default Accordion

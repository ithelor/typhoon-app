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

  const [isExpanded, setIsExpanded] = React.useState(false)
  const { isOverflow, scrollDistance } = useIsOverflow(outerRef, innerRef)

  // expand accordion if child NavItem is active
  const location = useLocation()
  const isChildActive = () => props.children.some((child) => location.pathname === child.props.to)

  React.useEffect(() => setIsExpanded(isChildActive), []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <li className={classNames(styles.container, { [styles.active]: isChildActive() })}>
      <button
        className={isOverflow ? styles.marquee : undefined}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
          isExpanded
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

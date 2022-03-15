import React from 'react'
import { MdExpandMore as ExpandMoreIcon, MdExpandLess as ExpandLessIcon } from 'react-icons/md'

import styles from './Accordion.module.scss'

/**
 * Accordion Component
 */
interface IAccordion {
  title: string
  children: React.ReactElement | React.ReactElement[]
}

const Accordion = (props: IAccordion) => {
  const [expanded, setExpanded] = React.useState(false)
  const contentRef = React.useRef<HTMLDivElement>(null)

  return (
    <li className={styles.container}>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        <h3>
          <span>{props.title}</span>
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

import React from 'react'
import classNames from 'classnames'

import { BackdropContext } from 'contexts/BackdropContext'

interface IBackdropProvider {
  children: React.ReactElement | React.ReactElement[]
}

const BackdropProvider = (props: IBackdropProvider) => {
  const [backdropOpen, setBackdropOpen] = React.useState(false)

  return (
    <BackdropContext.Provider value={{ backdropOpen, setBackdropOpen }}>
      <div className={classNames('dim', { open: backdropOpen })}>
        {props.children}
      </div>
    </BackdropContext.Provider>
  )
}

export default BackdropProvider

import React from 'react'

import { BackdropContext } from 'contexts/BackdropContext'

export const useBackdrop = () => React.useContext(BackdropContext)

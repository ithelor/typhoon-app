import React from 'react'

export const useIsOverflow = (ref: React.RefObject<any>) => {
  const [isOverflow, setIsOverflow] = React.useState(false)

  React.useEffect(() => {
    if (ref.current!.scrollWidth > ref.current!.clientWidth) {
      setIsOverflow(true)
    }
  }, [ref])

  return isOverflow
}

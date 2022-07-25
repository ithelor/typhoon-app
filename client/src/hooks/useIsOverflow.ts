import React from 'react'

export const useIsOverflow = (
  outerRef: React.RefObject<HTMLElement>,
  innerRef: React.RefObject<HTMLElement>
) => {
  const [isOverflow, setIsOverflow] = React.useState(false)
  const [scrollDistance, setScrollDistance] = React.useState(0)

  React.useEffect(() => {
    setIsOverflow(outerRef.current!.scrollWidth >= outerRef.current!.clientWidth && true)
    setScrollDistance(innerRef.current!.offsetWidth - outerRef.current!.clientWidth + 10)
  }, [outerRef, innerRef])

  return { isOverflow, scrollDistance }
}

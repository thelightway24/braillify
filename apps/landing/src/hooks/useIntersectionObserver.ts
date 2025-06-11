'use client'

import { useEffect, useState } from 'react'

export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement | null>,
  options: IntersectionObserverInit,
  defaultIntersecting?: boolean,
) => {
  const [isIntersecting, setIsIntersecting] = useState(
    defaultIntersecting ?? false,
  )

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref, options])

  return isIntersecting
}

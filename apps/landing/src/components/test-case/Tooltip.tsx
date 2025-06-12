'use client'

import { VStack } from '@devup-ui/react'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

export default function Tooltip({
  children,
  isOpen,
}: {
  children: React.ReactNode
  isOpen: boolean
}) {
  const [viewportWidth, setViewportWidth] = useState(0)
  const [tooltipRect, setTooltipRect] = useState<DOMRect | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (typeof window === 'undefined') return

    setViewportWidth(window.innerWidth)

    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (ref.current) {
      setTooltipRect(ref.current.getBoundingClientRect())
    }
  }, [isOpen])

  return (
    <VStack
      ref={ref}
      _groupHover={{
        display: isOpen ? 'flex' : 'none',
      }}
      bg="rgba(0, 0, 0, 0.75)"
      borderRadius="4px"
      display="none"
      justifyContent="center"
      onMouseEnter={(e) => {
        e.stopPropagation()
      }}
      onMouseLeave={(e) => {
        e.stopPropagation()
      }}
      pos="absolute"
      px="10px"
      py="8px"
      style={{
        right:
          tooltipRect && tooltipRect.x + tooltipRect.width > viewportWidth
            ? '16px'
            : 'unset',
      }}
      transform="translateY(10px)"
      transition="all 0.3s ease-in-out"
    >
      {children}
    </VStack>
  )
}

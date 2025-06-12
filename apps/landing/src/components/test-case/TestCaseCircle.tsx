'use client'

import { Box } from '@devup-ui/react'
import { useState } from 'react'

import Tooltip from './Tooltip'

export default function TestCaseCircle({
  children,
  isSuccess,
}: {
  children: React.ReactNode
  isSuccess: boolean
}) {
  const [isHover, setIsHover] = useState(false)

  return (
    <Box role="group">
      <Box
        aspectRatio="1"
        bg={isSuccess ? '$success' : '$error'}
        borderRadius="100px"
        boxSize="16px"
        cursor="pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
      <Tooltip isOpen={isHover}>{children}</Tooltip>
    </Box>
  )
}

'use client'

import { Box, Button } from '@devup-ui/react'
import { getTheme, setTheme } from '@devup-ui/react'

export default function ThemeSwitch() {
  return (
    <Button
      bg="transparent"
      border="none"
      cursor="pointer"
      onClick={() => {
        setTheme(getTheme() === 'dark' ? 'light' : 'dark')
      }}
      p="0"
    >
      <Box
        bg="$text"
        boxSize="24px"
        h={['32px', null, null, '50px']}
        maskImage="url(/images/color-theme.svg)"
        maskPosition="center"
        maskRepeat="no-repeat"
        maskSize="contain"
        zIndex="1"
      />
    </Button>
  )
}

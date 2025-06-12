'use client'

import { Box, Button, getTheme, setTheme } from '@devup-ui/react'

export default function ThemeSwitch() {
  return (
    <Button
      aria-label="Toggle theme"
      bg="transparent"
      border="none"
      cursor="pointer"
      onClick={() => {
        setTheme(getTheme() === 'dark' ? 'light' : 'dark')
      }}
      p="0"
    >
      <Box
        _themeLight={{ display: 'block' }}
        bg="$text"
        boxSize="24px"
        display="none"
        h={['32px', null, null, '50px']}
        maskImage="url(/images/color-theme.svg)"
        maskPosition="center"
        maskRepeat="no-repeat"
        maskSize="contain"
        zIndex="1"
      />
      <Box
        _themeDark={{ display: 'block' }}
        bg="$text"
        boxSize="24px"
        display="none"
        h={['32px', null, null, '50px']}
        maskImage="url(/images/color-theme-dark.svg)"
        maskPosition="center"
        maskRepeat="no-repeat"
        maskSize="contain"
        zIndex="1"
      />
    </Button>
  )
}

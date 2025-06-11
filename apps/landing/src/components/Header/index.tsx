'use client'

import { Box, Flex } from '@devup-ui/react'
import Link from 'next/link'
import { useRef } from 'react'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import IconHamburger from '../icons/IconHamburger'
import MobileMenu from './MobileMenu'
import MobileMenuButton from './MobileMenuButton'
import Pages from './Pages'
import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersectionObserver(headerRef, {
    rootMargin: '-50px',
    threshold: 0,
  })

  return (
    <>
      <Box
        h={['60px', null, null, '100px']}
        left="0"
        p={['4px', null, null, '10px']}
        position="fixed"
        right="0"
        top="0"
        w="100%"
        zIndex="10"
      >
        <Flex
          alignItems="center"
          bg={isIntersecting ? 'transparent' : '$containerBackground'}
          borderRadius={['10px', null, null, '20px']}
          flex="1"
          h="100%"
          justifyContent="space-between"
          position="relative"
          px={['16px', null, null, '40px']}
          transition="background-color 0.3s ease"
        >
          <Link href="/">
            <Box
              aspectRatio="122.87/50.00"
              bg="$text"
              h={['32px', null, null, '50px']}
              maskImage="url(/images/home/hero.svg)"
              maskSize="contain"
              zIndex="1"
            />
          </Link>
          <Pages isIntersecting={isIntersecting} />
          <Flex
            alignItems="center"
            display={['none', null, null, 'flex']}
            gap="32px"
          >
            <Link href="https://github.com/dev-five-git/braillify">
              <Box
                bg="$text"
                boxSize="24px"
                h={['32px', null, null, '50px']}
                maskImage="url(/images/github.svg)"
                maskPosition="center"
                maskRepeat="no-repeat"
                maskSize="contain"
                zIndex="1"
              />
            </Link>
            <Link href="#">
              <Box
                bg="$text"
                boxSize="24px"
                h={['32px', null, null, '50px']}
                maskImage="url(/images/discord.svg)"
                maskPosition="center"
                maskRepeat="no-repeat"
                maskSize="contain"
                zIndex="1"
              />
            </Link>
            <Link href="#">
              <Box
                bg="$text"
                boxSize="24px"
                h={['32px', null, null, '50px']}
                maskImage="url(/images/kakao.svg)"
                maskPosition="center"
                maskRepeat="no-repeat"
                maskSize="contain"
                zIndex="1"
              />
            </Link>
            <ThemeSwitch />
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          display={['flex', null, null, 'none']}
          gap="10px"
        >
          <MobileMenuButton>
            <IconHamburger />
          </MobileMenuButton>
        </Flex>
      </Box>
      <Box ref={headerRef} h={['60px', null, null, '100px']} />
      <MobileMenu />
    </>
  )
}

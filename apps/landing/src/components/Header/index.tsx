import { Box, Flex, Image } from '@devup-ui/react'
import Link from 'next/link'

import IconColorTheme from '../icons/IconColorTheme'
import IconDiscord from '../icons/IconDiscord'
import IconGithub from '../icons/IconGithub'
import IconHamburger from '../icons/IconHamburger'
import IconKakao from '../icons/IconKakao'
import MobileMenu from './MobileMenu'
import MobileMenuButton from './MobileMenuButton'
import Pages from './Pages'

export default function Header() {
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
          bg="$containerBackground"
          borderRadius={['10px', null, null, '20px']}
          flex="1"
          h="100%"
          justifyContent="space-between"
          position="relative"
          px={['16px', null, null, '40px']}
        >
          <Link href="/">
            <Image
              aspectRatio="122.87/50.00"
              h={['32px', null, null, '50px']}
              src="/images/home/hero.svg"
            />
          </Link>
          <Pages />
          <Flex
            alignItems="center"
            display={['none', null, null, 'flex']}
            gap="10px"
          >
            <IconGithub />
            <IconDiscord />
            <IconKakao />
            <IconColorTheme />
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
        </Flex>
      </Box>
      <Box h={['60px', null, null, '100px']} />
      <MobileMenu />
    </>
  )
}

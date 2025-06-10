import { Box, Flex, Image, Text } from '@devup-ui/react'
import Link from 'next/link'

import IconColorTheme from '../icons/IconColorTheme'
import IconDiscord from '../icons/IconDiscord'
import IconGithub from '../icons/IconGithub'
import IconKakao from '../icons/IconKakao'

export default function Header() {
  return (
    <Box
      h="100px"
      left="0"
      p="10px"
      position="fixed"
      right="0"
      top="0"
      w="100%"
      zIndex="10"
    >
      <Flex
        alignItems="center"
        bg="$containerBackground"
        borderRadius="20px"
        flex="1"
        h="100%"
        justifyContent="space-between"
        position="relative"
        px="40px"
      >
        <Link href="/">
          <Image
            aspectRatio="122.87/50.00"
            h="50px"
            src="/images/home/hero.svg"
          />
        </Link>

        <Flex alignItems="center" gap="40px">
          <Link href="/docs">
            <Flex alignItems="center" gap="10px" p="40px">
              <Box
                aspectRatio="1/1"
                border="1px solid $text"
                borderRadius="50%"
                h="12px"
              />
              <Text>문서</Text>
            </Flex>
          </Link>
          <Link href="/test-case">
            <Flex alignItems="center" gap="10px" p="40px">
              <Box
                aspectRatio="1/1"
                border="1px solid $text"
                borderRadius="50%"
                h="12px"
              />
              <Text>테스트 케이스</Text>
            </Flex>
          </Link>
          <Flex alignItems="center" gap="10px" p="40px">
            <Box
              aspectRatio="1/1"
              border="1px solid $text"
              borderRadius="50%"
              h="12px"
            />
            <Text>팀 소개</Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" gap="10px">
          <IconGithub />
          <IconDiscord />
          <IconKakao />
          <IconColorTheme />
        </Flex>
      </Flex>
    </Box>
  )
}

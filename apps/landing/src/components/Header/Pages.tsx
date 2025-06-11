'use client'

import { Box, Flex, Text } from '@devup-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Pages() {
  const pathname = usePathname()

  return (
    <Flex
      alignItems="center"
      color="$text"
      display={['none', null, null, 'flex']}
      gap="40px"
    >
      <Link href="/docs">
        <Flex alignItems="center" gap="10px" p="40px">
          <Box
            aspectRatio="1/1"
            bg={pathname.startsWith('/docs') ? '$text' : 'transparent'}
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
            bg={pathname.startsWith('/test-case') ? '$text' : 'transparent'}
            border="1px solid $text"
            borderRadius="50%"
            h="12px"
          />
          <Text>테스트 케이스</Text>
        </Flex>
      </Link>
      <Link href="/team">
        <Flex alignItems="center" gap="10px" p="40px">
          <Box
            aspectRatio="1/1"
            bg={pathname.startsWith('/team') ? '$text' : 'transparent'}
            border="1px solid $text"
            borderRadius="50%"
            h="12px"
          />
          <Text>팀 소개</Text>
        </Flex>
      </Link>
    </Flex>
  )
}

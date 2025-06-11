'use client'

import { Box, Center, Flex, Image, Text, VStack } from '@devup-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'

import IconColorTheme from '../icons/IconColorTheme'
import IconDiscord from '../icons/IconDiscord'
import IconGithub from '../icons/IconGithub'
import IconKakao from '../icons/IconKakao'
import MobileMenuProvider, {
  MobileMenuItem,
  MobileMenuSubItem,
} from './MobileMenuProvider'

export default function MobileMenu() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const menuOpen = searchParams.get('menuOpen')

  return (
    <>
      {menuOpen === 'true' && (
        <VStack
          bg="$containerBackground"
          h="100vh"
          inset="0"
          position="absolute"
          w="100%"
          zIndex="100"
        >
          <Flex
            borderBottom="1px solid $border"
            justifyContent="space-between"
            w="100%"
          >
            <Flex alignItems="center" h="100%">
              <Center px="10px" py="13px">
                <IconGithub />
              </Center>
              <Center px="10px" py="13px">
                <IconDiscord />
              </Center>
              <Center px="10px" py="13px">
                <IconKakao />
              </Center>
              <Center px="10px" py="13px">
                <IconColorTheme />
              </Center>
            </Flex>
            <Box onClick={() => router.push(`?menuOpen=false`)} p="10px">
              <Image alt="close icon" boxSize="32px" src="/images/close.svg" />
            </Box>
          </Flex>
          <MobileMenuProvider>
            <MobileMenuItem>
              <Box borderBottom="1px solid $border" px="16px" py="20px">
                <Text typography="button">문서</Text>
              </Box>
            </MobileMenuItem>
            <MobileMenuSubItem>
              <VStack bg="$background" px="16px" typography="docsMenu">
                <Box onClick={() => router.push(`/docs/overview`)} p="10px">
                  <Text opacity="0.8">개요</Text>
                </Box>
                <Box onClick={() => router.push(`/docs/installation`)} p="10px">
                  <Text opacity="0.8">설치</Text>
                </Box>
                <MobileMenuProvider>
                  <MobileMenuItem>
                    <Flex alignItems="center" justifyContent="space-between">
                      <Box p="10px">
                        <Text opacity="0.8">개념</Text>
                      </Box>
                      <Image
                        alt="arrow icon"
                        boxSize="16px"
                        src="/images/docs/menu-arrow.svg"
                      />
                    </Flex>
                  </MobileMenuItem>
                  <MobileMenuSubItem>
                    <VStack borderLeft="1px solid $border" ml="10px">
                      <Box
                        onClick={() =>
                          router.push(`/docs/concept/utility-first`)
                        }
                        p="10px"
                      >
                        <Text opacity="0.8">유틸리티 퍼스트</Text>
                      </Box>
                      <Box
                        onClick={() =>
                          router.push(`/docs/concept/hybrid-approach`)
                        }
                        p="10px"
                      >
                        <Text opacity="0.8">하이브리드 접근 방식</Text>
                      </Box>
                      <Box
                        onClick={() =>
                          router.push(`/docs/concept/headless-components`)
                        }
                        p="10px"
                      >
                        <Text opacity="0.8">헤드리스 컴포넌트</Text>
                      </Box>
                    </VStack>
                  </MobileMenuSubItem>
                </MobileMenuProvider>
                <MobileMenuProvider>
                  <MobileMenuItem>
                    <Flex alignItems="center" justifyContent="space-between">
                      <Box p="10px">
                        <Text opacity="0.8">구성요소</Text>
                      </Box>
                      <Image
                        alt="arrow icon"
                        boxSize="16px"
                        src="/images/docs/menu-arrow.svg"
                      />
                    </Flex>
                  </MobileMenuItem>
                  <MobileMenuSubItem>
                    <VStack borderLeft="1px solid $border" ml="10px">
                      <Box
                        onClick={() => router.push(`/docs/components/icon`)}
                        p="10px"
                      >
                        <Text opacity="0.8">아이콘</Text>
                      </Box>
                    </VStack>
                  </MobileMenuSubItem>
                </MobileMenuProvider>
                <MobileMenuProvider>
                  <MobileMenuItem>
                    <Flex alignItems="center" justifyContent="space-between">
                      <Box p="10px">
                        <Text opacity="0.8">API</Text>
                      </Box>
                      <Image
                        alt="arrow icon"
                        boxSize="16px"
                        src="/images/docs/menu-arrow.svg"
                      />
                    </Flex>
                  </MobileMenuItem>
                  <MobileMenuSubItem>
                    <VStack borderLeft="1px solid $border" ml="10px">
                      <Box p="10px">
                        <Text opacity="0.8">스타일이 지정됨</Text>
                      </Box>
                      <Box p="10px">
                        <Text opacity="0.8">CSS</Text>
                      </Box>
                    </VStack>
                  </MobileMenuSubItem>
                </MobileMenuProvider>
                <MobileMenuProvider>
                  <MobileMenuItem>
                    <Flex alignItems="center" justifyContent="space-between">
                      <Box p="10px">
                        <Text opacity="0.8">테마</Text>
                      </Box>
                      <Image
                        alt="arrow icon"
                        boxSize="16px"
                        src="/images/docs/menu-arrow.svg"
                      />
                    </Flex>
                  </MobileMenuItem>
                  <MobileMenuSubItem>
                    <VStack borderLeft="1px solid $border" ml="10px">
                      <Box
                        onClick={() => router.push(`/docs/theme/custom-theme`)}
                        p="10px"
                      >
                        <Text opacity="0.8">테마 사용자 정의</Text>
                      </Box>
                      <Box
                        onClick={() => router.push(`/docs/theme/theme-tokens`)}
                        p="10px"
                      >
                        <Text opacity="0.8">테마 토큰</Text>
                      </Box>
                      <Box
                        onClick={() => router.push(`/docs/theme/breakpoints`)}
                        p="10px"
                      >
                        <Text opacity="0.8">중단점</Text>
                      </Box>
                      <Box
                        onClick={() =>
                          router.push(`/docs/theme/component-themes`)
                        }
                        p="10px"
                      >
                        <Text opacity="0.8">구성 요소 테마</Text>
                      </Box>
                    </VStack>
                  </MobileMenuSubItem>
                </MobileMenuProvider>
              </VStack>
            </MobileMenuSubItem>
          </MobileMenuProvider>
          <Box borderBottom="1px solid $border" px="16px" py="20px">
            <Text typography="button">테스트 케이스</Text>
          </Box>
          <Box borderBottom="1px solid $border" px="16px" py="20px">
            <Text typography="button">팀 소개</Text>
          </Box>
        </VStack>
      )}
    </>
  )
}

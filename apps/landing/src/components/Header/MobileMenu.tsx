'use client'

import { Box, Center, Flex, Image, Text, VStack } from '@devup-ui/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import IconColorTheme from '../icons/IconColorTheme'
import IconDiscord from '../icons/IconDiscord'
import IconGithub from '../icons/IconGithub'
import IconKakao from '../icons/IconKakao'
import MobileMenuProvider, {
  MobileMenuItem,
  MobileMenuItemBox,
  MobileMenuSubItem,
} from './MobileMenuProvider'

export default function MobileMenu() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const menuOpen = searchParams.get('menuOpen')
  const pathname = usePathname()

  return (
    <>
      {menuOpen === 'true' && (
        <VStack
          bg="$containerBackground"
          h="100vh"
          inset="0"
          position="fixed"
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
              <VStack bg="$background" pt="4px" px="16px" typography="docsMenu">
                <MobileMenuItemBox
                  onClick={() => router.push(`/docs/overview`)}
                  selected={pathname === '/docs/overview'}
                >
                  <Flex
                    alignItems="center"
                    gap="10px"
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Text>개요</Text>
                  </Flex>
                </MobileMenuItemBox>
                <MobileMenuItemBox
                  onClick={() => router.push(`/docs/installation`)}
                  selected={pathname === '/docs/installation'}
                >
                  <Flex
                    alignItems="center"
                    gap="10px"
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Text>설치</Text>
                  </Flex>
                </MobileMenuItemBox>
                <MobileMenuProvider>
                  <MobileMenuItem>
                    <MobileMenuItemBox
                      selected={pathname.startsWith('/docs/concept')}
                    >
                      <Flex
                        alignItems="center"
                        gap="10px"
                        justifyContent="space-between"
                        w="100%"
                      >
                        <Text>개념</Text>
                        <Image
                          alt="arrow icon"
                          boxSize="16px"
                          src="/images/docs/menu-arrow.svg"
                        />
                      </Flex>
                    </MobileMenuItemBox>
                  </MobileMenuItem>
                  <MobileMenuSubItem>
                    <VStack
                      borderLeft="1px solid $border"
                      gap="4px"
                      ml="10px"
                      mt="4px"
                      paddingLeft="8px"
                    >
                      <MobileMenuItemBox
                        onClick={() =>
                          router.push(`/docs/concept/utility-first`)
                        }
                        selected={pathname.startsWith(
                          '/docs/concept/utility-first',
                        )}
                      >
                        <Flex
                          alignItems="center"
                          gap="10px"
                          justifyContent="space-between"
                          w="100%"
                        >
                          <Text>유틸리티 퍼스트</Text>
                        </Flex>
                      </MobileMenuItemBox>
                      <MobileMenuItemBox
                        onClick={() =>
                          router.push(`/docs/concept/hybrid-approach`)
                        }
                        selected={pathname.startsWith(
                          '/docs/concept/hybrid-approach',
                        )}
                      >
                        <Flex
                          alignItems="center"
                          gap="10px"
                          justifyContent="space-between"
                          w="100%"
                        >
                          <Text>하이브리드 접근 방식</Text>
                        </Flex>
                      </MobileMenuItemBox>
                      <MobileMenuItemBox
                        onClick={() =>
                          router.push(`/docs/concept/headless-components`)
                        }
                        selected={pathname.startsWith(
                          '/docs/concept/headless-components',
                        )}
                      >
                        <Text opacity="0.8">하이브리드 접근 방식</Text>
                      </MobileMenuItemBox>
                    </VStack>
                  </MobileMenuSubItem>
                </MobileMenuProvider>
                <MobileMenuProvider>
                  <MobileMenuItem>
                    <MobileMenuItemBox
                      selected={pathname.startsWith('/docs/components')}
                    >
                      <Flex
                        alignItems="center"
                        gap="10px"
                        justifyContent="space-between"
                        w="100%"
                      >
                        <Text>구성요소</Text>
                        <Image
                          alt="arrow icon"
                          boxSize="16px"
                          src="/images/docs/menu-arrow.svg"
                        />
                      </Flex>
                    </MobileMenuItemBox>
                  </MobileMenuItem>
                  <MobileMenuSubItem>
                    <VStack
                      borderLeft="1px solid $border"
                      ml="10px"
                      mt="4px"
                      paddingLeft="8px"
                    >
                      <MobileMenuItemBox
                        onClick={() => router.push(`/docs/components/icon`)}
                        selected={pathname.startsWith('/docs/components/icon')}
                      >
                        <Text>아이콘</Text>
                      </MobileMenuItemBox>
                    </VStack>
                  </MobileMenuSubItem>
                </MobileMenuProvider>
                <MobileMenuProvider>
                  <MobileMenuItem>
                    <MobileMenuItemBox
                      selected={pathname.startsWith('/docs/api')}
                    >
                      <Flex
                        alignItems="center"
                        gap="10px"
                        justifyContent="space-between"
                        w="100%"
                      >
                        <Text>API</Text>
                        <Image
                          alt="arrow icon"
                          boxSize="16px"
                          src="/images/docs/menu-arrow.svg"
                        />
                      </Flex>
                    </MobileMenuItemBox>
                  </MobileMenuItem>
                  <MobileMenuSubItem>
                    <VStack
                      borderLeft="1px solid $border"
                      ml="10px"
                      mt="4px"
                      paddingLeft="8px"
                    >
                      <MobileMenuItemBox
                        onClick={() => router.push(`/docs/api/style-props`)}
                        selected={pathname.startsWith('/docs/api/style-props')}
                      >
                        <Text>스타일이 지정됨</Text>
                      </MobileMenuItemBox>
                      <MobileMenuItemBox
                        onClick={() => router.push(`/docs/api/css`)}
                        selected={pathname.startsWith('/docs/api/css')}
                      >
                        <Text>CSS</Text>
                      </MobileMenuItemBox>
                    </VStack>
                  </MobileMenuSubItem>
                </MobileMenuProvider>
                <MobileMenuProvider>
                  <MobileMenuItem>
                    <MobileMenuItemBox
                      selected={pathname.startsWith('/docs/theme')}
                    >
                      <Flex
                        alignItems="center"
                        gap="10px"
                        justifyContent="space-between"
                        w="100%"
                      >
                        <Text>테마</Text>
                        <Image
                          alt="arrow icon"
                          boxSize="16px"
                          src="/images/docs/menu-arrow.svg"
                        />
                      </Flex>
                    </MobileMenuItemBox>
                  </MobileMenuItem>
                  <MobileMenuSubItem>
                    <VStack
                      borderLeft="1px solid $border"
                      ml="10px"
                      mt="4px"
                      paddingLeft="8px"
                    >
                      <MobileMenuItemBox
                        onClick={() => router.push(`/docs/theme/custom-theme`)}
                        selected={pathname.startsWith(
                          '/docs/theme/custom-theme',
                        )}
                      >
                        <Text>테마 사용자 정의</Text>
                      </MobileMenuItemBox>
                      <MobileMenuItemBox
                        onClick={() => router.push(`/docs/theme/theme-tokens`)}
                        selected={pathname.startsWith(
                          '/docs/theme/theme-tokens',
                        )}
                      >
                        <Text>테마 토큰</Text>
                      </MobileMenuItemBox>
                      <MobileMenuItemBox
                        onClick={() => router.push(`/docs/theme/breakpoints`)}
                        selected={pathname.startsWith(
                          '/docs/theme/breakpoints',
                        )}
                      >
                        <Text>중단점</Text>
                      </MobileMenuItemBox>
                      <MobileMenuItemBox
                        onClick={() =>
                          router.push(`/docs/theme/component-themes`)
                        }
                        selected={pathname.startsWith(
                          '/docs/theme/component-themes',
                        )}
                      >
                        <Text>구성 요소 테마</Text>
                      </MobileMenuItemBox>
                    </VStack>
                  </MobileMenuSubItem>
                </MobileMenuProvider>
              </VStack>
            </MobileMenuSubItem>
          </MobileMenuProvider>
          <Box
            borderBottom="1px solid $border"
            onClick={() => router.push(`/test-case`)}
            px="16px"
            py="20px"
          >
            <Text typography="button">테스트 케이스</Text>
          </Box>
          <Box
            borderBottom="1px solid $border"
            onClick={() => router.push(`/team`)}
            px="16px"
            py="20px"
          >
            <Text typography="button">팀 소개</Text>
          </Box>
        </VStack>
      )}
    </>
  )
}

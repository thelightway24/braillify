import { Box, Grid, Text, VStack } from '@devup-ui/react'
import { readFile } from 'fs/promises'

import TestCaseCircle from '@/components/test-case/TestCaseCircle'

export default async function TestCasePage() {
  const [testStatus, ruleMap] = await Promise.all([
    readFile('../../test_status.json', 'utf-8').then((data) =>
      JSON.parse(data),
    ) as Promise<
      Record<
        string,
        [
          success: number,
          fail: number,
          Array<
            [text: string, expected: string, actual: string, isSuccess: boolean]
          >,
        ]
      >
    >,
    readFile('../../rule_map.json', 'utf-8').then((data) =>
      JSON.parse(data),
    ) as Promise<Record<string, { title: string; description: string }>>,
  ])

  return (
    <Box maxW="1920px" mx="auto" pb="100px" w="100%">
      <VStack
        gap="20px"
        px={['16px', null, null, '60px']}
        py={['30px', null, null, '40px']}
      >
        <Text color="$title" typography="title">
          테스트 케이스
        </Text>
        <Text color="$text" typography="body">
          모든 테스트 케이스는{' '}
          <Text
            _hover={{
              textDecoration: 'underline',
            }}
            as="a"
            color="$link"
            href="/2024 개정 한국 점자 규정.pdf"
            target="_blank"
          >
            2024 개정 한국 점자 규정
          </Text>
          을 기반으로 작성되었습니다.
        </Text>
      </VStack>
      {Object.entries(ruleMap).map(([key, value]) => {
        return (
          <VStack
            key={key}
            flex="1"
            gap={['30px', null, null, '40px']}
            px={['16px', null, null, '60px']}
            py={['30px', null, null, '40px']}
          >
            <VStack gap="20px">
              <Text color="$title" typography="docsTitle">
                {value.title} ({testStatus[key][0]}/
                {testStatus[key][1] + testStatus[key][0]})
              </Text>
              <Text color="$text" typography="body">
                {value.description}
              </Text>
            </VStack>
            <Box bg="$text" h="1px" />
            <Grid
              gap="8px"
              gridTemplateColumns="repeat(auto-fill, minmax(16px, 1fr))"
            >
              {testStatus[key][2].map(
                ([text, expected, actual, isSuccess], idx) => (
                  <TestCaseCircle key={text + idx} isSuccess={isSuccess}>
                    <Text
                      color="#FFF"
                      typography="body"
                      whiteSpace="nowrap"
                      wordBreak="keep-all"
                    >
                      {text}
                      <br />
                      정답 : {expected}
                      <br />
                      결과 : {actual}
                      <br />
                      {isSuccess ? '✅ 테스트 성공' : '❌ 테스트 실패'}
                    </Text>
                  </TestCaseCircle>
                ),
              )}

              {/* {Array.from({ length: 20 }).map((_, index) => (
            <VStack key={index} gap="8px">
              <Flex
                justifyContent="space-between"
                px={[null, null, null, '20px']}
              >
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
                <Box
                  aspectRatio="1"
                  bg="$text"
                  borderRadius="100px"
                  boxSize="16px"
                />
              </Flex>
            </VStack>
          ))} */}
            </Grid>
          </VStack>
        )
      })}
    </Box>
  )
}

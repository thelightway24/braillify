import { Box, Flex, Text, VStack } from '@devup-ui/react'

export default function TestCasePage() {
  return (
    <VStack
      flex="1"
      gap={['30px', null, null, '40px']}
      minH="100vh"
      px={['16px', null, null, '60px']}
      py={['30px', null, null, '40px']}
    >
      <VStack gap="20px">
        <Text color="$title" typography="docsTitle">
          테스트 케이스
        </Text>
        <Text color="$text" typography="body">
          때 노래였네 고이 봅니다. 빈 척 생명들 있으랴 쌓인 알리라, 청명한
          가시옵소서. 노래를 까닭입니다.
        </Text>
      </VStack>
      <Box bg="$text" h="1px" />
      <VStack gap="8px">
        {Array.from({ length: 20 }).map((_, index) => (
          <VStack key={index} gap="8px">
            <Flex
              justifyContent="space-between"
              px={[null, null, null, '20px']}
            >
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
              <Box
                aspectRatio="1/1"
                bg="$text"
                borderRadius="100px"
                boxSize="16px"
              />
            </Flex>
          </VStack>
        ))}
      </VStack>
    </VStack>
  )
}

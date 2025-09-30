import { Box, Flex, Text, VStack } from '@devup-ui/react'
import { Metadata } from 'next'

import TeamMemberCard from '@/components/team/TeamMemberCard'

export const metadata: Metadata = {
  alternates: {
    canonical: '/team',
  },
}

export default function TeamPage() {
  return (
    <VStack
      flex="1"
      gap="40px"
      maxW="1520px"
      minH="calc(100vh - 100px)"
      mx="auto"
      px={['16px', null, '30px', '60px']}
      py={['30px', null, null, '40px']}
      w="100%"
    >
      <VStack gap="20px">
        <Text color="$title" typography="docsTitle">
          팀 소개
        </Text>
        <Text color="$text" typography="body">
          Braillify 를 주도하는 팀원들입니다.
        </Text>
      </VStack>
      <Box bg="$text" h="1px" />
      <Flex w="100%">
        <Flex flexWrap="wrap" gap="20px" px={[null, null, null, '20px']}>
          <TeamMemberCard
            bgImage="/images/team/image-01.jpg"
            githubUrl="https://github.com/owjs3901"
            instagramUrl="https://www.instagram.com/owjs3901"
            name="Jeong Min Oh"
            position="LEAD"
            profileImage="https://avatars.githubusercontent.com/u/12480623?v=4"
          />
        </Flex>
      </Flex>
    </VStack>
  )
}

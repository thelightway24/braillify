import { Box, Flex, Text, VStack } from '@devup-ui/react'

import TeamMemberCard from '@/components/team/TeamMemberCard'

export default function TeamPage() {
  return (
    <VStack
      flex="1"
      gap="40px"
      minH="calc(100vh - 100px)"
      px={['16px', null, '30px', '60px']}
      py={['30px', null, null, '40px']}
    >
      <VStack gap="20px">
        <Text color="$title" typography="docsTitle">
          팀 소개
        </Text>
        <Text color="$text" typography="body">
          때 노래였네 고이 봅니다. 빈 척 생명들 있으랴 쌓인 알리라, 청명한
          가시옵소서. 노래를 까닭입니다.
        </Text>
      </VStack>
      <Box bg="$text" h="1px" />
      <Flex
        flexWrap="wrap"
        gap="20px"
        justifyContent="center"
        overflowX="auto"
        px={[null, null, null, '20px']}
      >
        <TeamMemberCard
          bgImage="/images/team/image-01.jpg"
          name="Gildong Hong"
          position="FULL-STACK"
          profileImage="/images/team/profile-01.jpg"
        />
        <TeamMemberCard
          bgImage="/images/team/image-02.jpg"
          name="Jieun Lee"
          position="FRONT-END"
          profileImage="/images/team/profile-02.jpg"
        />
        <TeamMemberCard
          bgImage="/images/team/image-03.jpg"
          name="Chunhyang Seong"
          position="BACK-END"
          profileImage="/images/team/profile-03.jpg"
        />
        <TeamMemberCard
          bgImage="/images/team/image-03.jpg"
          name="Chunhyang Seong"
          position="BACK-END"
          profileImage="/images/team/profile-03.jpg"
        />
      </Flex>
    </VStack>
  )
}

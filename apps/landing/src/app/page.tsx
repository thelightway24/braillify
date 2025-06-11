import { Box, Flex, Image, Text, VStack } from '@devup-ui/react'

import PillButton from '@/components/home/PillButton'
import IconDiscord from '@/components/icons/IconDiscord'
import IconKakao from '@/components/icons/IconKakao'

export default function HomePage() {
  return (
    <VStack alignItems="center" bg="$background" position="relative">
      <Box
        px={['16px', null, '30px', '80px']}
        py={['40px', null, null, '100px']}
      >
        <Image
          display={['none', null, null, 'block']}
          h="1019px"
          pos="absolute"
          right="47.172px"
          src="/images/home/background-braille.svg"
          top="145px"
          w="236.82798767089844px"
        />
        <VStack gap="80px" position="relative" zIndex="1">
          <VStack alignItems={['center', null, null, 'flex-start']}>
            <Box
              bg="$text"
              h={[null, null, '288px', '341px']}
              maskImage="url(/images/home/hero.svg)"
              maskPosition="start"
              maskRepeat="no-repeat"
              maskSize="contain"
              mb={['30px', null, null, '60px']}
              w={['100%', null]}
            />
            <VStack gap={['20px', null, null, '40px']}>
              <Text color="$text" typography="mainText">
                실시간 한글 점역 라이브러리
              </Text>
              <PillButton>
                <Text color="#FFF" typography="buttonLg">
                  지금 시작하기
                </Text>
              </PillButton>
            </VStack>
          </VStack>
          <Flex
            alignItems="center"
            flexDirection={['column', null, null, 'row']}
            gap={['12px', null, null, '30px']}
            h={['auto', null, null, '500px']}
          >
            <Flex
              bg="$containerBackground"
              borderRadius={['16px', null, null, '30px']}
              flex="1"
              gap="10px"
              h="100%"
              p={['16px', null, null, '40px']}
            >
              <Text color="$text" opacity="0.5" typography="braille">
                braillify는 한글 점역을 빠르고 안정적으로 처리하는 Rust 기반
                라이브러리입니다. Node.js, WebAssembly, Python 등 다양한
                환경에서 사용할 수 있어요.점역하고 싶은 문장이나 단어를 여기에
                입력해 직접 확인해보세요!
              </Text>
            </Flex>
            <Flex>
              <Image
                display={['none', null, null, 'block']}
                mr="10px"
                src="/images/home/translate-arrow-circle.svg"
                w="16px"
              />
              <Image
                src="/images/home/translate-arrow.svg"
                transform={['rotate(0deg)', null, null, 'rotate(-90deg)']}
                w={['16px', null, null, '24px']}
              />
            </Flex>
            <Flex
              bg="$containerBackground"
              borderRadius={['16px', null, null, '30px']}
              flex="1"
              gap="10px"
              h="100%"
              p={['16px', null, null, '40px']}
            >
              <Text
                color="$text"
                flex="1"
                lineBreak="anywhere"
                opacity="0.5"
                typography="braille"
              >
                ⠴⠃⠗⠁⠊⠇⠇⠊⠋⠽⠲⠉⠵⠀⠚⠒⠈⠮⠀⠨⠎⠢⠱⠁⠮⠀⠠⠘⠐⠪⠈⠥⠀⠣⠒⠨⠻⠨⠹⠪⠐⠥⠀⠰⠎⠐⠕⠚⠉⠵⠀⠴⠠⠗⠥⠌⠲⠀⠈⠕⠘⠒⠀⠐⠣⠕⠘⠪⠐⠎⠐⠕⠕⠃⠉⠕⠊⠲⠴⠠⠝⠕⠙⠑⠲⠚⠎⠂⠀⠠⠺⠑⠃⠠⠁⠎⠎⠑⠍⠃⠇⠽⠂⠀⠠⠏⠽⠹⠕⠝⠲⠀⠊⠪⠶⠀⠊⠣⠜⠶⠚⠒⠀⠚⠧⠒⠈⠻⠝⠠⠎⠀⠇⠬⠶⠚⠂⠀⠠⠍⠀⠕⠌⠎⠬⠲⠨⠎⠢⠱⠁⠚⠈⠥⠀⠠⠕⠲⠵⠀⠑⠛⠨⠶⠕⠉⠀⠊⠒⠎⠐⠮⠀⠱⠈⠕⠝⠀⠕⠃⠐⠱⠁⠚⠗⠀⠨⠕⠁⠨⠎⠃⠀⠚⠧⠁⠟⠚⠗⠘⠥⠠⠝⠬⠖
              </Text>
            </Flex>
          </Flex>
        </VStack>
      </Box>
      <Flex
        flexDirection={['column', null, null, 'row']}
        gap="80px"
        px={['16px', null, null, '60px']}
        py={['30px', null, null, '80px']}
      >
        <VStack gap="20px">
          <Flex gap="16px">
            <Text color="$text" typography="title">
              braillify의 특징
            </Text>
            <Box aspectRatio="1/1" bg="$text" borderRadius="50%" h="16px" />
          </Flex>
          <Text color="$text" typography="bodyLg">
            ‘Braille(점자)’에 ‘-ify(~화化하다)’를 더해
            <br /> 한층 더 쉬운 점자화를 보다 널리 퍼뜨리고자 만든
            프로젝트입니다.
            <br />
            모두가 점역을 이해하고 활용할 수 있는 환경을 함께 만들어갑니다.
          </Text>
        </VStack>
        <VStack flex="1" justifyContent="center">
          <Flex
            borderBottom="1px solid $text"
            borderTop="1px solid $text"
            gap="50px"
            p={['16px', null, null, '50px']}
            position="relative"
          >
            <VStack flex="1" gap="12px">
              <Text color="$text" typography="featureCount">
                01
              </Text>
              <Text color="$text" typography="featureTitle">
                2024 개정 한국 점자 규정 기반 점역기
              </Text>
              <Text color="$text" typography="body">
                braillify는 2024년 개정된 한국 점자 규정을 기반으로 설계되고
                구현된 점역기입니다.더 이상 유지보수가 어렵고, 레거시 코드에
                의존해 최신 규정과 맞지 않는 점역기를 사용할 필요가 없습니다.
                글의 문맥을 고려해 다양한 경우의 수를 판단하여 더욱 자연스럽고
                정확한 점역 결과를 제공합니다.
              </Text>
            </VStack>
            <Box
              aspectRatio="1/1"
              bg="$text"
              borderRadius="50%"
              boxSize={['12px', null, null, '16px']}
              position={['absolute', null, null, 'static']}
              right="20px"
              top="20px"
            />
          </Flex>
          <Flex
            borderBottom="1px solid $text"
            gap="50px"
            p={['16px', null, null, '50px']}
            position="relative"
          >
            <VStack flex="1" gap="12px">
              <Text color="$text" typography="featureCount">
                02
              </Text>
              <Text color="$text" typography="featureTitle">
                완전한 오픈소스 프로젝트
              </Text>
              <Text color="$text" typography="body">
                기존에도 점사랑, 하상브레일 등 다양한 점역기가 존재했고, 일부는
                API를 제공하기도 했습니다.하지만 이들은 대부분 소스가 공개되지
                않았고, 점역을 위해 API 서버에 연결해야 했습니다. braillify는
                다릅니다. 누구나 접근하고, 함께 개선해 나갈 수 있도록 점자 표준
                구현 전 과정을 오픈소스로 제공합니다.
              </Text>
            </VStack>
            <Box
              aspectRatio="1/1"
              bg="$text"
              borderRadius="50%"
              boxSize={['12px', null, null, '16px']}
              position={['absolute', null, null, 'static']}
              right="20px"
              top="20px"
            />
          </Flex>
          <Flex
            borderBottom="1px solid $text"
            gap="50px"
            p={['16px', null, null, '50px']}
            position="relative"
          >
            <VStack flex="1" gap="12px">
              <Text color="$text" typography="featureCount">
                03
              </Text>
              <Text color="$text" typography="featureTitle">
                Rust 기반 크로스 플랫폼
              </Text>
              <Text color="$text" typography="body">
                braillify는 Rust 언어로 개발되었으며, Node.js, Rust, Python
                환경을 모두 지원합니다. 또한 WebAssembly(wasm)도 지원하여,
                네트워크나 외부 연결 없이 자신의 PC에서 바로 실행 가능한 구조를
                가지고 있습니다. 이를 통해 플랫폼에 구애받지 않고 더 자유롭고
                유연한 활용이 가능합니다. 원하는 플랫폼이 있다면 Devfive와 함께
                braillify를 확장하고 발전시켜보세요.
              </Text>
            </VStack>
            <Box
              aspectRatio="1/1"
              bg="$text"
              borderRadius="50%"
              boxSize={['12px', null, null, '16px']}
              position={['absolute', null, null, 'static']}
              right="20px"
              top="20px"
            />
          </Flex>
        </VStack>
      </Flex>
      <Flex gap="100px" px={['16px', null, null, '80px']} py="100px" w="100%">
        <Flex
          alignItems={['center', null, null, 'flex-start']}
          bg="url(/images/home/texture.png)"
          bgPosition="center"
          bgSize="cover"
          borderRadius={['20px', null, null, '40px']}
          flex="1"
          flexDirection={['column', null, null, 'row']}
          justifyContent="space-between"
          position="relative"
          px={['50px', null, null, '100px']}
          py={['30px', null, null, '80px']}
          w="100%"
        >
          <VStack gap="20px">
            <Flex
              gap="16px"
              justifyContent={['center', null, null, 'flex-start']}
            >
              <Text color="#FFF" typography="title" whiteSpace="nowrap">
                공식 커뮤니티 참여하기
              </Text>
              <Box aspectRatio="1/1" bg="#FFF" borderRadius="50%" h="16px" />
            </Flex>
            <Text
              color="#FFF"
              textAlign={['center', null, null, 'left']}
              typography="bodyLg"
            >
              braillify의 커뮤니티에 참여해
              <br /> 점자와 세상, 모두를 연결하는 여정을 시작해보세요.
            </Text>
          </VStack>
          <VStack gap="20px" justifyContent="center" pt="80px">
            <PillButton>
              <Flex gap="16px">
                <IconKakao color="#FFF" />
                <Text color="#FFF" typography="button">
                  카카오톡 오픈 채팅
                </Text>
              </Flex>
            </PillButton>
            <PillButton>
              <Flex gap="16px">
                <IconDiscord color="#FFF" />
                <Text color="#FFF" typography="button">
                  디스코드 서버
                </Text>
              </Flex>
            </PillButton>
          </VStack>
        </Flex>
      </Flex>
    </VStack>
  )
}

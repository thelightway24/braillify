'use client'
import { Box, Flex, Image, Input, Text, VStack } from '@devup-ui/react'
import { useEffect, useState } from 'react'

export function Trans() {
  const [input, setInput] = useState('')
  const [translateToUnicode, setTranslateToUnicode] = useState<
    (input: string) => string
  >(() => () => '')
  useEffect(() => {
    import('braillify').then((mod) => {
      setTranslateToUnicode(() => (input: string) => {
        try {
          return mod.translateToUnicode(input)
        } catch (e) {
          console.error(e)
          return '점역할 수 없는 문자가 있습니다.'
        }
      })
    })
  }, [input])
  return (
    <VStack gap={['16px', null, null, '30px']}>
      <Flex
        alignItems="flex-start"
        gap={['10px', null, null, '20px']}
        justifyContent={['center', null, null, 'flex-start']}
      >
        <Box
          aria-label="Finger pointing image"
          bg="$text"
          flexShrink={0}
          h={['20px', null, null, '32px']}
          maskImage="url(/images/home/finger-point.svg)"
          maskPosition="center"
          maskRepeat="no-repeat"
          maskSize="contain"
          w={['17px', null, null, '28px']}
        />
        <Text color="$text" pos="relative" top="-2px" typography="mainTextSm">
          직접 입력해 실시간 점자 번역을 체험해보세요!
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        flexDirection={['column', null, null, 'row']}
        gap={['12px', null, null, '30px']}
        h={['auto', null, null, '500px']}
      >
        <Flex flex="1" h="100%" w="100%">
          <Input
            as="textarea"
            bg="$containerBackground"
            border="none"
            borderRadius={['16px', null, null, '30px']}
            color="$text"
            h={['400px', null, null, 'auto']}
            onChange={(e) => setInput(e.target.value)}
            p={['16px', null, null, '40px']}
            placeholder={
              'braillify는 한글 점역을 빠르고 안정적으로 처리하는 Rust 기반 라이브러리입니다.\nNode.js, WebAssembly, Python 등 다양한 환경에서 사용할 수 있어요.\n\n점역하고 싶은 문장이나 단어를 여기에 입력해 직접 확인해보세요!'
            }
            resize="none"
            selectors={{
              '&::placeholder': {
                color: '$text',
                typography: 'braille',
                opacity: 0.5,
              },
            }}
            typography="braille"
            value={input}
            w="100%"
          />
        </Flex>
        <Flex>
          <Image
            alt=""
            display={['none', null, null, 'block']}
            mr="10px"
            src="/images/home/translate-arrow-circle.svg"
            w="16px"
          />
          <Image
            alt=""
            src="/images/home/translate-arrow.svg"
            transform={['rotate(0deg)', null, null, 'rotate(-90deg)']}
            w={['16px', null, null, '24px']}
          />
        </Flex>
        <Flex flex="1" h="100%" w="100%">
          <Input
            as="textarea"
            bg="$containerBackground"
            border="none"
            borderRadius={['16px', null, null, '30px']}
            color="$text"
            h={['400px', null, null, 'auto']}
            p={['16px', null, null, '40px']}
            placeholder={
              '⠴⠃⠗⠁⠊⠇⠇⠊⠋⠽⠲⠉⠵ ⠚⠒⠈⠮ ⠨⠎⠢⠱⠁⠮ ⠠⠘⠐⠪⠈⠥ ⠣⠒⠨⠻⠨⠹⠪⠐⠥ ⠰⠎⠐⠕⠚⠉⠵ ⠴⠠⠗⠥⠌⠲ ⠈⠕⠘⠒ ⠐⠣⠕⠘⠪⠐⠎⠐⠕⠕⠃⠉⠕⠊⠲\n⠴⠠⠝⠕⠙⠑⠲⠚⠎⠂ ⠠⠺⠑⠃⠠⠁⠎⠎⠑⠍⠃⠇⠽⠂ ⠠⠏⠽⠹⠕⠝⠲ ⠊⠪⠶ ⠊⠣⠜⠶⠚⠒ ⠚⠧⠒⠈⠻⠝⠠⠎ ⠇⠬⠶⠚⠂ ⠠⠍ ⠕⠌⠎⠬⠲\n\n⠨⠎⠢⠱⠁⠚⠈⠥ ⠠⠕⠲⠵ ⠑⠛⠨⠶⠕⠉ ⠊⠒⠎⠐⠮ ⠱⠈⠕⠝ ⠕⠃⠐⠱⠁⠚⠗ ⠨⠕⠁⠨⠎⠃ ⠚⠧⠁⠟⠚⠗⠘⠥⠠⠝⠬⠖'
            }
            readOnly
            resize="none"
            selectors={{
              '&::placeholder': {
                color: '$text',
                typography: 'braille',
                opacity: 0.5,
              },
            }}
            typography="braille"
            value={translateToUnicode(input)}
            w="100%"
          />
        </Flex>
      </Flex>
    </VStack>
  )
}

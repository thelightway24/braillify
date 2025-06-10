import { Box, Flex, Text } from '@devup-ui/react'

import IconBraillify from '../icons/IconBraillify'

export default function Footer() {
  return (
    <Flex
      bg="#373634"
      flexDirection={['column', null, null, 'row']}
      gap={['30px', null, null, '0']}
      justifyContent="space-between"
      px={['16px', null, null, '80px']}
      py={['40px', null, null, '60px']}
      w="100%"
    >
      <Flex justifyContent={['flex-start', null, null, 'center']}>
        <IconBraillify color="#FFF" height="50px" opacity="0.6" stroke="#FFF" />
      </Flex>
      <Text color="#FFF" opacity="0.6" textAlign="right" typography="footer">
        상호: (주)데브파이브 | 대표자명: 오정민 |{' '}
        <Box as="br" display={['block', null, null, 'none']} />
        사업자등록번호: 868-86-03159 |
        <Box as="br" display={['block', null, null, 'none']} />
        주소: 경기 고양시 덕양구 마상로140번길 81 4층
        <br /> Copyright © 2021-2024 데브파이브. All Rights Reserved.
      </Text>
    </Flex>
  )
}

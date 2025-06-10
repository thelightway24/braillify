import { Flex, Text } from '@devup-ui/react'

import IconBraillify from '../icons/IconBraillify'

export default function Footer() {
  return (
    <Flex
      bg="#373634"
      justifyContent="space-between"
      px="80px"
      py="60px"
      w="100%"
    >
      <IconBraillify color="#FFF" height="50px" opacity="0.6" stroke="#FFF" />
      <Text color="#FFF" opacity="0.6" textAlign="right" typography="footer">
        상호: (주)데브파이브 | 대표자명: 오정민 | 사업자등록번호: 868-86-03159 |
        주소: 경기 고양시 덕양구 마상로140번길 81 4층
        <br /> Copyright © 2021-2024 데브파이브. All Rights Reserved.
      </Text>
    </Flex>
  )
}

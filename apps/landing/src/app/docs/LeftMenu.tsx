import { VStack } from '@devup-ui/react'

import { MenuItem } from './MenuItem'

export function LeftMenu() {
  return (
    <VStack gap="6px">
      <MenuItem to="/docs/overview">개요</MenuItem>
      <MenuItem to="/docs/installation">설치</MenuItem>
      <MenuItem to="/docs/api">API</MenuItem>
      <MenuItem to="/docs/contributing">기여하기</MenuItem>
    </VStack>
  )
}

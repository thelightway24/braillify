import { VStack } from '@devup-ui/react'

import { MenuItem } from './MenuItem'

export function LeftMenu() {
  return (
    <VStack gap="6px">
      <MenuItem to="/docs/overview">개요</MenuItem>
      <MenuItem to="/docs/installation">설치</MenuItem>
      <MenuItem
        subMenu={[
          {
            to: '/docs/features/utility-first',
            children: '유틸리티 퍼스트',
          },
          {
            to: '/docs/features/hybrid-approach',
            children: '하이브리드 접근 방식',
          },
          {
            to: '/docs/features/headless-components',
            children: '헤드리스 컴포넌트',
          },
        ]}
        to="/docs/features"
      >
        개념
      </MenuItem>
      <MenuItem
        subMenu={[
          {
            to: '/docs/api/box',
            children: '스타일이 지정됨',
          },
          {
            to: '/docs/api/css',
            children: 'CSS',
          },
        ]}
      >
        API
      </MenuItem>
      <MenuItem
        subMenu={[
          {
            to: '/docs/theme/custom-theme',
            children: '테마 사용자 정의',
          },
          {
            to: '/docs/theme/theme-tokens',
            children: '테마 토큰',
          },
          {
            to: '/docs/theme/breakpoints',
            children: '중단점',
          },
          {
            to: '/docs/theme/component-themes',
            children: '구성 요소 테마',
          },
        ]}
      >
        테마
      </MenuItem>
    </VStack>
  )
}

'use client'

import { Button } from '@devup-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function MobileMenuButton({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const menuOpen = searchParams.get('menuOpen')

  return (
    <Button
      bg="transparent"
      border="none"
      onClick={() => {
        router.push(`?menuOpen=${menuOpen === 'true' ? 'false' : 'true'}`)
      }}
    >
      {children}
    </Button>
  )
}

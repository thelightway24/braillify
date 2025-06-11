'use client'

import { Box } from '@devup-ui/react'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'

export const MobileMenuContext = createContext<{
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}>({
  isOpen: false,
  setIsOpen: () => {},
})

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext)

  if (!context) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider')
  }

  return context
}

export const MobileMenuItem = ({ children }: { children: React.ReactNode }) => {
  const { setIsOpen } = useMobileMenu()

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return <Box onClick={handleToggleOpen}>{children}</Box>
}

export const MobileMenuSubItem = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { isOpen } = useMobileMenu()

  return isOpen ? children : null
}

export default function MobileMenuProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

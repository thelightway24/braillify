'use client'

import { Box, Flex } from '@devup-ui/react'
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

export const MobileMenuItemBox = ({
  selected,
  children,
  onClick,
}: {
  selected: boolean
  children: React.ReactNode
  onClick?: () => void
}) => {
  return (
    <Flex
      alignItems="center"
      bg={selected ? '$menuActive' : 'transparent'}
      borderRadius="6px"
      gap="10px"
      onClick={onClick}
      opacity={selected ? 1 : 0.8}
      p="10px"
    >
      {selected && <Box bg="$primary" borderRadius="50%" boxSize="8px" />}
      {children}
    </Flex>
  )
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

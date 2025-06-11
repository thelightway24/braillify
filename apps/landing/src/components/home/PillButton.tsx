import { Box, Button, Flex } from '@devup-ui/react'
import Link from 'next/link'

export default function PillButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Link href="/docs/overview">
      <Button bg="transparent" border="none" cursor="pointer" role="group">
        <Flex
          alignItems="center"
          bg="#2B2B2B"
          borderRadius="1000px"
          justifyContent="space-between"
          px={['20px', null, null, '40px']}
          py={['16px', null, null, '20px']}
          w={['240px', null, null, '300px']}
        >
          {children}
          <Box boxSize="16px" position="relative">
            <Box
              _groupActive={{
                bg: 'url(/images/home/button-arrow.svg)',
                bgPosition: 'center',
                bgRepeat: 'no-repeat',
                bgSize: 'contain',
                boxSize: '32px',
              }}
              _groupHover={{
                bg: 'url(/images/home/button-arrow.svg)',
                bgPosition: 'center',
                bgRepeat: 'no-repeat',
                bgSize: 'contain',
                boxSize: '40px',
              }}
              aspectRatio="1"
              bg="#FFF"
              borderRadius="50%"
              boxSize="100%"
              left="50%"
              position="absolute"
              top="50%"
              transform="translate(-50%, -50%)"
              transition="all 0.2s ease"
            />
          </Box>
        </Flex>
      </Button>
    </Link>
  )
}

'use client'

import { Box, DevupProps, Flex, Input, Text } from '@devup-ui/react'
import { useRef } from 'react'

import { useBoundingClientRect } from '@/hooks/useBoundingClientRect'
import { useViewportSize } from '@/hooks/useViewportSize'
import { Merge } from '@/types'

export function TransInput({
  input,
  setInput,
  blurPlaceholder,
  focusPlaceholder,
  isFocused,
  ...props
}: {
  input?: string
  setInput?: (input: string) => void
  blurPlaceholder: string
  focusPlaceholder: string
  isFocused?: boolean
} & Merge<React.ComponentProps<'textarea'>, DevupProps<'textarea'>>) {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)
  const placeholderRect = useBoundingClientRect(placeholderRef)
  const viewportSize = useViewportSize()

  const handleClickPlaceholder = () => {
    inputRef.current?.focus()
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    props.onBlur?.(e)
  }

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    props.onFocus?.(e)
  }

  return (
    <Flex flex="1" h="100%" pos="relative" w="100%">
      <Input
        ref={inputRef}
        as="textarea"
        bg="$containerBackground"
        border="none"
        borderRadius={['16px', null, null, '30px']}
        color="$text"
        h="100%"
        onBlur={handleBlur}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setInput?.(e.target.value)
        }
        onFocus={handleFocus}
        p={['16px', null, null, '40px']}
        resize="none"
        style={{
          height: isFocused
            ? '100%'
            : viewportSize.width < 992
              ? placeholderRect?.height + 'px'
              : '100%',
        }}
        transition="height 0.3s ease-in-out"
        typography="braille"
        value={input}
        w="100%"
        {...props}
      />
      {input?.length === 0 && (
        <Box
          ref={placeholderRef}
          left="0"
          onClick={handleClickPlaceholder}
          opacity={0.5}
          p={['16px', null, null, '40px']}
          pos="absolute"
          top="0"
          w="100%"
        >
          <Text
            color="$text"
            lineBreak="anywhere"
            typography="braille"
            whiteSpace="pre-line"
          >
            {isFocused ? focusPlaceholder : blurPlaceholder}
          </Text>
        </Box>
      )}
    </Flex>
  )
}

import { useEffect, useState, useRef, ChangeEvent } from 'react'
import { Flex, Input, Label } from 'theme-ui'

export const SearchField = () => {
  const [input, setInput] = useState<string>('')

  const inputRef = useRef<HTMLInputElement | null>(null)

  // Focus search input on init render
  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      {/* TODO: Font Weights are not applying correctly from theme - submit github issue */}
      <Label htmlFor="search" sx={{ fontSize: 1, fontWeight: 300 }}>
        Search
      </Label>
      <Input
        id="search"
        name="search"
        variant="shadow"
        value={input}
        onChange={onChange}
        ref={inputRef}
      />
    </Flex>
  )
}

import { SearchIcon } from '@chakra-ui/icons'
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { usePipesContext } from '../../contexts/PipesContext'

export function Header() {
  const { search, setSearch } = usePipesContext()
  //Todo: search update using debounce to avoid a lot of renders

  return (
    <Flex padding="2rem 0" alignItems="center" justifyContent="space-between">
      <Heading textAlign="center">Your Pipes</Heading>
      <InputGroup width="50%">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.900" />}
        />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search a pipe"
        />
      </InputGroup>
    </Flex>
  )
}

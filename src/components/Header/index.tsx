import { SearchIcon } from "@chakra-ui/icons"
import { Flex, Heading, Input, InputGroup, InputLeftElement} from "@chakra-ui/react"

export function Header() {
    return (
    <Flex padding="2rem 0" alignItems="center" justifyContent="space-between">
      <Heading textAlign="center" >
        Your Pipes
      </Heading>
      <InputGroup width="50%" >
       <InputLeftElement
         pointerEvents="none"
         children={<SearchIcon color="gray.900" />}
       />
      <Input type="search" placeholder="Type a pipe" />
      </InputGroup>
    </Flex>
    )
}
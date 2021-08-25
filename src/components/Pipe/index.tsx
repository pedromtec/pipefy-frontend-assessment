import type { OrganizationPipe } from '../../graphql/types'
import { Box, Heading, Text, Button } from "@chakra-ui/react"

type PipeProps = Omit<OrganizationPipe, 'id'>

export function Pipe({ name, cards_count }: PipeProps) {
    return (
        <Box  w="180px" h="200px" bg="papayawhip" borderRadius="lg">
          <Heading  as="h3" size="md" >
              {name}
          </Heading>
          <Text>{cards_count} cards</Text>
          <Button colorScheme="teal" size="xs">
            Show cards
          </Button>
        </Box>
    )
}
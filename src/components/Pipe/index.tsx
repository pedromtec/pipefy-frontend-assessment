import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'
import type { OrganizationPipe } from '../../graphql/types'
import { usePipesContext } from '../../contexts/PipesContext'

type PipeProps = {
  pipe: OrganizationPipe
}

export function Pipe({ pipe }: PipeProps) {
  const { setSelectedPipe } = usePipesContext()

  const handleClick = () => {
    setSelectedPipe(pipe)
  }

  return (
    <>
      <Box
        w="11.25rem"
        h="12.5rem"
        bg={`${pipe.color}.200`}
        borderRadius="lg"
        padding="3"
      >
        <Flex height="50%" alignItems="center" direction="column">
          <Heading as="h2" size="md" textAlign="center" paddingBottom="2">
            {pipe.name}
          </Heading>
          <Text>{pipe.cards_count} cards</Text>
        </Flex>
        <Flex height="50%" alignItems="flex-end">
          <Button
            onClick={handleClick}
            colorScheme="blackAlpha"
            size="sm"
            width="100%"
          >
            Show cards
          </Button>
        </Flex>
      </Box>
    </>
  )
}

import type { OrganizationPipe } from '../../graphql/types'
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react"
import { useState } from 'react'
import { CardsModal } from '../CardsModal'

type PipeProps = OrganizationPipe

export function Pipe({ name, cards_count, color, id }: PipeProps) {

    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Box  w="180px" h="200px" bg={`${color}.200`} borderRadius="lg" padding="3" >
          <Flex height="50%" alignItems="center" direction="column">
            <Heading  as="h2" size="md" textAlign="center" paddingBottom="2">
                {name}
            </Heading>
            <Text>{cards_count} cards</Text>
          </Flex>
          <Flex height="50%" alignItems="flex-end">
            <Button onClick={() => setIsOpen(true)} colorScheme="blackAlpha" size="sm" width="100%">
              Show cards
            </Button>
          </Flex>
        </Box>
        <CardsModal pipeId={id} isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      </>
    )
}
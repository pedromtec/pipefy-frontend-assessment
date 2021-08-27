import { useQuery } from '@apollo/client'
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Flex,
  Button,
  CircularProgress
} from '@chakra-ui/react'
import { useMemo } from 'react'
import { QUERY_CARDS } from '../../graphql/queries/cards'
import type { QueryCards, QueryCardsVariables } from '../../graphql/types'

type CardTableProps = {
  pipeId?: string
}

const ITEMS_PER_PAGE = 4

export function CardsTable({ pipeId }: CardTableProps) {
  const { data, loading, fetchMore } = useQuery<
    QueryCards,
    QueryCardsVariables
  >(QUERY_CARDS, {
    variables: {
      cardsPipeId: pipeId!,
      cardsFirst: ITEMS_PER_PAGE
    }
  })

  const cards = useMemo(
    () =>
      data?.cards.edges.map(({ node }) => ({
        id: node.id,
        title: node.title,
        createdAt: new Date(node.createdAt).toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }),
        done: node.done ? 'Yes' : 'No'
      })),
    [data?.cards.edges]
  )

  const pageInfo = data?.cards.pageInfo

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="16rem">
        <CircularProgress isIndeterminate color="pink" />
      </Flex>
    )
  }

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th width="10rem">Date</Th>
            <Th>Done</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cards?.map((card) => (
            <Tr key={card.id}>
              <Td>{card.title}</Td>
              <Td>{card.createdAt}</Td>
              <Td>{card.done}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex
        direction="row"
        justifyContent="center"
        paddingTop="5"
        alignItems="center"
      >
        <Button
          colorScheme="pink"
          disabled={!pageInfo?.hasNextPage}
          onClick={() => {
            if (pageInfo?.hasNextPage) {
              fetchMore({
                variables: {
                  cardsFirst: ITEMS_PER_PAGE,
                  cardsAfter: pageInfo.endCursor
                },
                updateQuery(prevResult, { fetchMoreResult }) {
                  const mergedEdges = [
                    ...(prevResult?.cards.edges ?? []),
                    ...(fetchMoreResult?.cards.edges ?? [])
                  ]

                  fetchMoreResult!.cards.edges = mergedEdges
                  return fetchMoreResult!
                }
              })
            }
          }}
        >
          Show more
        </Button>
      </Flex>
    </Box>
  )
}

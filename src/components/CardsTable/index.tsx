import { useQuery } from "@apollo/client";
import { Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Box } from "@chakra-ui/react";
import { QUERY_CARDS } from '../../graphql/queries/cards'
import { QueryCards, QueryCardsVariables } from "../../graphql/types";
import { Pagination } from "../Pagination/Index";

type CardTableProps = {
    pipeId: string
}

export function CardsTable({ pipeId }: CardTableProps) {

    const { data } = useQuery<QueryCards, QueryCardsVariables>(QUERY_CARDS, {
        variables: {
            cardsPipeId: "301735351",
            cardsFirst: 4
        }
    })
    const cards = data?.cards.edges.map(({node}) => ({
        id: node.id,
        title: node.title,
        createdAt: new Date(node.createdAt).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }),
        done: node.done ? 'Yes' : 'No'
    }))

    return (
        <Box>
        <Table variant="simple" >
  <Thead>
    <Tr>
      <Th>Title</Th>
      <Th width="10rem">Date</Th>
      <Th>Done</Th>
    </Tr>
  </Thead>
  <Tbody>
    {cards?.map( card => (
        <Tr key={card.id}>
        <Td>{card.title}</Td>
        <Td>{card.createdAt}</Td>
        <Td>{card.done}</Td>
      </Tr>
    ) )}
  </Tbody>
</Table>
<Pagination />
</Box>
    )
}
import { gql } from '@apollo/client'

export const QUERY_CARDS = gql`
  query QueryCards(
    $cardsPipeId: ID!
    $cardsFirst: Int
    $cardsLast: Int
    $cardsBefore: String
    $cardsAfter: String
    $cardsSearch: CardSearch
  ) {
    cards(
      pipe_id: $cardsPipeId
      first: $cardsFirst
      last: $cardsLast
      before: $cardsBefore
      after: $cardsAfter
      search: $cardsSearch
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          createdAt
          title
          id
          done
        }
      }
    }
  }
`

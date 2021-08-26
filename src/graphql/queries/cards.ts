import { gql } from '@apollo/client'

export const QUERY_CARDS = gql`
  query QueryCards($cardsPipeId: ID!, $cardsFirst: Int) {
    cards(pipe_id: $cardsPipeId, first: $cardsFirst) {
      edges {
        node {
          title
          id
          done
          createdAt
        }
      }
    }
  }
`

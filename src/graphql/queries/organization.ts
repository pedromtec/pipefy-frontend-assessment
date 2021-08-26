import { gql } from '@apollo/client'

export const QUERY_ORGANIZATION = gql`
  query QueryOrganization($organizationId: ID!) {
    organization(id: $organizationId) {
      pipes {
        color
        cards_count
        name
        id
        icon
      }
    }
  }
`

// Todo: Generate types using apollo codegen
export type OrganizationPipe = {
  id: string
  color?: string
  cards_count?: number
  name?: string
  icon?: string
}

export type QueryOrganization = {
  organization: {
    pipes: OrganizationPipe[]
  }
}

export type QueryOrganizationVariables = {
  organizationId: string
}

export type QueryCards = {
  cards: {
    pageInfo: {
      endCursor: string
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor: string
    }
    edges: {
      node: {
        title?: string
        id: string
        done: boolean
        createdAt: string
      }
    }[]
  }
}
export type QueryCardsVariables = {
  cardsLast?: number
  cardsPipeId: string
  cardsFirst?: number
  cardsBefore?: string
  cardsAfter?: string
  cardsSearch?: string
}

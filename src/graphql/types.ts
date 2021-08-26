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
  cardsPipeId: string
  cardsFirst?: number
}

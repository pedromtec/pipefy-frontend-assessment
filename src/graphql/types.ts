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
  
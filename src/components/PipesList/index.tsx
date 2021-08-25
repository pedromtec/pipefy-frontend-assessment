import { useQuery } from '@apollo/client'
import { QUERY_ORGANIZATION } from '../../graphql/queries/organization';
import type { QueryOrganization, QueryOrganizationVariables } from '../../graphql/types';
import { Pipe } from '../Pipe';
import { Wrap, WrapItem } from "@chakra-ui/react"

const organizationId = '300562393'

export function PipesList() {

  const { data, loading } = useQuery<QueryOrganization, QueryOrganizationVariables>(QUERY_ORGANIZATION, {
    variables: {
      organizationId
    }
  })

  if(loading) {
    return <p>Loading ...</p>
  }

  return (
      <Wrap spacing="8" justifyContent="center" alignItems="center" height="100%" display="flex">
        {data?.organization.pipes.map(pipe => (
            <WrapItem key={pipe.id}><Pipe id={pipe.id} name={pipe.name} cards_count={pipe.cards_count} color={pipe.color} /></WrapItem>
        ))}
      </Wrap>    
  );
}


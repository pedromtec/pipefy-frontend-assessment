import { useQuery } from '@apollo/client'
import { QUERY_ORGANIZATION } from '../../graphql/queries/organization';
import type { QueryOrganization, QueryOrganizationVariables } from '../../graphql/types';
import { Pipe } from '../Pipe';
import * as S from './styles'

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
    <S.Wrapper>
      <S.ListContainer>
        {data?.organization.pipes.map(pipe => (
            <li key={pipe.id}><Pipe name={pipe.name} cards_count={pipe.cards_count} color={pipe.color} /></li>
        ))}
      </S.ListContainer>
    </S.Wrapper>
  );
}


import { useQuery } from '@apollo/client'
import { QUERY_ORGANIZATION } from '../../graphql/queries/organization'
import type {
  QueryOrganization,
  QueryOrganizationVariables
} from '../../graphql/types'
import { Pipe } from '../Pipe'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { usePipesContext } from '../../contexts/PipesContext'
import { useMemo } from 'react'

const organizationId = '300562393'

export function PipesList() {
  const { data, loading } = useQuery<
    QueryOrganization,
    QueryOrganizationVariables
  >(QUERY_ORGANIZATION, {
    variables: {
      organizationId
    }
  })

  const { search } = usePipesContext()
  const lowerCaseSearch = search.toLocaleLowerCase()

  const pipes = useMemo(
    () =>
      data?.organization.pipes
        .filter((pipe) =>
          pipe.name?.toLocaleLowerCase().includes(lowerCaseSearch)
        )
        .sort((pipeA, pipeB) => pipeA.name!.localeCompare(pipeB.name!)),
    [data?.organization.pipes, lowerCaseSearch]
  )

  if (loading) {
    return <p>Loading ...</p>
  }

  return (
    <Wrap
      spacing="8"
      justifyContent="center"
      alignItems="center"
      height="100%"
      display="flex"
    >
      {pipes?.map((pipe) => (
        <WrapItem key={pipe.id}>
          <Pipe pipe={pipe} />
        </WrapItem>
      ))}
    </Wrap>
  )
}

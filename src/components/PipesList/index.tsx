import { useQuery } from '@apollo/client'
import { QUERY_ORGANIZATION } from '../../graphql/queries/organization'
import type {
  QueryOrganization,
  QueryOrganizationVariables
} from '../../graphql/types'
import { Pipe } from '../Pipe'
import { Skeleton, Wrap, WrapItem } from '@chakra-ui/react'
import { usePipesContext } from '../../contexts/PipesContext'
import { useMemo } from 'react'

const organizationId = '300562393'

const SKELETONS = 12

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
    return (
      <Wrap
        spacing="8"
        justifyContent="center"
        alignItems="center"
        height="100%"
        display="flex"
      >
        {Array.from({ length: SKELETONS }).map((_, index) => (
          <WrapItem key={index}>
            <Skeleton height="200px" width="180px" />
          </WrapItem>
        ))}
      </Wrap>
    )
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

import { useQuery } from '@apollo/client'
import { QUERY_ORGANIZATION } from '../../graphql/queries/organization'
import type {
  QueryOrganization,
  QueryOrganizationVariables
} from '../../graphql/types'
import { Pipe } from '../Pipe'
import { Flex, SimpleGrid, Skeleton, WrapItem } from '@chakra-ui/react'
import { usePipesContext } from '../../contexts/PipesContext'
import { useMemo } from 'react'

const Skeletons = ({ quantity }: { quantity: number }) => (
  <>
    {Array.from({ length: quantity }).map((_, index) => (
      <WrapItem key={index}>
        <Skeleton height="200px" width="100%" />
      </WrapItem>
    ))}
  </>
)

const ORGANIZATION_ID = '300562393'

export function PipesList() {
  const { data, loading } = useQuery<
    QueryOrganization,
    QueryOrganizationVariables
  >(QUERY_ORGANIZATION, {
    variables: {
      organizationId: ORGANIZATION_ID
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
        .sort((pipeA, pipeB) =>
          pipeA.name!.trim().localeCompare(pipeB.name!.trim())
        ),
    [data?.organization.pipes, lowerCaseSearch]
  )

  return (
    <SimpleGrid gap="20px" columns={[1, 3, 4, 5]}>
      {loading ? (
        <Skeletons quantity={12} />
      ) : (
        pipes?.map((pipe) => (
          <Flex key={pipe.id} justifyContent={['center']}>
            <Pipe pipe={pipe} />
          </Flex>
        ))
      )}
    </SimpleGrid>
  )
}

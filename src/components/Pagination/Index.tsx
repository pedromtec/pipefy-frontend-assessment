import { Box, Flex, IconButton, Stack } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

type PaginationProps = {
  hasNextPage: boolean
  hasPreviousPage: boolean
  onNextClick: () => void
  onPreviousClick: () => void
}

export function Pagination({
  hasNextPage,
  hasPreviousPage,
  onNextClick,
  onPreviousClick
}: PaginationProps) {
  return (
    <Flex
      direction="row"
      justifyContent="flex-end"
      paddingTop="5"
      alignItems="center"
    >
      <Box paddingRight="3">
        <strong>0</strong>-<strong>3</strong> of <strong>7</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <IconButton
          onClick={onPreviousClick}
          size="sm"
          aria-label="Previous page"
          icon={<ArrowBackIcon />}
          disabled={!hasPreviousPage}
        />
        <IconButton
          onClick={onNextClick}
          size="sm"
          aria-label="Next page"
          icon={<ArrowForwardIcon />}
          disabled={!hasNextPage}
        />
      </Stack>
    </Flex>
  )
}

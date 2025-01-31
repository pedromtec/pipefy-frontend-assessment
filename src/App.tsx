import { Container, Stack } from '@chakra-ui/react'
import { CardsModal } from './components/CardsModal'
import { Header } from './components/Header'
import { PipesList } from './components/PipesList'

function App() {
  return (
    <Container maxW="container.lg" paddingBottom="4rem">
      <Stack>
        <Header />
        <PipesList />
      </Stack>
      <CardsModal />
    </Container>
  )
}

export default App

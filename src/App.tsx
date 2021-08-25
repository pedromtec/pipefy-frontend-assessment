import { Container, Stack } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { PipesList } from "./components/PipesList";

function App() {
  return (
    <Container maxW="container.xl">
      <Stack>
        <Header />
        <PipesList />
      </Stack>
    </Container>
  );
}

export default App;

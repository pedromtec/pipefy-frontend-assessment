import { Container } from "@chakra-ui/react";
import { PipesList } from "./components/PipesList";

function App() {
  return (
    <Container maxW="container.xl" >
      <PipesList />
    </Container>
  );
}

export default App;

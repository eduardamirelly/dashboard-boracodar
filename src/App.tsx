import { Board } from "./components/Board"
import { Box } from "./components/Box"
import { Container } from "./components/Container"
import { Content } from "./components/Content"

function App() {
  return (
    <Container>
      <Content>
        <Box direction="column" gap="60">
          <Box justify="between" align="center" gap="32">
            <Board title="Title example">
              Content
            </Board>
            <Board title="Title example">
              Content
            </Board>
            <Board title="Title example">
              Content
            </Board>
          </Box>

          <Board title="Title example">
            Content
          </Board>
        </Box>
      </Content>
    </Container>
  )
}

export default App

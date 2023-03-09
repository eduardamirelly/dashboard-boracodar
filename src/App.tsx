import { Board } from "./components/Board"
import { Box } from "./components/Box"
import { Container } from "./components/Container"
import { Content } from "./components/Content"
import { Text } from "./components/Text"

function App() {
  return (
    <Container>
      <Content>
        <Box direction="column" gap="60">
          <Box justify="between" align="center" gap="32">
            <Board title="Title example">
              Content

              <Box gap="10">
                <Text weight="medium">
                  NPS Score
                </Text>
                <Text>
                  75
                </Text>
              </Box>
            </Board>
            <Board title="Title example">
              Content

              <Box gap="10">
                <Text weight="medium">
                  NPS Score
                </Text>
                <Text>
                  75
                </Text>
              </Box>
            </Board>
            <Board title="Title example">
              Content

              <Box gap="10">
                <Text weight="medium">
                  NPS Score
                </Text>
                <Text>
                  75
                </Text>
              </Box>
            </Board>
          </Box>

          <Board title="Title example" align="start">
            Content
          </Board>
        </Box>
      </Content>
    </Container>
  )
}

export default App

import { Board } from "./components/Board"
import { Box } from "./components/Box"
import { Container } from "./components/Container"
import { Content } from "./components/Content"
import { Text } from "./components/Text"

import smileSvg from './assets/smile.svg';
import { Heading } from "./components/Heading"
import { CircleProgress } from "./components/CircleProgress"

function App() {
  return (
    <Container>
      <Content>
        <Box direction="column" gap="60">
          <Box justify="between" align="stretch" gap="32">
            <Board title="NPS geral">
              <Box direction="column" justify="center" align="center" gap="16">
                <img src={smileSvg} alt="smile face" />
                <Heading css={{ color: '$green' }}>
                  Excelente!
                </Heading>
              </Box>

              <Box gap="10">
                <Text weight="medium">
                  NPS Score
                </Text>
                <Text>
                  75
                </Text>
              </Box>
            </Board>
            <Board title="Vendas fechadas">
              <CircleProgress />

              <Box gap="20">
                <Box gap="10">
                  <Text weight="medium">
                    Esperado
                  </Text>
                  <Text>
                    100
                  </Text>
                </Box>
                <Box gap="10">
                  <Text weight="medium">
                    Alcançado
                  </Text>
                  <Text>
                    70
                  </Text>
                </Box>
              </Box>
            </Board>
            <Board title="Meta mensal">
              <CircleProgress />

              <Box gap="20">
                <Box gap="10">
                  <Text weight="medium">
                    Esperado
                  </Text>
                  <Text>
                    R$ 70K
                  </Text>
                </Box>
                <Box gap="10">
                  <Text weight="medium">
                    Alcançado
                  </Text>
                  <Text>
                    R$ 63K
                  </Text>
                </Box>
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

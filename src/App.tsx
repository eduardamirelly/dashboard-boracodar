import { Board } from "./components/Board"
import { Box } from "./components/Box"
import { Container } from "./components/Container"
import { Content } from "./components/Content"
import { Text } from "./components/Text"
import { Heading } from "./components/Heading"
import { CircleProgress } from "./components/CircleProgress"

import smileSvg from './assets/smile.svg';
import triangleUpSvg from './assets/triangle-up.svg';
import triangleDownSvg from './assets/triangle-down.svg';


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

          <Board title="Vendas por dia da semana" align="start">
            <Box direction="column" gap="16">
              <Box gap="10">
                <img src={triangleUpSvg} alt="triangle green up" />

                <Text weight="medium">
                  Dia com mais vendas
                </Text>
              </Box>

              <Heading>
                quarta-feira
              </Heading>
            </Box>

            <Box direction="column" gap="16">
              <Box gap="10">
                <img src={triangleDownSvg} alt="triangle red down" />

                <Text weight="medium">
                  Dia com menos vendas
                </Text>
              </Box>

              <Heading>
                domingo
              </Heading>
            </Box>
          </Board>
        </Box>
      </Content>
    </Container>
  )
}

export default App

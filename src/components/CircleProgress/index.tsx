import { Box } from "../Box";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { CircleProgressContainer, CircleProgressContent, CircleProgressPercentage, CircleProgressValue } from "./styles";

interface CircleProgressProps {
  percentage: number;
}

export function CircleProgress({ percentage }: CircleProgressProps) {
  return (
    <CircleProgressContainer>
      <CircleProgressContent>
        <CircleProgressPercentage>
          <CircleProgressValue>
            <Box direction="column" justify="center" align="center">
              <Heading size="32" weight="bold">
                {percentage}%
              </Heading>
              <Text size="16">
                alcançada
              </Text>
            </Box>
          </CircleProgressValue>
        </CircleProgressPercentage>
      </CircleProgressContent>
    </CircleProgressContainer>
  )
}

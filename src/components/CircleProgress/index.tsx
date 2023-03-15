import { useState } from "react";
import { Box } from "../Box";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { CircleProgressContainer, CircleProgressContent, CircleProgressPercentage, CircleProgressValue } from "./styles";

interface CircleProgressProps {
  percentage: number;
  color?: 'purpleLight' | 'redLight';
}

export function CircleProgress({ percentage, color = 'purpleLight' }: CircleProgressProps) {
  const [percentageProgress, setPercentageProgress] = useState(
    (percentage*360)/100
  );

  return (
    <CircleProgressContainer>
      <CircleProgressContent css={{
        background: `conic-gradient($${color} ${percentageProgress}deg, transparent 0deg)`
      }}>
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

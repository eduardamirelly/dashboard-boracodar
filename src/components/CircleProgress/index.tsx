import { Heading } from "../Heading";
import { Text } from "../Text";
import { CircleProgressContainer, CircleProgressContent, CircleProgressValue } from "./styles";

export function CircleProgress() {
  return (
    <CircleProgressContainer>
      <CircleProgressContent>
        <CircleProgressValue>
          <Heading size="32" weight="bold">
            44%
          </Heading>
          <Text size="16">
            alcançada
          </Text>
        </CircleProgressValue>
      </CircleProgressContent>
    </CircleProgressContainer>
  )
}

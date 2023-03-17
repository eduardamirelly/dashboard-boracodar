import { Box } from "../../../Box";
import { Text } from "../../../Text";
import { WeekProgressDayBar } from "./styles";

export default function WeekDayBar() {
  return (
    <Box direction="column" align="center" gap="10">
      <WeekProgressDayBar />
      <Text>
        dom
      </Text>
    </Box>
  )
}

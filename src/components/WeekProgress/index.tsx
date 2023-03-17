import { Box } from "../Box";
import WeekDayBar from "./components/WeekDayBar";

export default function WeekProgress() {
  return (
    <Box gap="64">
      <WeekDayBar />
      <WeekDayBar />
      <WeekDayBar />
      <WeekDayBar />
      <WeekDayBar />
      <WeekDayBar />
      <WeekDayBar />
    </Box>
  )
}

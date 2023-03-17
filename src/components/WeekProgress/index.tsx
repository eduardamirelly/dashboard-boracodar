import { Box } from "../Box";
import WeekDayBar from "./components/WeekDayBar";

export default function WeekProgress() {
  return (
    <Box align="end" gap="64">
      <WeekDayBar weekDay="dom" percentage={20} />
      <WeekDayBar weekDay="seg" percentage={40} />
      <WeekDayBar weekDay="ter" percentage={50} />
      <WeekDayBar weekDay="qua" percentage={80} />
      <WeekDayBar weekDay="qui" percentage={70} />
      <WeekDayBar weekDay="sex" percentage={65} />
      <WeekDayBar weekDay="sab" percentage={40} />
    </Box>
  )
}

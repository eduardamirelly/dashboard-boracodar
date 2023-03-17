import { useState } from "react";
import { Box } from "../../../Box";
import { Text } from "../../../Text";
import { WeekProgressDayBar } from "./styles";

interface WeekDayBarProps {
  weekDay: string;
  percentage: number;
}

export default function WeekDayBar({ weekDay, percentage }: WeekDayBarProps) {
  return (
    <Box direction="column" align="center" gap="10">
      <WeekProgressDayBar css={{ height: `${percentage}px` }} />
      <Text>
        {weekDay}
      </Text>
    </Box>
  )
}

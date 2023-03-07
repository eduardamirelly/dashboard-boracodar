import { ReactNode } from "react";
import { Heading } from "../Heading";
import { BoardContainer } from "./styles";

interface BoardProps {
  title: string;
  children: ReactNode;
}

export function Board({ title, children }: BoardProps) {
  return (
    <BoardContainer>
      <Heading>
        {title}
      </Heading>

      {children}
    </BoardContainer>
  )
}

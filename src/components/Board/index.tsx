import type * as Stitches from '@stitches/react';

import { ReactNode } from "react";
import { Heading } from "../Heading";
import { BoardContainer } from "./styles";

interface BoardProps {
  title: string;
  align?: 'center' | 'start';
  children: ReactNode;
  css?: Stitches.CSS;
}

export function Board({ title, align = 'center', children, css }: BoardProps) {
  return (
    <BoardContainer align={align} css={css}>
      <Heading>
        {title}
      </Heading>

      {children}
    </BoardContainer>
  )
}

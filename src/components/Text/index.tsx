import type * as Stitches from '@stitches/react';

import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { TextStyles } from "./styles";

interface TextProps {
  size?: '14' | '16';
  weight?: 'regular' | 'medium';
  children: ReactNode;
  asChild?: boolean;
  css?: Stitches.CSS;
}

export function Text({ size = '14', weight = 'regular', children, asChild, css }: TextProps) {

  const Comp = asChild ? Slot : 'p';

  return (
    <Comp>
      <TextStyles css={css} size={size} weight={weight}>
        {children}
      </TextStyles>
    </Comp>
  )
}

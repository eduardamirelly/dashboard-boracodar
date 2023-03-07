import type * as Stitches from '@stitches/react';

import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { HeadingStyles } from './styles';

interface HeadingProps {
  size?: '24' | '32';
  weight?: 'semibold' | 'medium';
  children: ReactNode;
  asChild?: boolean;
  css?: Stitches.CSS;
}

export function Heading({ size = '24', weight = 'semibold', children, asChild, css }: HeadingProps) {

  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp>
      <HeadingStyles css={css} size={size} weight={weight}>
        {children}
      </HeadingStyles>
    </Comp>
  )
}

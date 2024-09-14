import Link from 'next/link';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { Button } from '../button.component';

export const NavigateButton = async (
  props: PropsWithChildren<{
    link?: HTMLAttributes<HTMLAnchorElement> & {
      href?: string;
      target?: string;
    };
    container?: HTMLAttributes<HTMLButtonElement>;
  }>,
) => {
  return (
    <Button
      {...props.container}
      aria-label={props.container?.['aria-label'] || 'Navigation Button'}
    >
      <Link href="" {...props.link}>
        {props.children}
      </Link>
    </Button>
  );
};

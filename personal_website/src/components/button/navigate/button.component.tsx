import './button.style.scss';
import Link, { LinkProps } from 'next/link';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { Button } from '../button.component';

export const NavigateButton = (
  props: PropsWithChildren<{
    link?: LinkProps;
    container?: HTMLAttributes<HTMLButtonElement>;
  }>,
) => {
  return (
    <Button {...props.container}>
      <Link href="" {...props.link}>
        {props.children}
      </Link>
    </Button>
  );
};

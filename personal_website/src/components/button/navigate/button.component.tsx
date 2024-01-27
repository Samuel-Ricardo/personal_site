import Link, { LinkProps } from 'next/link';
import { HTMLAttributes, PropsWithChildren } from 'react';

export const NavigateButton = (
  props: PropsWithChildren<{
    link: LinkProps;
    contaienr: HTMLAttributes<HTMLDivElement>;
  }>,
) => {
  return (
    <div>
      <Link href="/">{props.children}</Link>
    </div>
  );
};

import { ReactNode } from 'react';

export interface ISocialProofProps extends React.PropsWithChildren {
  index?: number;
  title: string;
  numbers: number;
  k?: boolean;
  description?: string;
  Icon?: ReactNode;
}

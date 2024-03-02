import { ITestimonyCardHeaderProps } from '@/@types/props/card/testimony';
import './header.style.scss';

export const TestimonyHeader = async ({ data }: ITestimonyCardHeaderProps) => {
  return (
    <header className="testimony-header">
      <h4>{data.name}</h4>
      <div className="line" />
      <p>
        {data.title} • {data.company.name}
      </p>
    </header>
  );
};

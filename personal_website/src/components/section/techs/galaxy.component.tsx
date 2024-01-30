import { ITechGalaxyProps } from '@/@types/props/section/techs/galaxy';

export const TechsGalaxy = ({ children }: ITechGalaxyProps) => {
  return (
    <ul id="techs-galaxy">
      {children?.map(c => <li key={c?.toString()}>{c}</li>)}
    </ul>
  );
};

import { IProjectSyncDTO } from '@/modules/@core/project/DTO/sync.dto';
import './result.style.scss';
import { ProjectCard } from '@/components/card/project/item/card.component';

export const SearchProjectResult = async ({
  items,
}: {
  items: IProjectSyncDTO[];
}) => {
  return (
    <ul className="search-result-container">
      {items.map(async item => (
        <li key={item.title} className="search-result-item">
          <ProjectCard data={item} />
        </li>
      ))}
    </ul>
  );
};

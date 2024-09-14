import { IProjectSyncDTO } from '@/modules/@core/project/DTO/sync.dto';
import './result.style.scss';

export const SearchProjectResult = async ({
  items,
}: {
  items: IProjectSyncDTO[];
}) => {
  return (
    <ul className="search-result-container">
      {items.map(async item => (
        <li key={item.title} className="search-result-item">
          {item.title}
        </li>
      ))}
    </ul>
  );
};

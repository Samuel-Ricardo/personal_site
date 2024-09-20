import { IProjectSyncDTO } from '@/modules/@core/project/DTO/sync.dto';
import './result.style.scss';
import { ProjectCard } from '@/components/card/project/item/card.component';
import { MotionLI } from '@/components/motion/li.component';
import { MODULES } from '@/modules/app.factory';

export const SearchProjectResult = async ({
  items,
}: {
  items: IProjectSyncDTO[];
}) => {
  const UP = MODULES.ANIMATION.FRAMER_MOTION.EMERGE.UP();

  return (
    <ul className="search-result-container">
      {items.map(async (item, index) => (
        <MotionLI
          key={item.title}
          className="search-result-item"
          {...UP({
            transition: { delay: index * 0.25, duration: 1 },
            animate: 'active',
          })}
        >
          <ProjectCard data={item} />
        </MotionLI>
      ))}
    </ul>
  );
};

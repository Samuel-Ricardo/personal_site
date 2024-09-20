import { IProjectItemFooterProps } from '@/@types/props/section/project/item';
import { NavigateButton } from '@/components/button/navigate/button.component';

import './footer.style.scss';
import { MotionDiv } from '@/components/motion/div.component';
import { MODULES } from '@/modules/app.factory';

export const ProjectItemFooter = async ({
  title,
  repo,
  demo,
  about,
}: IProjectItemFooterProps) => {
  const animation = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN();
  return (
    <div className="footer">
      {repo && (
        <MotionDiv
          {...animation({
            animate: 'inactive',
            transition: { delay: 0.3 * 1 },
          })}
        >
          <NavigateButton link={{ href: repo, target: '_blank' }}>
            Code
          </NavigateButton>
        </MotionDiv>
      )}
      {demo && (
        <MotionDiv
          {...animation({
            animate: 'inactive',
            transition: { delay: 0.3 * 2 },
          })}
        >
          <NavigateButton link={{ href: demo, target: '_blank' }}>
            Demo
          </NavigateButton>
        </MotionDiv>
      )}
      {about && (
        <MotionDiv
          {...animation({
            animate: 'inactive',
            transition: { delay: 0.3 * 3 },
          })}
        >
          <NavigateButton link={{ href: about }}>About</NavigateButton>
        </MotionDiv>
      )}

      <MotionDiv
        {...animation({
          animate: 'inactive',
          transition: { delay: 0.3 * 4 },
        })}
      >
        <NavigateButton link={{ href: `/project/${title}`, target: '_blank' }}>
          Details
        </NavigateButton>
      </MotionDiv>
    </div>
  );
};

import { ITestimonyCardHeaderProps } from '@/@types/props/card/testimony';
import './header.style.scss';
import { MotionH3 } from '@/components/motion/h3.component';
import { MODULES } from '@/modules/app.factory';
import { MotionDiv } from '@/components/motion/div.component';
import { MotionP } from '@/components/motion/p.component';

export const TestimonyHeader = ({ data }: ITestimonyCardHeaderProps) => {
  const IN = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.IN()({
    animate: 'inactive',
  });
  const OUT = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.OUT()();

  return (
    <header className="testimony-header">
      <MotionH3 {...IN}>{data.name}</MotionH3>
      <MotionDiv
        initial={{ width: 0 }}
        animate={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1.5 }}
        className="line"
      />
      <MotionP {...OUT}>
        {data.title} • {data.company.name}
      </MotionP>
    </header>
  );
};

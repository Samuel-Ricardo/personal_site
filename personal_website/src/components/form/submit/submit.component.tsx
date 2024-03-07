import { IAnimatedSubmitProps } from '@/@types/props/form/submit';
import './submit.style.scss';

import { MotionDiv } from '@/components/motion/div.component';

export const Submit = ({ input, animation }: IAnimatedSubmitProps) => {
  return (
    <MotionDiv className="submit-button" {...animation}>
      <input type="submit" {...input} />
    </MotionDiv>
  );
};

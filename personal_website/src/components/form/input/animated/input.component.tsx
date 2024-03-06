import { IAnimatedInputProps, IInputProps } from '@/@types/props/form/input';
import { MotionDiv } from '@/components/motion/div.component';

export const AnimatedInput = async ({
  label,
  id,
  type,
  hook,
  required,
  placeholder,
  animation,
}: IAnimatedInputProps) => {
  return (
    <MotionDiv {...animation}>
      <label></label>
      <input required={required} />
      <label></label>
    </MotionDiv>
  );
};

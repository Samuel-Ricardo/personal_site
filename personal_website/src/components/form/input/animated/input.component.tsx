import './input.style.scss';

import { IAnimatedInputProps } from '@/@types/props/form/input';
import { MotionDiv } from '@/components/motion/div.component';

export const AnimatedInput = ({
  label,
  hook,
  animation,
  error,
  input,
}: IAnimatedInputProps) => {
  console.log({ error });
  return (
    <MotionDiv {...animation} className="animated-input">
      {label && <label className="label">{label}</label>}
      <input {...input} {...hook()} />
      <MotionDiv
        className="underline"
        animate={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 2.5 }}
      />
      {error && <label className="error">error</label>}
    </MotionDiv>
  );
};

import './textarea.style.scss';

import { IAnimatedTextAreaProps } from '@/@types/props/form/textarea';
import { MotionDiv } from '@/components/motion/div.component';

export const AnimatedTextArea = ({
  label,
  hook,
  animation,
  error,
  input,
}: IAnimatedTextAreaProps) => {
  return (
    <MotionDiv {...animation} className="animated-textarea">
      {label && <label className="label">{label}</label>}
      <textarea {...input} {...hook()} />
      <MotionDiv
        className="underline"
        initial={{ width: 0 }}
        animate={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ delay: 0.5, duration: 2.5 }}
      />
      {error && <label className="error">{error}</label>}
    </MotionDiv>
  );
};

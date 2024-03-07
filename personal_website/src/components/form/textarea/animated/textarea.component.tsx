import { IAnimatedTextAreaProps } from '@/@types/props/form/textarea';
import { MotionDiv } from '@/components/motion/div.component';

export const AnimatedTextArea = ({
  label,
  hook,
  animation,
  error,
  input,
}: IAnimatedTextAreaProps) => {
  console.log({ error });
  return (
    <MotionDiv {...animation} className="animated-input">
      {label && <label className="label">{label}</label>}
      <textarea {...input} {...hook()} />
      <MotionDiv
        className="underline"
        animate={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 3.5 }}
      />
      {error && <label className="error">error</label>}
    </MotionDiv>
  );
};

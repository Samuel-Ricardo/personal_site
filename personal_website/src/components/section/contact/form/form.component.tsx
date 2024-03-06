import { IContactFormProps } from '@/@types/props/section/contact/form';
import './form.style.scss';

import { MotionH1 } from '@/components/motion/h1.component';

export const ContactForm = async ({ title }: IContactFormProps) => {
  return (
    <div className="contact-form-container">
      <form>
        <MotionH1>{(await title) || 'Write me a letter 🖋️'}</MotionH1>
      </form>
    </div>
  );
};

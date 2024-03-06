import { IContactFormProps } from '@/@types/props/section/contact/form';
import './form.style.scss';

import { MotionH3 } from '@/components/motion/h3.component';
import { MODULES } from '@/modules/app.factory';
import { MotionForm } from '@/components/motion/form.component';

export const ContactForm = async ({ title }: IContactFormProps) => {
  const OUT = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.OUT()();
  return (
    <div className="contact-form-container">
      <MotionForm {...OUT}>
        <MotionH3>{(await title) || 'Write me a letter 🖋️'}</MotionH3>
      </MotionForm>
    </div>
  );
};

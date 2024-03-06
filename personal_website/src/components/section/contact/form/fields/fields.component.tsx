'use client';

import { AnimatedInput } from '@/components/form/input/animated/input.component';
import { MotionForm } from '@/components/motion/form.component';
import { MotionH3 } from '@/components/motion/h3.component';
import { MODULES } from '@/modules/app.factory';

export const ContactFormFields = ({ children }: { children: any }) => {
  const OUT = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.OUT()();
  const UP = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP();
  return (
    <MotionForm {...OUT}>
      <MotionH3 {...UP()}>{children}</MotionH3>

      <AnimatedInput
        label="Name"
        hook={() => 'a' as any}
        animation={UP({ transition: { delay: 0.25 } })}
        input={{ type: 'text', required: true, placeholder: 'Name' }}
      />
    </MotionForm>
  );
};

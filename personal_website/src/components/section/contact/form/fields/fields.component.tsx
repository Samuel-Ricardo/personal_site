'use client';

import { AnimatedInput } from '@/components/form/input/animated/input.component';
import { AnimatedTextArea } from '@/components/form/textarea/animated/textarea.component';
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
      <AnimatedInput
        label="Email"
        hook={() => 'a' as any}
        animation={UP({ transition: { delay: 0.5 } })}
        input={{ type: 'email', required: true, placeholder: 'Email' }}
      />

      <AnimatedTextArea
        label="Message"
        hook={() => 'a' as any}
        animation={UP({ transition: { delay: 0.75 } })}
        input={{
          rows: 10,
          required: true,
          placeholder: '🖋️ | Type a message...',
        }}
      />
    </MotionForm>
  );
};

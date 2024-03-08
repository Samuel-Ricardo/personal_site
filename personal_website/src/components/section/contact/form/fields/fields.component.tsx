'use client';

import { AnimatedInput } from '@/components/form/input/animated/input.component';
import { Submit } from '@/components/form/submit/submit.component';
import { AnimatedTextArea } from '@/components/form/textarea/animated/textarea.component';
import { MotionForm } from '@/components/motion/form.component';
import { MotionH3 } from '@/components/motion/h3.component';
import { MODULES } from '@/modules/app.factory';
import { ContactFormData } from '@/modules/validation/zod/form/contact.validation';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useMemo } from 'react';
import { useEmail } from '@/hooks/email/email.hook';

import toast from 'react-hot-toast';

export const ContactFormFields = ({ children }: { children: any }) => {
  const OUT = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.OUT();
  const UP = MODULES.ANIMATION.FRAMER_MOTION.SLIDE.UP();

  const VALIDATION = useMemo(() => MODULES.VALIDATION.ZOD.FORM.CONTACT(), []);
  const { sendEmail } = useEmail();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(VALIDATION),
  });

  const submit = useCallback(
    () =>
      handleSubmit(
        async data =>
          await sendEmail({
            to: 'Samuel Ricardo',
            from: data.name,
            message: `${data.message} \n\n ${data.email}`,
          }),
      ),
    [sendEmail, handleSubmit],
  );

  return (
    <MotionForm {...OUT()} onSubmit={submit()}>
      <MotionH3 {...UP()}>{children}</MotionH3>

      <AnimatedInput
        label="Name"
        error={errors.name?.message}
        hook={() => register('name')}
        animation={UP({ transition: { delay: 0.25 } })}
        input={{ type: 'text', required: true, placeholder: 'Name' }}
      />
      <AnimatedInput
        label="Email"
        error={errors.email?.message}
        hook={() => register('email')}
        animation={UP({ transition: { delay: 0.5 } })}
        input={{ type: 'email', required: true, placeholder: 'Email' }}
      />

      <AnimatedTextArea
        label="Message"
        error={errors.message?.message}
        hook={() => register('message')}
        animation={UP({ transition: { delay: 0.75 } })}
        input={{
          rows: 10,
          required: true,
          placeholder: '🖋️ | Type a message...',
        }}
      />

      <Submit
        animation={OUT({ transition: { delay: 1 } })}
        input={{ value: 'Send' }}
      />
    </MotionForm>
  );
};

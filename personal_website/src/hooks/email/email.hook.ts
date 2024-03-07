import { ISendEmailDTO } from '@/modules/@core/email/DTO/send/email.dto';
import { MODULES } from '@/modules/app.factory';
import { useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';

export const useEmail = () => {
  const mailer = useMemo(() => MODULES.EMAIL.MAIN(), []);

  const sendEmail = useCallback(
    async (email: ISendEmailDTO) =>
      await toast.promise(mailer.sendEmail(email), {
        loading: '🌱 | Sending email...',
        success: '📨 | Email sent!',
        error: '🐢 | Error sending email.',
      }),
    [mailer],
  );

  return { mailer, sendEmail };
};

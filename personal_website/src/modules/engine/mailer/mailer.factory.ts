import { EmailJS } from '@/@types/module/engine/mailer/emailjs';
import { ENGINE_MAILER_MODULE } from './mailer.module';
import { ENGINE_MAILER_REGISTRY } from './mailer.registry';

export const ENGINE_MAILER_FACTORY = {
  EMAILJS: () =>
    ENGINE_MAILER_MODULE.get<EmailJS>(ENGINE_MAILER_REGISTRY.EMAILJS),
};

import { GATEWAY_EMAIL_MODULE } from './email.module';
import { GATEWAY_EMAIL_REGISTRY } from './email.registry';
import { EmailJSGateway } from './emailjs/email.gateway';

export const GATEWAY_EMAIL_FACTORY = {
  EMAILJS: () =>
    GATEWAY_EMAIL_MODULE.get<EmailJSGateway>(GATEWAY_EMAIL_REGISTRY.EMAILJS),
};

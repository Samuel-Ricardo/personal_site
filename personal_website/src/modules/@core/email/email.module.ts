import { Container } from 'inversify';
import { EMAIL_REGISTRY } from './email.registry';
import { SendEmailUseCase } from './use_case/send.use_case';
import { EmailService } from './service/email.service';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const EMAIL_MODULE = MODULE;

MODULE.bind(EMAIL_REGISTRY.USE_CASE.SEND).to(SendEmailUseCase);
MODULE.bind(EMAIL_REGISTRY.SERVICE.MAIN).to(EmailService);

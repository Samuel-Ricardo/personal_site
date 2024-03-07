import { EMAIL_MODULE } from './email.module';
import { EMAIL_REGISTRY } from './email.registry';
import { IEmailService } from './service/service.interface';
import { SendEmailUseCase } from './use_case/send.use_case';

export const EMAIL_FACTORY = {
  SERVICE: {
    MAIN: () => EMAIL_MODULE.get<IEmailService>(EMAIL_REGISTRY.SERVICE.MAIN),
  },
  USE_CASE: {
    SEND: () =>
      EMAIL_MODULE.get<SendEmailUseCase>(EMAIL_REGISTRY.USE_CASE.SEND),
  },
};

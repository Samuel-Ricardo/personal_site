import { EMAIL_MODULE } from './email.module';
import { EMAIL_REGISTRY } from './email.registry';
import { SendEmailUseCase } from './use_case/send.use_case';

export const EMAIL_FACTORY = {
  USE_CASE: {
    SEND: () =>
      EMAIL_MODULE.get<SendEmailUseCase>(EMAIL_REGISTRY.USE_CASE.SEND),
  },
};

import { CMS_GATEWAT_REGISTRY } from './CMS/cms.registry';
import { GATEWAY_EMAIL_FACTORY } from './mailer/email.factory';

export const GATEWAY_FACTORY = {
  CMS: CMS_GATEWAT_REGISTRY,
  EMAIL: GATEWAY_EMAIL_FACTORY,
};

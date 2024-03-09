import { Container } from 'inversify';
import { GATEWAY_EMAIL_REGISTRY } from './email.registry';
import { EmailJSGateway } from './emailjs/email.gateway';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const GATEWAY_EMAIL_MODULE = MODULE;

GATEWAY_EMAIL_MODULE.bind(GATEWAY_EMAIL_REGISTRY.EMAILJS).to(EmailJSGateway);

import { Container } from 'inversify';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const GATEWAY_EMAIL_MODULE = MODULE;

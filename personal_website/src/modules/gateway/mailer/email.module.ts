import { Container } from 'inversify';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const EMAIL_MODULE = MODULE;

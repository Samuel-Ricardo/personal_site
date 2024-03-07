import { Container } from 'inversify';
import { VALIDATION_ZOD_REGISTRY } from './zod.registry';
import { CONTACT_FORM_SCHEMA } from './form/contact.validation';

export const VALIDATION_ZOD_MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

VALIDATION_ZOD_MODULE.bind(
  VALIDATION_ZOD_REGISTRY.FORM.CONTACT,
).toConstantValue(CONTACT_FORM_SCHEMA);

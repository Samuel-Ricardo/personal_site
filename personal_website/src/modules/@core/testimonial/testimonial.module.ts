import { Container } from 'inversify';

export const TESTIMONIAL_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

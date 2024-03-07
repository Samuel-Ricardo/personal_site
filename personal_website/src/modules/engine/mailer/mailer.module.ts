import { CONFIG_MODULE } from '@/modules/@config/config.module';
import { Container } from 'inversify';
import { ENGINE_MAILER_REGISTRY } from './mailer.registry';
import { SETUP_EMAILJS } from './emailjs/emailjs.mailer';

const MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const ENGINE_MAILER_MODULE = Container.merge(MODULE, CONFIG_MODULE);

ENGINE_MAILER_MODULE.bind(ENGINE_MAILER_REGISTRY.EMAILJS)
  .toDynamicValue(SETUP_EMAILJS)
  .inSingletonScope();

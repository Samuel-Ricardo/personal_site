import { GATEWAY_MODULE } from '@/modules/gateway/gateway.module';
import { Container } from 'inversify';

const MODULE = new Container({
  defaultScope: 'Singleton',
  autoBindInjectable: true,
});

export const ASSEMBLER_MODULE = Container.merge(MODULE, GATEWAY_MODULE);

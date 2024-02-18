import { Container } from 'inversify';
import { CMS_GATEWAY_MODULE } from './CMS/cms.module';

const MODULE = new Container({ defaultScope: 'Singleton' });

export const GATEWAY_MODULE = Container.merge(MODULE, CMS_GATEWAY_MODULE);

import { Container } from 'inversify';
import { CMS_ENGINE_MODULE } from './CMS/cms.module';

const MODULE = new Container({ defaultScope: 'Singleton' });

export const ENGINE_MODULE = Container.merge(MODULE, CMS_ENGINE_MODULE);

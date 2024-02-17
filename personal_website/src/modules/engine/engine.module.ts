import { Container } from 'inversify';
import { CRM_ENGINE_MODULE } from './CRM/crm.module';

const MODULE = new Container({ defaultScope: 'Singleton' });

export const ENGINE_MODULE = Container.merge(MODULE, CRM_ENGINE_MODULE);

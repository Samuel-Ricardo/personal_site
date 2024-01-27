import { Container } from 'inversify';
import { FONTS_MODULE } from './fonts/fonts.module';

const MODULES = new Container();

export const APP_MODULE = Container.merge(MODULES, FONTS_MODULE);
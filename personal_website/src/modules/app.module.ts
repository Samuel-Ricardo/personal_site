import 'reflect-metadata';

import { Container } from 'inversify';
import { FONTS_MODULE } from './fonts/fonts.module';
import { ANIMATION_MODULE } from './animations/animation.module';
import { ENGINE_MODULE } from './engine/engine.module';
import { GATEWAY_MODULE } from './gateway/gateway.module';
import { OCCUPATION_MODULE } from './@core/occupations/occupation.module';
import { ASSEMBLER_MODULE } from './@core/assembler/assembler.module';
import { PERSON_MODULE } from './@core/person/person.module';
import { HIGHLIGHT_MODULE } from './@core/highlight/highlight.module';
import { TECH_MODULE } from './@core/tech/tech.module';

const MODULES = new Container();

export const APP_MODULE = Container.merge(
  MODULES,
  FONTS_MODULE,
  ANIMATION_MODULE,
  ENGINE_MODULE,
  GATEWAY_MODULE,
  OCCUPATION_MODULE,
  ASSEMBLER_MODULE,
  PERSON_MODULE,
  HIGHLIGHT_MODULE,
  TECH_MODULE,
);

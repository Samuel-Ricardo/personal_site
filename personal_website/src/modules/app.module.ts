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
import { PROJECT_MODULE } from './@core/project/project.module';
import { PLATFORM_MODULE } from './@core/platforms/platform.module';
import { ARTICLE_MODULE } from './@core/articles/article.module';
import { COMPANY_MODULE } from './@core/company/company.module';
import { EXPERIENCE_MODULE } from './@core/experience/experience.module';
import { TESTIMONIAL_MODULE } from './@core/testimonial/testimonial.module';
import { CONFIG_MODULE } from './@config/config.module';
import { EMAIL_MODULE } from './@core/email/email.module';
import { VALIDATION_MODULE } from './validation/validation.module';

const MODULES = new Container();

export const APP_MODULE = Container.merge(
  MODULES,
  CONFIG_MODULE,
  FONTS_MODULE,
  ANIMATION_MODULE,
  ENGINE_MODULE,
  GATEWAY_MODULE,
  OCCUPATION_MODULE,
  ASSEMBLER_MODULE,
  PERSON_MODULE,
  HIGHLIGHT_MODULE,
  TECH_MODULE,
  PROJECT_MODULE,
  PLATFORM_MODULE,
  ARTICLE_MODULE,
  COMPANY_MODULE,
  EXPERIENCE_MODULE,
  TESTIMONIAL_MODULE,
  EMAIL_MODULE,
  VALIDATION_MODULE,
);

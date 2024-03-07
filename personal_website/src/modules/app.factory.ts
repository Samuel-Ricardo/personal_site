import { ANIMATION_FACTORY as ANIMATION } from './animations/animation.factory';
import { ENGINE_FACTORY as ENGINE } from './engine/engine.factory';
import { FONTS_FACTORY as FONTS } from './fonts/fonts.factory';
import { GATEWAY_FACTORY as GATEWAY } from './gateway/gateway.factory';
import { OCCUPATION_FACTORY as OCCUPATION } from './@core/occupations/occupation.factory';
import { ASSEMBLER_FACTORY as ASSEMBLER } from './@core/assembler/assembler.factory';
import { PERSON_FACTORY as PERSON } from './@core/person/person.factory';
import { HIGHLIGHT_FACTORY as HIGHLIGHT } from './@core/highlight/highlight.factory';
import { TECH_FACTORY as TECH } from './@core/tech/tech.factory';
import { PROJECT_FACTORY as PROJECT } from './@core/project/project.factory';
import { PLATFORM_FACTORY as PLATFORM } from './@core/platforms/platform.factory';
import { ARTICLE_FACTORY as ARTICLE } from './@core/articles/article.factory';
import { COMPANY_FACTORY as COMPANY } from './@core/company/company.factory';
import { EXPERIENCE_FACTORY as EXPERIENCE } from './@core/experience/experience.factory';
import { TESTIMONIAL_FACTORY as TESTIMONIAL } from './@core/testimonial/testimonial.factory';
import { CONFIG_FACTORY as CONFIG } from './@config/config.factory';
import { EMAIL_FACTORY as EMAIL } from './@core/email/email.factory';

export const MODULES = {
  CONFIG,
  FONTS,
  ANIMATION,
  ENGINE,
  GATEWAY,
  OCCUPATION,
  ASSEMBLER,
  PERSON,
  HIGHLIGHT,
  TECH,
  PROJECT,
  PLATFORM,
  ARTICLE,
  COMPANY,
  EXPERIENCE,
  TESTIMONIAL,
  EMAIL,
};

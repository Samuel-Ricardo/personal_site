import { ANIMATION_REGISTRY as ANIMATION } from './animations/animation.registry';
import { ENGINE_REGISTRY as ENGINE } from './engine/engine.registry';
import { FONTS_REGISTRY as FONTS } from './fonts/fonts.registry';
import { GATEWAY_REGISTRY as GATEWAY } from './gateway/gateway.registry';
import { OCCUPATION_REGISTRY as OCCUPATION } from './@core/occupations/occupation.registry';
import { ASSEMBLER_REGISTRY as ASSEMBLER } from './@core/assembler/assembler.registry';
import { PERSON_REGISTRY as PERSON } from './@core/person/person.registry';
import { HIGHLIGHT_REGISTRY as HIGHLIGHT } from './@core/highlight/highlight.registry';
import { TECH_REGISTRY as TECH } from './@core/tech/tech.registry';
import { PROJECT_REGISTRY as PROJECT } from './@core/project/project.registry';
import { PLATFORM_REGISTRY as PLATFORM } from './@core/platforms/platform.registry';
import { ARTICLE_REGISTRY as ARTICLE } from './@core/articles/article.registry';
import { COMPANY_REGISTRY as COMPANY } from './@core/company/company.registry';
import { EXPERIENCE_REGISTRY as EXPERIENCE } from './@core/experience/experience.registry';
import { TESTIMONIAL_REGISTRY as TESTIMONIAL } from './@core/testimonial/testimonial.registry';
import { CONFIG_REGISTRY as CONFIG } from './@config/config.registry';
import { EMAIL_REGISTRY as EMAIL } from './@core/email/email.registry';
import { VALIDATION_REGISTRY as VALIDATION } from './validation/validation.registry';

export const MODULE = {
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
  CONFIG,
  EMAIL,
  VALIDATION,
};

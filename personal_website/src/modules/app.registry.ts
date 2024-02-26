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
};

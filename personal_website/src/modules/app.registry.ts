import { ANIMATION_REGISTRY as ANIMATION } from './animations/animation.registry';
import { ENGINE_REGISTRY as ENGINE } from './engine/engine.registry';
import { FONTS_REGISTRY as FONTS } from './fonts/fonts.registry';
import { GATEWAY_REGISTRY as GATEWAY } from './gateway/gateway.registry';
import { OCCUPATION_REGISTRY as OCCUPATION } from './@core/occupations/occupation.registry';
import { ASSEMBLER_REGISTRY as ASSEMBLER } from './@core/assembler/assembler.registry';
import { PERSON_REGISTRY as PERSON } from './@core/person/person.registry';

export const MODULE = {
  FONTS,
  ANIMATION,
  ENGINE,
  GATEWAY,
  OCCUPATION,
  ASSEMBLER,
  PERSON,
};

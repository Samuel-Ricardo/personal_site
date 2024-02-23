import { ANIMATION_FACTORY as ANIMATION } from './animations/animation.factory';
import { ENGINE_FACTORY as ENGINE } from './engine/engine.factory';
import { FONTS_FACTORY as FONTS } from './fonts/fonts.factory';
import { GATEWAY_FACTORY as GATEWAY } from './gateway/gateway.factory';
import { OCCUPATION_FACTORY as OCCUPATION } from './@core/occupations/occupation.factory';
import { ASSEMBLER_FACTORY as ASSEMBLER } from './@core/assembler/assembler.factory';
import { PERSON_FACTORY as PERSON } from './@core/person/person.factory';
import { HIGHLIGHT_FACTORY as HIGHLIGHT } from './@core/highlight/highlight.factory';

export const MODULES = {
  FONTS,
  ANIMATION,
  ENGINE,
  GATEWAY,
  OCCUPATION,
  ASSEMBLER,
  PERSON,
  HIGHLIGHT,
};

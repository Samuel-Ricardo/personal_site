import { Container } from 'inversify';
import { ANIMATION_FRAMER_MOTION_MODULE } from './framer_motion/motion.module';

const MODULE = new Container();

export const ANIMATION_MODULE = Container.merge(
  MODULE,
  ANIMATION_FRAMER_MOTION_MODULE,
);

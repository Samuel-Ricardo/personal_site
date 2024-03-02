export const TESTIMONIAL_REGISTRY = {
  MAIN: Symbol.for('MODULE::TESTIMONIAL'),
  CONTROLLER: {
    MAIN: Symbol.for('MODULE::TESTIMONIAL::CONTROLLER::MAIN'),
  },
  SERVICE: {
    MAIN: Symbol.for('MODULE::TESTIMONIAL::SERVICE::MAIN'),
  },
  USE_CASE: {
    FIND: {
      ALL: Symbol.for('MODULE::TESTIMONIAL::USE_CASE::FIND::ALL'),
    },
  },
};

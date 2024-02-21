export const PERSON_REGISTRY = {
  MAIN: Symbol.for('MODULE::PERSON::MAIN'),
  STATIC: Symbol.for('MODULE::PERSON::STATIC'),
  CONTROLLER: {
    MAIN: Symbol.for('MODULE::CONTROLLER::PERSON::MAIN'),
    STATIC: Symbol.for('MODULE::CONTROLLER::PERSON::STATIC'),
  },
  SERVICE: {
    MAIN: Symbol.for('MODULE::SERVICE::PERSON::MAIN'),
    STATIC: Symbol.for('MODULE::SERVICE::PERSON::STATIC'),
  },
  USE_CASE: {
    STATIC: {
      FIND: {
        ALL: Symbol.for('MODULE::USE_CASE::PERSON::STATIC::FIND::ALL'),
        ONE: Symbol.for('MODULE::USE_CASE::PERSON::STATIC::FIND::ONE'),
      },
    },
    FIND: {
      ALL: Symbol.for('MODULE::USE_CASE::PERSON::FIND::ALL'),
      ONE: Symbol.for('MODULE::USE_CASE::PERSON::FIND::ONE'),
    },
  },
};

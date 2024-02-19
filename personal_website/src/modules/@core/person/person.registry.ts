export const PERSON_REGISTRY = {
  SERVICE: {
    MAIN: Symbol.for('MODULE::SERVICE::PERSON::MAIN'),
  },
  USE_CASE: {
    FIND: {
      ALL: Symbol.for('MODULE::USE_CASE::PERSON::FIND::ALL'),
      ONE: Symbol.for('MODULE::USE_CASE::PERSON::FIND::ONE'),
    },
  },
};

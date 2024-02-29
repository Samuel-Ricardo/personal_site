export const COMPANY_REGISTRY = {
  MAIN: Symbol.for('MODULES::COMPANY::MAIN'),
  CONTROLLER: {
    MAIN: Symbol.for('MODULES::COMPANY::CONTROLLER::MAIN'),
  },
  SERVICE: {
    MAIN: Symbol.for('MODULES::COMPANY::SERVICE::MAIN'),
  },
  USE_CASE: {
    FIND: {
      ALL: Symbol.for('MODULES::COMPANY::USE_CASE::FIND::ALL'),
      ONE: Symbol.for('MODULES::COMPANY::USE_CASE::FIND::ONE'),
    },
  },
};

export const TECH_REGISTRY = {
  MAIN: Symbol.for('MODULE::TECH::MAIN'),
  CONTROLLER: {
    MAIN: Symbol.for('MODULE::TECH::CONTROLLER::MAIN'),
  },
  SERVICE: {
    MAIN: Symbol.for('MODULE::TECH::SERVICE::MAIN'),
  },
  USE_CASE: {
    FIND: {
      ALL: Symbol.for('MODULE::TECH::USE_CASE::FIND::ALL'),
      BY: {
        CONTEXT: Symbol.for('MODULE::TECH::USE_CASE::FIND::BY::CONTEXT'),
      },
    },
  },
};

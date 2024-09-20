export const PROJECT_REGISTRY = {
  MAIN: Symbol.for('MODULE::MAIN'),
  CONTROLLER: {
    MAIN: Symbol.for('MODULE::CONTROLLER::MAIN'),
  },
  SERVICE: {
    MAIN: Symbol.for('MODULE::SERVICE::MAIN'),
  },
  USE_CASE: {
    FIND: {
      ALL: Symbol.for('MODULE::USE_CASE::FIND::ALL'),
      MAIN: Symbol.for('MODULE::USE_CASE::FIND::MAIN'),
      BY: {
        TITLE: Symbol.for('MODULE::USE_CASE::FIND::BY::TITLE'),
      },
    },
  },
};

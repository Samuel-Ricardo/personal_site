export const OCCUPATION_REGISTRY = {
  MAIN: Symbol.for('MODULE::CORE:OCCUPATION'),
  CONTROLLER: {
    MAIN: Symbol.for('MODULE::CORE:OCCUPATION:CONTROLLER:MAIN'),
  },
  SERVICE: {
    MAIN: Symbol.for('MODULE::CORE:OCCUPATION:SERVICE:MAIN'),
  },
  USE_CASE: {
    STATIC: {
      FIND: {
        ALL: Symbol.for('MODULE::CORE:OCCUPATION:USE_CASE:STATIC:FIND:ALL'),
      },
    },
    FIND: {
      ALL: Symbol.for('MODULE::CORE:OCCUPATION:USE_CASE:FIND:ALL'),
    },
  },
};

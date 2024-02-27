export const PLATFORM_REGISTRY = {
  MAIN: Symbol.for('MODULE::PLATFORM::MAIN'),
  CONTROLLER: {
    MAIN: Symbol.for('MODULE::CONTROLLER:PLATFORM'),
  },
  SERVICE: {
    MAIN: Symbol.for('MODULE::SERVICE:PLATFORM'),
  },
  USE_CASE: {
    FIND: {
      ALL: Symbol.for('MODULE::USE_CASE:PLATFORM:FIND:ALL'),
      ONE: Symbol.for('MODULE::USE_CASE:PLATFORM:FIND:ONE'),
    },
  },
};

export const PLATFORM_FACTORY = {
  MAIN: Symbol.for('MODULE::PLATFORM::MAIN'),
  CONTROLLER: {
    MAIN: Symbol.for('MODULE::CONTROLLER:PLATFORM::MAIN'),
  },
  SERVICE: {
    MAIN: Symbol.for('MODULE::SERVICE:PLATFORM::MAIN'),
  },
  USE_CASE: {
    FIND: {
      ALL: Symbol.for('MODULE::USE_CASE:PLATFORM:FIND:ALL'),
      ONE: Symbol.for('MODULE::USE_CASE:PLATFORM:FIND:ONE'),
    },
  },
};

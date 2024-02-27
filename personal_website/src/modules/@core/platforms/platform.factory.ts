export const PLATFORM_FACTORY = {
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

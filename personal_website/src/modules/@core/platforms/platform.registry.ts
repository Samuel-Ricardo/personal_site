export const PLATFORM_REGISTRY = {
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

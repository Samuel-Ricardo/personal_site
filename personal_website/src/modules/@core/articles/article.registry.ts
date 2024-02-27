export const ARTICLE_REGISTRY = {
  MAIN: Symbol.for('MODULE::ARTICLE:MAIN'),
  CONTROLLER: {
    MAIN: Symbol.for('MODULE::ARTICLE:CONTROLLER:MAIN'),
  },
  SERVICE: {
    MAIN: Symbol.for('MODULE::ARTICLE:SERVICE:MAIN'),
  },
  USE_CASE: {
    FIND: {
      ALL: Symbol.for('MODULE::ARTICLE:USE_CASE:FIND:ALL'),
      MAIN: Symbol.for('MODULE::ARTICLE:USE_CASE:FIND:MAIN'),
    },
  },
};

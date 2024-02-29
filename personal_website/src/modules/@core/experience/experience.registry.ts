export const EXPERIENCE_REGISTRY = {
  SERVICE: {
    MAIN: Symbol.for('MODULE::SERVICE::EXPERIENCE'),
  },
  USE_CASE: {
    FIND: {
      ALL: Symbol.for('MODULE::USE_CASE::EXPERIENCE::FIND::ALL'),
      BY: {
        CONTEXT: Symbol.for('MODULE::USE_CASE::EXPERIENCE::FIND::BY::CONTEXT'),
      },
    },
  },
};

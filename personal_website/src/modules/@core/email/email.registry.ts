export const EMAIL_REGISTRY = {
  MAIN: Symbol.for('MODULES::EMAIL::MAIN'),
  CONTROLLER: {
    MAIN: Symbol.for('MODULES::EMAIL::CONTROLLER::MAIN'),
  },
  SERVICE: {
    MAIN: Symbol.for('MODULES::EMAIL::SERVICE::MAIN'),
  },
  USE_CASE: {
    SEND: Symbol.for('MODULES::USE_CASE::EMAIL::SEND'),
  },
};

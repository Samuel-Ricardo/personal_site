export const ASSEMBLER_REGISTRY = {
  MAIN: Symbol.for('MODULE::CORE:ASSEMBLER'),
  STATIC: Symbol.for('MODULE::CORE:ASSEMBLER:STATIC'),
  CONTROLLER: {
    MAIN: Symbol.for('MODULE::CORE:ASSEMBLER:CONTROLLER:MAIN'),
    STATIC: Symbol.for('MODULE::CORE:ASSEMBLER:CONTROLLER:STATIC'),
  },
  SERVICE: {
    MAIN: Symbol.for('MODULE::CORE:ASSEMBLER:SERVICE:MAIN'),
    STATIC: Symbol.for('MODULE::CORE:ASSEMBLER:SERVICE:STATIC'),
  },
  USE_CASE: {
    STATIC: {
      FIND: {
        TITLE: Symbol.for('MODULE::CORE:ASSEMBLER:USE_CASE:STATIC:FIND:TITLE'),
        TEXT: Symbol.for('MODULE::CORE:ASSEMBLER:USE_CASE:STATIC:FIND:TEXT'),
        IMAGE: Symbol.for('MODULE::CORE:ASSEMBLER:USE_CASE:STATIC:FIND:IMAGE'),
      },
    },
    FIND: {
      TITLE: Symbol.for('MODULE::CORE:ASSEMBLER:USE_CASE:FIND:TITLE'),
      TEXT: Symbol.for('MODULE::CORE:ASSEMBLER:USE_CASE:FIND:TEXT'),
    },
  },
};

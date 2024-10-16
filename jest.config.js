module.exports = {
  roots: ['src/', 'tests/'],
  clearMocks: true,
  collectCoverageFrom: ['**/*.ts?(x)', '!**/*.d.ts', '!src/contracts/**/*', '!src/vendor/**/*'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  }
};

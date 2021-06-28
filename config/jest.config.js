const {pathsToModuleNameMapper} = require('ts-jest/utils');
const {compilerOptions} = require('../tsconfig');

module.exports = {
  'coverageDirectory': '../output/coverage/jest',
  'testMatch': [
    '**/*.test.ts',
  ],
  'coverageThreshold': {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  'reporters': ['default', 'jest-junit'],
  'verbose': true,
  'testEnvironment': 'node',
  'clearMocks': true,
  'rootDir': '../src',
  // eslint-disable-next-line max-len
  'moduleNameMapper': pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
};

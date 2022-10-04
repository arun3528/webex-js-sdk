module.exports = {
  clearMocks: true,
  rootDir: './',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['lcov', 'cobertura'],
  transform: {
    '\\.[jt]sx?$': ['babel-jest', {rootMode: 'upward'}],
  },
  projects: [
    {
      transform: {
        '\\.[jt]sx?$': ['babel-jest', {rootMode: 'upward'}],
      },
      preset: 'ts-jest',
      testEnvironment: 'node',
      displayName: '@webex/plugin-meetings',
      setupFiles: ['<rootDir>/packages/@webex/plugin-meetings/jest.setup.js'],
      testMatch: ['<rootDir>/packages/@webex/plugin-meetings/test/unit/spec/**/*.[jt]s'],
    },
    {
      transform: {
        '\\.[jt]sx?$': ['babel-jest', {rootMode: 'upward'}],
      },
      preset: 'ts-jest',
      displayName: '@webex/internal-plugin-conversation',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/packages/@webex/internal-plugin-conversation/test/unit/spec/**/*.[jt]s'],
    },
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './coverage/junit',
        outputName: 'coverage-junit.xml',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
      },
    ],
    [
      'jest-html-reporters',
      {
        publicPath: './coverage/html',
        filename: 'jest-result.html',
      },
    ],
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testResultsProcessor: 'jest-junit',
};

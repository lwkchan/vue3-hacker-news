module.exports = {
  moduleFileExtensions: ['vue', 'ts', 'json', 'js'],
  testEnvironment: 'jsdom',
  setupFiles: ['./jestSetup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
};

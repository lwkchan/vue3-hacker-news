module.exports = {
  moduleFileExtensions: ['vue', 'ts', 'json', 'js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
};

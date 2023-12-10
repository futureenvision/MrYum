module.exports = {
  clearMocks: true,
  transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  "testPathIgnorePatterns": ["./build/"]
};
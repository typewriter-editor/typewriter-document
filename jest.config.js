export default {
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        tsconfig: './test/tsconfig.json'
      }
    ]
  },
  transformIgnorePatterns: [
		"node\_modules/(?!(@typewriter))"
	],
  testEnvironment: 'node',
	testRegex: '/test/.*\\.(test|spec)?\\.(ts|tsx)$'
};
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.yarn/', '/e2e/'],
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig)

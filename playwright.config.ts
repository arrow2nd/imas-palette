import { LaunchOptions, PlaywrightTestConfig, devices } from '@playwright/test'

const slow: LaunchOptions = { slowMo: 250 }

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  webServer: {
    command: 'yarn build && yarn start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI
  },
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'], launchOptions: slow }
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'], launchOptions: slow }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], launchOptions: slow }
    },
    {
      name: 'safari',
      use: { ...devices['Desktop Safari'], launchOptions: slow }
    },
    {
      name: 'android',
      use: { ...devices['Pixel 5'], launchOptions: slow }
    },
    {
      name: 'iphone',
      use: { ...devices['iPhone 13'], launchOptions: slow }
    }
  ]
}

export default config

// import { addDecorator } from '@storybook/react'
// import { initializeWorker, mswDecorator } from 'msw-storybook-addon'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../src/theme/theme-default'

// initializeWorker()
// addDecorator(mswDecorator)

/**
 * @description Global Parameters for controls and actions
 * @todo Replace with control factories once needed
 */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/**
 * @description Global Decorators:
 *  - Add theme for all stories
 *  - Reset request handlers from individual stories
 */
export const decorators = [
  Story => {
    const { worker } = require('../src/test-utils/browser')
    worker.resetHandlers()
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  },
]

/**
 * @description Mock Service Worker for Storybook
 *  Storybook executes this module in both bootstap phase (Node)
 *  and a story's runtime (browser). However, we cannot call `setupWorker`
 *  in Node environment, so need to check if we're in a browser.
 *
 *  Start the mocking when each story is loaded.
 *  Repetitive calls to the `.start()` method do not register a new worker,
 *  but check whether there's an existing once, reusing it, if so.
 */
const MSW_FILE = 'mockServiceWorker.js'
// if (typeof global.process === 'undefined') {
const { worker } = require('../src/test-utils/browser')
worker.start({
  serviceWorker: { url: `./${MSW_FILE}` },
  findWorker: scriptURL => scriptURL.includes(MSW_FILE),
  onUnhandledRequest: 'bypass',
})
// }

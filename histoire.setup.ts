import './src/styles/index.postcss'

export function setupVue3({ app }) {
  app.provide('test', 'hello')
}

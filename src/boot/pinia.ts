import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.pinia = app.store as never
  delete app.store
})

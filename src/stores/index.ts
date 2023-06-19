import { createPinia, PiniaVuePlugin } from 'pinia';
import { store } from 'quasar/wrappers';

export default store(({ Vue }) => {
  Vue.use(PiniaVuePlugin);
  const pinia = createPinia();
  return pinia as never;
});

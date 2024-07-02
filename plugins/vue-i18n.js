import Vuei18n from "../i18n";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vuei18n);
});

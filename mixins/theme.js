import { useLayoutStore } from "~/stores/layout";

import darkLogo from "@/assets/images/logo-dark.png";
import lightLogo from "@/assets/images/logo-light.png";

export default {
  data() {
    return {
      darkLogo: darkLogo,
      lightLogo: lightLogo,
    };
  },
  computed: {
    currentTheme() {
      return useLayoutStore() ? useLayoutStore().mode : {} || {};
    },
    isDarkMode() {
      return (this.currentTheme && this.currentTheme === "dark") || false;
    },
  },
};

<script>
import { useLayoutStore } from "~/stores/layout";

export default {
  beforeCreate() {
    const theme = useLayoutStore().layoutTheme;
    document.documentElement.setAttribute("data-theme", theme);
  }
};
</script>

<template>
  <div>
    <client-only>
      <!-- <template #content> -->
      <slot />
      <!-- </template> -->
    </client-only>
  </div>
</template>

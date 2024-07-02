<script>
import { useLayoutStore } from "~/stores/layout";
import RightSidebar from "~/components/layout/rightSidebar/index.vue";
import { setAttribute } from "~/app/utils.js";
import FooterComponent from "~/components/layout/FooterComponent.vue";
import Vertical from "~/components/layout/vertical/index.vue";
import Horizontal from "~/components/layout/Horizontal.vue";
import TwoColumn from "~/components/layout/TwoColumn.vue";
import NavBar from "~/components/layout/navbar/index.vue";
export default {
  data() {
    return {
      layoutStore: useLayoutStore()
    };
  },
  components: {
    RightSidebar,
    FooterComponent,
    Vertical,
    Horizontal,
    TwoColumn,
    NavBar
  },
  computed: {
    layoutType: {
      get() {
        return this.layoutStore.layoutType;
      }
    }
  },
  mounted() {
    this.setDefaultAttributes();
    // document.querySelector("html").setAttribute('dir', 'rtl');
  },
  methods: {
    setDefaultAttributes() {
      const {
        layoutType,
        layoutWidth,
        sidebarSize,
        topbar,
        mode,
        position,
        sidebarView,
        sidebarColor,
        sidebarImage,
        preloader,
        layoutTheme
      } = this.layoutStore;

      setAttribute("data-layout", layoutType);
      setAttribute("data-layout-width", layoutWidth);
      setAttribute("data-topbar", topbar);
      setAttribute("data-sidebar-size", sidebarSize);
      setAttribute("data-layout-position", position);
      setAttribute("data-layout-style", sidebarView);
      setAttribute("data-sidebar", sidebarColor);
      setAttribute("data-sidebar-image", sidebarImage);
      setAttribute("data-preloader", preloader);
      setAttribute("data-bs-theme", mode);
      setAttribute("data-theme", layoutTheme);
    }
  }
};
</script>

<template>
  <div>
    <NavBar />
    <RightSidebar />
    <client-only>
      <Vertical v-if="layoutType === 'vertical'">
        <template #content>
          <slot />
        </template>
      </Vertical>

      <Horizontal v-if="layoutType === 'horizontal'">
        <template #content>
          <slot />
        </template>
      </Horizontal>

      <TwoColumn v-if="layoutType === 'twocolumn'">
        <template #content>
          <slot />
        </template>
      </TwoColumn>
    </client-only>
  </div>
  <FooterComponent />
</template>

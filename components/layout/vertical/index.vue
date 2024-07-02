<script>
import simplebar from "simplebar-vue";
import nuxtStorage from "nuxt-storage";
import { useLayoutStore } from "~/stores/layout";
import { setAttribute } from "~/app/utils.js";
import MenuComponent from "~/components/layout/vertical/MenuComponent.vue";

nuxtStorage.localStorage.setData("hoverd", false);

/**
 * Vertical layout
 */
export default {
  components: {
    simplebar,
    MenuComponent
  },

  data() {
    return {
      isMenuCondensed: false,
      layoutStore: useLayoutStore()
    };
  },
  computed: {
    sidebarSize: {
      get() {
        return this.layoutStore.sidebarSize;
      },
      set(size) {
        this.layoutStore.sidebarSize = size;
      }
    }
  },
  mounted() {
    if (nuxtStorage.localStorage.getData("hoverd") == "true") {
      setAttribute("data-sidebar-size", "sm-hover-active");
    }

    if (window.innerWidth < 768) {
      document.documentElement.addEventListener("click", (event) => {
        if(event.target.classList.contains("vertical-overlay")) {
            document.body.classList.remove("vertical-sidebar-enable")
        }
      });
    }
  },
  methods: {
    initActiveMenu() {
      const sideBarSize =
        document.documentElement.getAttribute("data-sidebar-size");
      if (sideBarSize === "sm-hover") {
        nuxtStorage.localStorage.setData("hoverd", true);
        setAttribute("data-sidebar-size", "sm-hover-active");
      } else if (sideBarSize === "sm-hover-active") {
        nuxtStorage.localStorage.setData("hoverd", false);
        setAttribute("data-sidebar-size", "sm-hover");
      } else {
        setAttribute("data-sidebar-size", "sm-hover");
      }
    },
    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  }
};
</script>

<template>
  <div id="layout-wrapper">
    <div>
      <!-- ========== Left Sidebar Start ========== -->
      <!-- ========== App Menu ========== -->
      <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <!-- Dark Logo-->
          <nuxt-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt="" height="22" />
            </span>
          </nuxt-link>
          <!-- Light Logo-->
          <nuxt-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-light.png" alt="" height="52" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt="" height="122" />
            </span>
          </nuxt-link>
          <BButton
            type="button"
            size="lg"
            variant="white"
            class="p-0 fs-3xl header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
            @click="initActiveMenu"
          >
            <i class="ri-record-circle-line"></i>
          </BButton>
        </div>

        <simplebar id="scrollbar" class="h-100" ref="scrollbar">
          <MenuComponent />
        </simplebar>
        <div class="sidebar-background" />
      </div>
      <!-- Left Sidebar End -->
      <!-- Vertical Overlay-->
      <div class="vertical-overlay" id="overlay" />
    </div>
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="main-content">
      <div class="page-content">
        <BContainer fluid>
          <slot name="content" />
        </BContainer>
      </div>
    </div>
  </div>
</template>

<script>
import simplebar from "simplebar-vue";
import { useLayoutStore } from "~/stores/layout";
import { setAttribute } from "~/app/utils.js";
import VerticalComponent from "@/components/layout/rightSidebar/VerticalComponent.vue";
import HorizontalComponent from "@/components/layout/rightSidebar/HorizontalComponent.vue";
import TwoColumComponent from "@/components/layout/rightSidebar/TwoColComponent.vue";
import {
  layoutThemeTypes,
  layoutSideBarImages
} from "@/components/layout/rightSidebar/utils.js";
/**
 * Right sidebar component
 */
export default {
  components: {
    simplebar,
    VerticalComponent,
    HorizontalComponent,
    TwoColumComponent
  },
  data() {
    return {
      preloaderEnable: true,
      offcanvasModel: false,
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      },
      layoutStore: useLayoutStore(),
      layoutThemeTypes,
      layoutSideBarImages
    };
  },
  mounted() {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth > 767) {
      this.offcanvasModel = true;
    }
    this.initBackToTopBtn();
    this.initGradientSideBar();
    window.addEventListener("resize", this.resizeWindow);
  },
  computed: {
    layoutType: {
      get() {
        return this.layoutStore.layoutType;
      },
      set(layout) {
        this.layoutStore.changeLayoutType(layout);
        localStorage.setItem("rmenu", layout);
        setAttribute("data-layout", layout);
        this.offcanvasModel = true;
        document.querySelector(".hamburger-icon").classList.remove("open");
      }
    },
    isVertical() {
      return this.layoutType === "vertical";
    },
    isHorizontal() {
      return this.layoutType === "horizontal";
    },
    isTwoColumn() {
      return this.layoutType === "twocolumn";
    },
    layoutWidth: {
      get() {
        return this.layoutStore.layoutWidth;
      },
      set(width) {
        if (width == "boxed") {
          this.layoutStore.changeSidebarSize("sm-hover");
          this.layoutStore.changeLayoutWidth(width);
        } else {
          this.layoutStore.changeSidebarSize("lg");
          this.layoutStore.changeLayoutWidth(width);
        }
        setAttribute("data-layout-width", width);
      }
    },
    topbar: {
      get() {
        return this.layoutStore.topbar;
      },
      set(topbar) {
        this.layoutStore.changeTopbar(topbar);
        setAttribute("data-topbar", topbar);
      }
    },
    sidebarSize: {
      get() {
        return this.layoutStore.sidebarSize;
      },
      set(size) {
        this.layoutStore.changeSidebarSize(size);
        setAttribute("data-sidebar-size", size);
      }
    },
    position: {
      get() {
        return this.layoutStore.position;
      },
      set(position) {
        this.layoutStore.changePosition(position);
        setAttribute("data-layout-position", position);
      }
    },
    sidebarView: {
      get() {
        return this.layoutStore.sidebarView;
      },
      set(sidebarView) {
        this.layoutStore.changeSidebarView(sidebarView);
        setAttribute("data-layout-style", sidebarView);
      }
    },
    sidebarColor: {
      get() {
        return this.layoutStore.sidebarColor;
      },
      set(sidebarColor) {
        this.layoutStore.changeSidebarColor(sidebarColor);
        setAttribute("data-sidebar", sidebarColor);
      }
    },
    sidebarImage: {
      get() {
        return this.layoutStore.sidebarImage;
      },
      set(sidebarImage) {
        this.layoutStore.changeSidebarImage(sidebarImage);
        setAttribute("data-sidebar-image", sidebarImage);
      }
    },
    preloader: {
      get() {
        return this.layoutStore.preloader;
      },
      set(preloader) {
        this.layoutStore.changePreloader(preloader);
        setAttribute("data-preloader", preloader);
        localStorage.setItem("data-preloader", preloader);
      }
    },
    mode: {
      get() {
        return this.layoutStore.mode;
      },
      set(mode) {
        this.layoutStore.changeTopbar(mode);
        this.layoutStore.changeMode(mode);
        setAttribute("data-bs-theme", mode);
        setAttribute("data-topbar", mode);
      }
    },
    layoutThemes: {
      get() {
        return this.layoutStore.layoutTheme;
      },
      set(layoutTheme) {
        if (layoutTheme == "minimal") {
          this.layoutStore.changeSidebarColor("light");
          setAttribute("data-sidebar", "light");
        } else {
          this.layoutStore.changeSidebarColor("dark");
          setAttribute("data-sidebar", "dark");
        }
        this.layoutStore.changeThemes(layoutTheme);
        setAttribute("data-theme", layoutTheme);
      }
    }
  },

  methods: {
    handleRightBarClick() {
      this.$parent.hideRightSidebar();
    },
    middleware(event) {
      if (event.target.classList)
        return !event.target.classList.contains("toggle-right");
    },
    resetLayout() {
      location.reload();
    },

    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    resizeWindow() {
      const windowSize = document.documentElement.clientWidth;
      const layout = document.documentElement.getAttribute("data-layout");
      const hamburgerIconEle = document.querySelector(".hamburger-icon");
      if (windowSize >= 1025) {
        if (layout === "vertical" || layout === "semibox") {
          setAttribute("data-sidebar-size", this.layoutStore.sidebarSize);
        }
      } else if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove("twocolumn-panel");
        if (layout === "semibox") {
          setAttribute("data-sidebar-size", "sm");
        }
        if (hamburgerIconEle) {
          hamburgerIconEle.classList.add("open");
        }
      } else if (windowSize <= 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.body.classList.add("twocolumn-panel");
        if (layout !== "horizontal") {
          setAttribute("data-sidebar-size", "lg");
        }
        if (hamburgerIconEle) {
          hamburgerIconEle.classList.add("open");
        }
      }
    },
    initBackToTopBtn() {
      const backToTop = document.getElementById("back-to-top");
      if (backToTop) {
        window.onscroll = function () {
          if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
          ) {
            backToTop.style.display = "block";
          } else {
            backToTop.style.display = "none";
          }
        };
      }
    },
    initGradientSideBar() {
      const collapseBgGradientEle =
        document.getElementById("collapseBgGradient");
      const collapseBgGradientTarget = document.querySelector(
        "[data-bs-target='#collapseBgGradient']"
      );
      if (collapseBgGradientEle) {
        const collapseBgGradientInputElements = document.querySelectorAll(
          "#collapseBgGradient .form-check input"
        );

        Array.from(collapseBgGradientInputElements).forEach(function () {
          if (collapseBgGradientTarget) {
            collapseBgGradientTarget.addEventListener("click", function () {
              document.getElementById("sidebar-color-gradient").click();
            });
          }
        });
      }

      const sidebarElements = document.querySelectorAll(
        "[name='data-sidebar']"
      );
      const isCollapseBgGradientCheckedInput = document.querySelector(
        "#collapseBgGradient .form-check input:checked"
      );
      Array.from(sidebarElements).forEach(function (elem) {
        if (collapseBgGradientTarget) {
          if (isCollapseBgGradientCheckedInput) {
            collapseBgGradientTarget.classList.add("active");
          } else {
            collapseBgGradientTarget.classList.remove("active");
            collapseBgGradientEle?.classList.remove("show");
          }

          elem.addEventListener("change", function () {
            if (
              document.querySelector(
                "#collapseBgGradient .form-check input:checked"
              )
            ) {
              collapseBgGradientTarget.classList.add("active");
            } else {
              collapseBgGradientEle?.classList.remove("show");
              collapseBgGradientTarget.classList.remove("active");
            }
          });
        }
      });
    }
  }
};
</script>

<template>
  <div>
    <BButton
      variant="dark"
      @click="topFunction"
      class="btn-icon"
      id="back-to-top"
    >
      <i class="bi bi-caret-up fs-3xl"></i>
    </BButton>

    <!--preloader-->
    <!-- <div id="preloader" v-if="preloaderEnable" style="opacity: 1; visibility:visible">
      <div id="status">
        <div class="spinner-border text-primary avatar-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div> -->

    <!-- <div id="preloader">
      <div id="status">
        <div class="spinner-border text-primary avatar-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div> -->
  </div>
</template>

import { defineStore } from "pinia";

// let localData = typeof window !== "undefined" && JSON.parse(localStorage.layoutType).value;

export const useLayoutStore = defineStore({
  id: "layout-store",
  state: () => {
    return {
      layoutType: "vertical",
      layoutWidth: "fluid",
      sidebarSize: "lg",
      topbar: "light",
      mode: "light",
      position: "fixed",
      sidebarView: "default",
      sidebarColor: "dark",
      sidebarImage: "none",
      preloader: "disable",
      visibility: "show",
      layoutTheme: "default"
    };
  },
  actions: {
    changeLayoutType(layoutType) {
      this.layoutType = layoutType;
    },

    changeLayoutWidth(layoutWidth) {
      this.layoutWidth = layoutWidth;
    },

    changeSidebarSize(sidebarSize) {
      this.sidebarSize = sidebarSize;
    },

    changeTopbar(topbar) {
      this.topbar = topbar;
    },

    changeMode(mode) {
      this.mode = mode;
    },

    changePosition(position) {
      this.position = position;
    },

    changeSidebarView(sidebarView) {
      this.sidebarView = sidebarView;
    },

    changeSidebarColor(sidebarColor) {
      this.sidebarColor = sidebarColor;
    },

    changeSidebarImage(sidebarImage) {
      this.sidebarImage = sidebarImage;
    },

    changePreloader(preloader) {
      this.preloader = preloader;
    },

    changeVisibility(visibility) {
      this.visibility = visibility;
    },

    changeThemes(layoutTheme) {
      this.layoutTheme = layoutTheme;
    }
  },

  // Getter function for layoutType
  get layoutType() {
    return this.state.layoutType;
  },

  // Getter function for sidebarSize
  get sidebarSize() {
    return this.state.sidebarSize;
  },

  // Getter function for layoutWidth
  get layoutWidth() {
    return this.state.layoutWidth;
  },

  // Getter function for topbar
  get topbar() {
    return this.state.topbar;
  },

  // Getter function for mode
  get mode() {
    return this.state.mode;
  },

  // Getter function for position
  get position() {
    return this.state.position;
  },

  // Getter function for sidebarView
  get sidebarView() {
    return this.state.sidebarView;
  },

  // Getter function for sidebarColor
  get sidebarColor() {
    return this.state.sidebarColor;
  },

  // Getter function for sidebarImage
  get sidebarImage() {
    return this.state.sidebarImage;
  },

  // Getter function for visibility
  get visibility() {
    return this.state.visibility;
  },

  // Getter function for layoutTheme
  get layoutTheme() {
    return this.state.layoutTheme;
  }
});

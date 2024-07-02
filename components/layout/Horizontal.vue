<script>
import horMenu from "~/components/hor-menu.js";
import SubMenuComponent from "~/components/SubMenuComponent.vue";

export default {
  data() {
    return {
      newMenuItems: [],
      splitMenuItems: [],
      menuItems: horMenu
    };
  },
  components: {
    SubMenuComponent
  },
  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true
    }
  },
  methods: {
    onRoutechange(ele) {
      this.initActiveMenu(ele.path);
    },

    setupHorizontalMenu() {
      const navData = horMenu;
      const isMoreMenu = ref(false);

      // Create the "More" menu item and add the hidden items to its subItems
      const navbarNav = document.getElementById("navbar-nav");
      const fullWidthOfMenu = navbarNav?.parentElement?.clientWidth;

      const menuWidth = fullWidthOfMenu || 0;
      let totalItemsWidth = 0;
      let visibleItems = [];
      let hiddenItems = [];

      for (let i = 0; i < navData.length; i++) {
        const itemWidth = navbarNav?.children[i]?.offsetWidth;
        totalItemsWidth += itemWidth;
        if (totalItemsWidth + 150 <= menuWidth) {
          visibleItems.push(navData[i]);
        } else {
          hiddenItems.push(navData[i]);
        }
      }
      const moreMenuItem = {
        id: "more",
        label: "t-more",
        icon: "ri-briefcase-2-line",
        subItems: hiddenItems,
        link: "sidebarMore",
        stateVariables: isMoreMenu.value,
        click: (e) => {
          e.preventDefault();
          isMoreMenu.value = !isMoreMenu.value;
        }
      };

      const updatedMenuItems = [...visibleItems, moreMenuItem];
      this.menuItems = updatedMenuItems;
    },

    initActiveMenu(ele) {
      setTimeout(() => {
        const elementById = document.querySelector("#navbar-nav");
        if (elementById) {
          const parentElements = elementById.querySelectorAll(
            ".nav-item .nav-link.menu-link.collapsed"
          );
          parentElements.forEach((parentElement) => {
            const closestSibling = parentElement.nextSibling;
            const activeChild = closestSibling.querySelector(
              ".nav-item > .router-link-active.router-link-exact-active"
            );
            if (activeChild) {
              parentElement.classList.add("active");
              closestSibling.classList.add("active");
              activeChild.classList.add("active");
            } else {
              parentElement.classList.remove("active");
              closestSibling.classList.remove("active");
            }
          });
        }
      }, 500);
    },

    menuItem(e) {
      // get the dropdown menu element
      let dropdownMenu = e.target;
      const subMenus = dropdownMenu.nextElementSibling
        ? dropdownMenu.nextElementSibling
        : dropdownMenu.parentElement.nextElementSibling;
      if (dropdownMenu && subMenus) {
        // get the position and dimensions of the dropdown menu
        let dropdownOffset = subMenus.getBoundingClientRect();
        let dropdownWidth = subMenus.offsetWidth;
        let dropdownHeight = subMenus.offsetHeight;

        // get the dimensions of the screen
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;

        // calculate the maximum x and y coordinates of the dropdown menu
        let maxDropdownX = dropdownOffset.left + dropdownWidth;
        let maxDropdownY = dropdownOffset.top + dropdownHeight;

        // check if the dropdown menu goes outside the screen
        let isDropdownOffScreen =
          maxDropdownX > screenWidth || maxDropdownY > screenHeight;
        if (isDropdownOffScreen) {
          if (subMenus.classList.contains("menu-dropdown")) {
            subMenus.classList.add("dropdown-custom-right");
          }
        }
      }
    },

    menuPosSetOnClicknHover() {
      const isElement = document.querySelectorAll("#navbar-nav > li.nav-item");
      Array.from(isElement).forEach((item) => {
        item.addEventListener("click", this.menuItem, false);
        item.addEventListener("mouseover", this.menuItem, false);
      });
    }
  },
  mounted() {
    window.addEventListener("resize", this.setupHorizontalMenu);
    this.setupHorizontalMenu();

    this.menuPosSetOnClicknHover();
  }
};
</script>

<template>
  <div>
    <div id="layout-wrapper">
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
              <img src="@/assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt="" height="22" />
            </span>
          </nuxt-link>
          <BButton
            type="button"
            size="sm"
            variant="white"
            class="p-0 fs-3xl header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i class="ri-record-circle-line"></i>
          </BButton>
        </div>
        <div id="scrollbar">
          <BContainer fluid>
            <ul class="navbar-nav h-100" id="navbar-nav">
              <template v-for="(item, index) in menuItems" :key="index">
                <!-- for title tag -->
                <li class="menu-title" v-if="item.isHeader">
                  <span :data-key="item.label">{{ $t(item.label) }}</span>
                </li>

                <!-- for without sub-items -->
                <li class="nav-item" v-if="!item.isHeader && !item.subItems">
                  <nuxt-link :to="item.link" class="nav-link menu-link">
                    <i :class="item.icon"></i>
                    <span :data-key="item.label">{{ $t(item.label) }}</span>
                  </nuxt-link>
                </li>

                <!-- for subitems -->
                <li class="nav-item" v-if="!item.isHeader && item.subItems">
                  <BLink
                    class="nav-link menu-link collapsed"
                    :href="'#' + item.link"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    :aria-controls="item.link"
                  >
                    <i :class="item.icon" v-if="item.icon"></i>
                    <span :data-key="item.label">{{ $t(item.label) }}</span>
                  </BLink>
                  <div
                    class="collapse menu-dropdown"
                    :id="item.link"
                    v-if="item.subItems"
                  >
                    <ul class="nav nav-sm flex-column">
                      <li
                        class="nav-item"
                        v-for="(subItem, index) in item.subItems"
                        :key="index"
                      >
                        <nuxt-link
                          class="nav-link"
                          :to="subItem.link"
                          v-if="!subItem.subItems && !subItem.isHeader"
                        >
                          <i v-if="subItem.icon" :class="subItem.icon"></i>
                          <span :data-key="subItem.label">{{
                            $t(subItem.label)
                          }}</span>
                        </nuxt-link>
                        <BLink
                          class="nav-link menu-link collapsed"
                          :href="'#' + subItem.link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          :aria-controls="subItem.link"
                          v-if="subItem.subItems"
                        >
                          <i :class="subItem.icon" v-if="subItem.icon"></i>
                          <span :data-key="subItem.label">{{
                            $t(subItem.label)
                          }}</span>
                        </BLink>
                        <SubMenuComponent :subItem="subItem" />
                      </li>
                    </ul>
                  </div>
                </li>
              </template>
            </ul>
          </BContainer>
          <!-- Sidebar -->
        </div>
        <!-- Left Sidebar End -->
        <!-- Vertical Overlay-->
        <div class="vertical-overlay"></div>
      </div>
      <!-- ============================================================== -->
      <!-- Start Page Content here -->
      <!-- ============================================================== -->

      <div class="main-content">
        <div class="page-content">
          <!-- Start Content-->
          <BContainer fluid>
            <slot name="content"></slot>
          </BContainer>
        </div>
      </div>
    </div>
  </div>
</template>

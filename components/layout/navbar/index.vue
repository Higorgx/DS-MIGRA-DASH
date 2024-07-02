<script>
import simplebar from "simplebar-vue";
import LanguageDropdown from "~/components/layout/navbar/LanguageDropdown.vue";
import AppsDropdown from "~/components/layout/navbar/AppsDropdown.vue";
import CartDropdown from "~/components/layout/navbar/CartDropdown.vue";
import NotificationDropdown from "~/components/layout/navbar/NotificationDropdown.vue";
import ProfileDropdown from "~/components/layout/navbar/ProfileDropdown.vue";
/**
 * Nav-bar Component
 */
export default {
  data() {
    return {
      value: null,
      myVar: 1
    };
  },
  components: {
    simplebar,
    LanguageDropdown,
    AppsDropdown,
    CartDropdown,
    NotificationDropdown,
    ProfileDropdown
  },

  methods: {
    isCustomDropdown() {
      //Search bar
      var searchOptions = document.getElementById("search-close-options");
      if (searchOptions) {
        var dropdown = document.getElementById("search-dropdown");
        if (dropdown) {
          var searchInput = document.getElementById("search-options");
          if (searchInput) {
            searchInput.addEventListener("focus", () => {
              var inputLength = searchInput.value.length;
              if (inputLength > 0) {
                dropdown.classList.add("show");
                searchOptions.classList.remove("d-none");
              } else {
                dropdown.classList.remove("show");
                searchOptions.classList.add("d-none");
              }
            });

            searchInput.addEventListener("keyup", () => {
              var inputLength = searchInput.value.length;
              if (inputLength > 0) {
                dropdown.classList.add("show");
                searchOptions.classList.remove("d-none");
              } else {
                dropdown.classList.remove("show");
                searchOptions.classList.add("d-none");
              }
            });
          }
          searchOptions.addEventListener("click", () => {
            searchInput.value = "";
            dropdown.classList.remove("show");
            searchOptions.classList.add("d-none");
          });
        }
      }

      document.body.addEventListener("click", (e) => {
        if (e.target.getAttribute("id") !== "search-options") {
          dropdown.classList.remove("show");
          searchOptions.classList.add("d-none");
        }
      });
    },
    toggleHamburgerMenu() {
      document.documentElement.setAttribute("data-sidebar-visibility", "show");

      var windowSize = document.documentElement.clientWidth;
      let layoutType = document.documentElement.getAttribute("data-layout");
      let visibilityType = document.documentElement.getAttribute(
        "data-sidebar-visibility"
      );

      if (windowSize > 767)
        document.querySelector(".hamburger-icon").classList.toggle("open");

      //For collapse horizontal menu
      if (
        document.documentElement.getAttribute("data-layout") === "horizontal"
      ) {
        document.body.classList.contains("menu")
          ? document.body.classList.remove("menu")
          : document.body.classList.add("menu");
      }

      //For collapse vertical menu
      if (
        visibilityType === "show" &&
        (layoutType === "vertical" || layoutType === "semibox")
      ) {
        if (windowSize < 1025 && windowSize > 767) {
          document.body.classList.remove("vertical-sidebar-enable");
          document.documentElement.getAttribute("data-sidebar-size") == "sm"
            ? document.documentElement.setAttribute("data-sidebar-size", "")
            : document.documentElement.setAttribute("data-sidebar-size", "sm");
        } else if (windowSize > 1025) {
          document.body.classList.remove("vertical-sidebar-enable");
          document.documentElement.getAttribute("data-sidebar-size") == "lg"
            ? document.documentElement.setAttribute("data-sidebar-size", "sm")
            : document.documentElement.setAttribute("data-sidebar-size", "lg");
        } else if (windowSize <= 767) {
          document.body.classList.add("vertical-sidebar-enable");
          document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
      }

      //Two column menu
      if (document.documentElement.getAttribute("data-layout") == "twocolumn") {
        document.body.classList.contains("twocolumn-panel")
          ? document.body.classList.remove("twocolumn-panel")
          : document.body.classList.add("twocolumn-panel");
      }
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },

    toggleDarkMode() {
      if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
        document.documentElement.setAttribute("data-bs-theme", "light");
      } else {
        document.documentElement.setAttribute("data-bs-theme", "dark");
      }
    },
    initTopbarComponents() {
      var cartList = document.querySelectorAll(".product").length;

      document.querySelectorAll(".cartitem-badge").forEach(function (item) {
        item.innerHTML = cartList;
      });
      var This = this;
      document.querySelectorAll(".product-list").forEach(function (elem) {
        elem.querySelectorAll(".product-count").forEach(function (subelem) {
          subelem.innerHTML = elem.querySelectorAll(".product").length;
        });
        This.recalculateCart(elem);
      }, This);
    },
    recalculateCart(elm) {
      var taxRate = 0.125;
      var shippingRate = 65.0;
      var discountRate = 0.15;

      var currencySign = "$";
      var subtotal = 0;

      Array.from(elm.getElementsByClassName("product")).forEach(function (
        item
      ) {
        Array.from(item.getElementsByClassName("product-line-price")).forEach(
          function (e) {
            subtotal += parseFloat(e.innerHTML);
          }
        );
      });

      /* Calculate totals */
      var tax = subtotal * taxRate;
      var discount = subtotal * discountRate;

      var shipping = subtotal > 0 ? shippingRate : 0;
      var total = subtotal + tax + shipping - discount;

      elm.querySelector(".cart-subtotal").innerHTML =
        currencySign + subtotal.toFixed(2);
      elm.querySelector(".cart-tax").innerHTML = currencySign + tax.toFixed(2);
      elm.querySelector(".cart-shipping").innerHTML =
        currencySign + shipping.toFixed(2);
      elm.querySelector(".cart-total").innerHTML =
        currencySign + total.toFixed(2);
      elm.querySelector(".cart-discount").innerHTML =
        "-" + currencySign + discount.toFixed(2);
    },
    changeMode(mode) {
      if (mode == "dark") {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        document.documentElement.setAttribute("data-topbar", "dark");
        document.documentElement.classList.remove("mode-auto");
      } else if (mode == "auto") {
        document.documentElement.setAttribute("data-bs-theme", "light");
        document.documentElement.setAttribute("data-topbar", "light");
        document.documentElement.classList.add("mode-auto");
      } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
        document.documentElement.setAttribute("data-topbar", "light");
        document.documentElement.classList.remove("mode-auto");
      }
    },
    windowResizeHover() {
      var windowSize = document.documentElement.clientWidth;
      if (windowSize < 1025 && windowSize > 767) {
        if (document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.add("open");
        }
      } else if (windowSize >= 1025) {
        if (document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.remove("open");
        }
      } else if (windowSize <= 767) {
        if (document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.add("open");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", function () {
      var pageTopbar = document.getElementById("page-topbar");
      if (pageTopbar) {
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
          ? pageTopbar.classList.add("topbar-shadow")
          : pageTopbar.classList.remove("topbar-shadow");
      }
    });

    // hide empty cart
    if (document.getElementById("topnav-hamburger-icon"))
      document
        .getElementById("topnav-hamburger-icon")
        .addEventListener("click", this.toggleHamburgerMenu);

    if (document.getElementById("empty-cart")) {
      document.getElementById("empty-cart").style.display = "none";
    }
    if (
      document.getElementById("checkout-elem") ||
      document.getElementById("count-table")
    ) {
      document.getElementById("checkout-elem").style.display = "block";
      document.getElementById("count-table").style.display = "block";
    }

    // show no notifications
    if (document.querySelectorAll(".notification-item").length > 0) {
      document.querySelectorAll(".notification-title").forEach(function (item) {
        item.style.display = "block";
      });
    }

    // product quantity plus
    var This = this;
    Array.from(document.querySelectorAll(".product-list .plus")).forEach(
      (e) => {
        e.addEventListener("click", function () {
          var productRow = e.closest(".product");
          var productList = e.closest(".product-list");
          var price;
          if (productRow || productRow.getElementsByClassName("product-price"))
            Array.from(
              productRow.getElementsByClassName("product-price")
            ).forEach(function (e) {
              price = parseFloat(e.innerHTML);
            });

          if (
            e.previousElementSibling &&
            e.previousElementSibling.classList.contains("product-quantity")
          ) {
            var value = e.previousElementSibling.value;
            e.previousElementSibling.value = parseInt(value) + 1;
            value = parseInt(value) + 1;
            var linePrice = price * value;
            productRow.getElementsByClassName(
              "product-line-price"
            )[0].innerText = linePrice.toFixed(2);
            This.recalculateCart(productList);
          }
        });
      }
    );

    // product quantity minus
    Array.from(document.querySelectorAll(".product-list .minus")).forEach(
      (e) => {
        e.addEventListener("click", function () {
          var productRow = e.closest(".product");
          var productList = e.closest(".product-list");
          var price;
          if (productRow || productRow.getElementsByClassName("product-price"))
            Array.from(
              productRow.getElementsByClassName("product-price")
            ).forEach(function (e) {
              price = parseFloat(e.innerHTML);
            });

          if (
            e.nextElementSibling &&
            e.nextElementSibling.classList.contains("product-quantity")
          ) {
            var value = e.nextElementSibling.value;
            if (value > 0) {
              e.nextElementSibling.value = parseInt(value) - 1;
              value = parseInt(value) - 1;
              var linePrice = price * value;
              productRow.getElementsByClassName(
                "product-line-price"
              )[0].innerText = linePrice.toFixed(2);
              This.recalculateCart(productList);
            }
          }
        });
      },
      This
    );

    window.addEventListener("resize", this.windowResizeHover);
    this.windowResizeHover();

    this.isCustomDropdown();
    this.initTopbarComponents();

    document.body.addEventListener("keyup", function (e) {
      if (e.key == "Escape") {
        document.body.classList.remove("fullscreen-enable");
      }
    });
  }
};
</script>

<template>
  <header id="page-topbar">
    <div class="layout-width">
      <div class="navbar-header">
        <div class="d-flex">
          <div class="navbar-brand-box horizontal-logo">
            <nuxt-link to="/" class="logo logo-dark">
              <span class="logo-sm">
                <img src="@/assets/images/logo-sm.png" alt="" height="22" />
              </span>
              <span class="logo-lg">
                <img src="@/assets/images/logo-dark.png" alt="" height="22" />
              </span>
            </nuxt-link>

            <nuxt-link to="/" class="logo logo-light">
              <span class="logo-sm">
                <img src="@/assets/images/logo-sm.png" alt="" height="22" />
              </span>
              <span class="logo-lg">
                <img src="@/assets/images/logo-light.png" alt="" height="22" />
              </span>
            </nuxt-link>
          </div>
          <BButton
            type="button"
            size="sm"
            variant="white"
            class="px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none"
            id="topnav-hamburger-icon"
          >
            <span class="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </BButton>

          <form class="app-search d-none d-md-inline-flex">
            <div class="position-relative">
              <input
                type="text"
                class="form-control"
                placeholder="Search..."
                autocomplete="off"
                id="search-options"
                value=""
              />
              <span class="mdi mdi-magnify search-widget-icon"></span>
              <span
                class="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                id="search-close-options"
              ></span>
            </div>
            <div class="dropdown-menu dropdown-menu-lg" id="search-dropdown">
              <simplebar data-simplebar style="max-height: 320px">
                <div class="dropdown-header">
                  <h6 class="text-overflow text-muted mb-0 text-uppercase">
                    Recent Searches
                  </h6>
                </div>

                <div
                  class="dropdown-item bg-transparent text-wrap d-flex gap-1"
                >
                  <nuxt-link
                    to="/"
                    class="btn btn-subtle-secondary btn-sm btn-rounded"
                  >
                    how to setup <i class="mdi mdi-magnify ms-1" />
                  </nuxt-link>
                  <nuxt-link
                    to="/"
                    class="btn btn-subtle-secondary btn-sm btn-rounded"
                  >
                    buttons <i class="mdi mdi-magnify ms-1" />
                  </nuxt-link>
                </div>

                <div class="dropdown-header mt-2">
                  <h6 class="text-overflow text-muted mb-1 text-uppercase">
                    Pages
                  </h6>
                </div>

                <BLink href="#" class="dropdown-item notify-item">
                  <i
                    class="ri-bubble-chart-line align-middle fs-18 text-muted me-2"
                  />
                  <span>Analytics Dashboard</span>
                </BLink>

                <BLink href="#" class="dropdown-item notify-item">
                  <i
                    class="ri-lifebuoy-line align-middle fs-18 text-muted me-2"
                  />
                  <span>Help Center</span>
                </BLink>

                <BLink href="#" class="dropdown-item notify-item">
                  <i
                    class="ri-user-settings-line align-middle fs-18 text-muted me-2"
                  />
                  <span>My account settings</span>
                </BLink>

                <div class="dropdown-header mt-2">
                  <h6 class="text-overflow text-muted mb-2 text-uppercase">
                    Members
                  </h6>
                </div>

                <div class="notification-list">
                  <BLink href="#" class="dropdown-item notify-item py-2">
                    <div class="d-flex">
                      <img
                        src="@/assets/images/users/avatar-2.jpg"
                        class="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div class="flex-1">
                        <h6 class="m-0">Angela Bernier</h6>
                        <span class="fs-2xs mb-0 text-muted">Manager</span>
                      </div>
                    </div>
                  </BLink>
                  <BLink href="#" class="dropdown-item notify-item py-2">
                    <div class="d-flex">
                      <img
                        src="@/assets/images/users/avatar-3.jpg"
                        class="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div class="flex-1">
                        <h6 class="m-0">David Grasso</h6>
                        <span class="fs-2xs mb-0 text-muted">Web Designer</span>
                      </div>
                    </div>
                  </BLink>
                  <BLink href="#" class="dropdown-item notify-item py-2">
                    <div class="d-flex">
                      <img
                        src="@/assets/images/users/avatar-5.jpg"
                        class="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div class="flex-1">
                        <h6 class="m-0">Mike Bunch</h6>
                        <span class="fs-2xs mb-0 text-muted"
                          >React Developer</span
                        >
                      </div>
                    </div>
                  </BLink>
                </div>
              </simplebar>

              <div class="text-center pt-3 pb-1">
                <nuxt-link to="#" class="btn btn-primary btn-sm"
                  >View All Results <i class="ri-arrow-right-line ms-1"
                /></nuxt-link>
              </div>
            </div>
          </form>
        </div>

        <div class="d-flex align-items-center">
          <AppsDropdown />
          <LanguageDropdown />
          <CartDropdown />
          <div class="ms-1 header-item d-none d-sm-flex">
            <BButton
              type="button"
              variant="ghost-dark"
              class="btn-icon btn-topbar rounded-circle"
              data-toggle="fullscreen"
              @click="initFullScreen"
            >
              <i class="bi bi-arrows-fullscreen fs-lg" />
            </BButton>
          </div>
          <BDropdown
            class="dropdown topbar-head-dropdown header-item"
            no-caret
            end
            auto-close="outside"
            variant="ghost-dark"
          >
            <template #button-content>
              <i class="bi bi-sun align-middle fs-3xl" />
            </template>
            <div class="p-2 dropdown-menu-end" id="light-dark-mode">
              <BLink
                class="dropdown-item"
                data-mode="light"
                @click="changeMode('light')"
              >
                <i class="bi bi-sun align-middle me-2" /> Defualt (light mode)
              </BLink>
              <BLink
                class="dropdown-item"
                data-mode="dark"
                @click="changeMode('dark')"
              >
                <i class="bi bi-moon align-middle me-2" /> Dark
              </BLink>
              <BLink
                class="dropdown-item"
                data-mode="auto"
                @click="changeMode('auto')"
              >
                <i class="bi bi-moon-stars align-middle me-2" />
                Auto (system defualt)
              </BLink>
            </div>
          </BDropdown>
          <NotificationDropdown />
          <ProfileDropdown />
        </div>
      </div>
    </div>
  </header>
</template>

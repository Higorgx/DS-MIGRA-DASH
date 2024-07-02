<script>
import { useLayoutStore } from "~/stores/layout";

export default {
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
        layoutState: useLayoutStore()
      },
      activeId: "",
      nestedActiveId: ""
    };
  },
  computed: {
    layoutType: {
      get() {
        return this.layoutState.layoutType;
      }
    }
  },
  watch: {
    $route: {
      handler: "onRouteChange",
      immediate: true,
      deep: true
    },
  },
  methods: {
    async onRouteChange() {
      this.activeId = "";
      this.nestedActiveId = "";
    },
    async getVisibility(visibleId) {
      const { id, nestedActiveId = "" } = await this.isVisible(visibleId);
      this.activeId = id;
      this.nestedActiveId = nestedActiveId;
      return id;
    },
    isVisible(id) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const elementById = document.getElementById(id);
          if (elementById) {
            const activeMenuEle = elementById.querySelector(
              ".nav .nav-item a.nav-link.router-link-active"
            );
            if (activeMenuEle) {
              const firstLvl = activeMenuEle.closest(".menu-dropdown");
              if (firstLvl) {
                const secondLvl = firstLvl.closest(".menu-dropdown");
                if (secondLvl) {
                  const nestedActiveId = secondLvl.getAttribute("id");
                  resolve({ id, nestedActiveId });
                }
              }
              resolve({ id });
            }
          } else {
            resolve({ id: "" });
          }
        }, 10);
      });
    }
  }
};
</script>

<template>
  <BContainer fluid>
    <div id="two-column-menu"></div>
    <ul class="navbar-nav h-100 vertical-menu-wrapper" id="navbar-nav">
      <li class="menu-title">
        <span data-key="t-menu">{{ $t("t-menu") }}</span>
      </li>
      <li class="nav-item">
        <BLink
          class="nav-link menu-link"
          data-bs-toggle="collapse"
          aria-expanded="false"
          :class="{
            active: activeId === 'sidebarDashboards'
          }"
          v-b-toggle.sidebarDashboards
        >
          <i class="ph-gauge"></i>
          <span data-key="t-dashboards">{{ $t("t-dashboards") }}</span>
        </BLink>

        <BCollapse
          class="menu-dropdown"
          id="sidebarDashboards"
          :class="getVisibility('sidebarDashboards')"
          :visible="activeId === 'sidebarDashboards'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/dashboard/analytics"
                class="nav-link"
                data-key="t-analytics"
              >
                {{ $t("t-analytics") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link to="/dashboard/crm" class="nav-link" data-key="t-crm">
                {{ $t("t-crm") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link" data-key="t-ecommerce">
                {{ $t("t-ecommerce") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/dashboard/learning"
                class="nav-link"
                data-key="t-learning"
              >
                {{ $t("t-learning") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/dashboard/real-estate"
                class="nav-link"
                data-key="t-real-estate"
              >
                {{ $t("t-real-estate") }}
              </nuxt-link>
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="menu-title">
        <i class="ri-more-fill"></i>
        <span data-key="t-apps">{{ $t("t-apps") }}</span>
      </li>

      <li class="nav-item">
        <nuxt-link to="/calendar" class="nav-link menu-link">
          <i class="ph-calendar"></i>
          <span data-key="t-calendar">{{ $t("t-calendar") }}</span>
        </nuxt-link>
      </li>

      <li class="nav-item">
        <nuxt-link to="/chat" class="nav-link menu-link">
          <i class="ph-chats"></i>
          <span data-key="t-chat">{{ $t("t-chat") }}</span>
        </nuxt-link>
      </li>

      <li class="nav-item">
        <nuxt-link to="/email" class="nav-link menu-link">
          <i class="ph-envelope"></i>
          <span data-key="t-email">{{ $t("t-email") }}</span>
        </nuxt-link>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          :aria-expanded="activeId === 'sidebarEcommerce'"
          :class="{
            active: activeId === 'sidebarEcommerce'
          }"
          v-b-toggle.sidebarEcommerce
        >
          <i class="ph-storefront"></i>
          <span data-key="t-ecommerce">{{ $t("t-ecommerce") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarEcommerce"
          :class="getVisibility('sidebarEcommerce')"
          :visible="activeId === 'sidebarEcommerce'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/ecommerce/products"
                class="nav-link"
                data-key="t-products"
                >{{ $t("t-products") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/ecommerce/products-grid"
                class="nav-link"
                data-key="t-products-grid"
                >{{ $t("t-products-grid") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/ecommerce/product-details"
                class="nav-link"
                data-key="t-product-Details"
                >{{ $t("t-products-Details") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/ecommerce/add-product"
                class="nav-link"
                data-key="t-create-product"
                >{{ $t("t-create-product") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/ecommerce/orders"
                class="nav-link"
                data-key="t-orders"
                >{{ $t("t-orders") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/ecommerce/order-overview"
                class="nav-link"
                data-key="t-order-overview"
                >{{ $t("t-order-overview") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/ecommerce/customers"
                class="nav-link"
                data-key="t-customers"
                >{{ $t("t-customers") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/ecommerce/cart"
                class="nav-link"
                data-key="t-shopping-cart"
                >{{ $t("t-shopping-cart") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/ecommerce/checkout"
                class="nav-link"
                data-key="t-checkout"
                >{{ $t("t-checkout") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/ecommerce/sellers"
                class="nav-link"
                data-key="t-sellers"
                >{{ $t("t-sellers") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/ecommerce/seller-overview"
                class="nav-link"
                data-key="t-sellers-overview"
                >{{ $t("t-sellers-overview") }}</nuxt-link
              >
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="nav-item">
        <nuxt-link to="/file-manager" class="nav-link menu-link">
          <i class="ph-folder-open"></i>
          <span data-key="t-file-manager">{{ $t("t-file-manager") }}</span>
        </nuxt-link>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          :aria-expanded="activeId === 'sidebarLearning'"
          :class="{
            active: activeId === 'sidebarLearning'
          }"
          v-b-toggle.sidebarLearning
        >
          <i class="ph-graduation-cap"></i>
          <span data-key="t-learning">{{ $t("t-learning") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarLearning"
          :class="getVisibility('sidebarLearning')"
          :visible="activeId === 'sidebarLearning'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <BLink
                class="nav-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                v-b-toggle.sidebarCourses
                data-key="t-courses"
                :visible="nestedActiveId === 'sidebarCourses'"
                :class="{
                  active: nestedActiveId === 'sidebarCourses'
                }"
              >
                {{ $t("t-courses") }}
              </BLink>
              <BCollapse
                class="menu-dropdown"
                :class="{
                  show: nestedActiveId === 'sidebarCourses'
                }"
                id="sidebarCourses"
              >
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <nuxt-link
                      to="/learning/list"
                      class="nav-link"
                      data-key="t-list-view"
                      >{{ $t("t-list-view") }}</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/learning/grid"
                      class="nav-link"
                      data-key="t-grid-view"
                      >{{ $t("t-grid-view") }}</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/learning/category"
                      class="nav-link"
                      data-key="t-category"
                      >{{ $t("t-category") }}</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/learning/overview"
                      class="nav-link"
                      data-key="t-overview"
                      >{{ $t("t-overview") }}</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/learning/create"
                      class="nav-link"
                      data-key="t-create-course"
                      >{{ $t("t-create-course") }}</nuxt-link
                    >
                  </li>
                </ul>
              </BCollapse>
            </li>
            <li class="nav-item">
              <BLink
                class="nav-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                v-b-toggle.sidebarStudent
                data-key="t-students"
                :visible="nestedActiveId === 'sidebarStudent'"
                :class="{
                  active: nestedActiveId === 'sidebarStudent'
                }"
              >
                {{ $t("t-students") }}
              </BLink>
              <BCollapse
                class="menu-dropdown"
                id="sidebarStudent"
                :class="{
                  show: nestedActiveId === 'sidebarStudent'
                }"
              >
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <nuxt-link
                      to="/student/subscriptions"
                      class="nav-link"
                      data-key="t-my-subscriptions"
                      >{{ $t("t-my-subscriptions") }}</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/student/courses"
                      class="nav-link"
                      data-key="t-my-courses"
                      >{{ $t("t-my-courses") }}</nuxt-link
                    >
                  </li>
                </ul>
              </BCollapse>
            </li>
            <li class="nav-item">
              <BLink
                class="nav-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                v-b-toggle.sidebarInstructors
                data-key="t-instructors"
                :visible="nestedActiveId === 'sidebarInstructors'"
                :class="{
                  active: nestedActiveId === 'sidebarInstructors'
                }"
              >
                {{ $t("t-instructors") }}
              </BLink>
              <BCollapse
                class="menu-dropdown"
                id="sidebarInstructors"
                :class="{
                  show: nestedActiveId === 'sidebarInstructors'
                }"
              >
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <nuxt-link
                      to="/instructors/list"
                      class="nav-link"
                      data-key="t-list-view"
                      >{{ $t("t-list-view") }}</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/instructors/grid"
                      class="nav-link"
                      data-key="t-grid-view"
                      >{{ $t("t-grid-view") }}</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/instructors/overview"
                      class="nav-link"
                      data-key="t-overview"
                      >{{ $t("t-overview") }}</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/instructors/create"
                      class="nav-link"
                      data-key="t-create-instructors"
                      >{{ $t("t-create-instructors") }}</nuxt-link
                    >
                  </li>
                </ul>
              </BCollapse>
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link"
          :class="{
            active: activeId === 'sidebarInvoices'
          }"
          data-bs-toggle="collapse"
          :aria-expanded="activeId === 'sidebarInvoices'"
          v-b-toggle.sidebarInvoices
        >
          <i class="ph-file-text"></i>
          <span data-key="t-invoices">{{ $t("t-invoices") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarInvoices"
          :class="getVisibility('sidebarInvoices')"
          :visible="activeId === 'sidebarInvoices'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/invoices/list"
                class="nav-link"
                data-key="t-list-view"
                >{{ $t("t-list-view") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/invoices/overview"
                class="nav-link"
                data-key="t-overview"
                >{{ $t("t-overview") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/invoices/create"
                class="nav-link"
                data-key="t-create-invoice"
                >{{ $t("t-create-invoice") }}
              </nuxt-link>
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarTickets
          :class="{
            active: activeId === 'sidebarTickets'
          }"
        >
          <i class="ph-ticket"></i>
          <span data-key="t-support-tickets">{{
            $t("t-support-tickets")
          }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarTickets"
          :class="getVisibility('sidebarTickets')"
          :visible="activeId === 'sidebarTickets'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/tickets/list"
                class="nav-link"
                data-key="t-list-view"
                >{{ $t("t-list-view") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/tickets/overview"
                class="nav-link"
                data-key="t-overview"
                >{{ $t("t-overview") }}</nuxt-link
              >
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarRealeEstate
          :class="{
            active: activeId === 'sidebarRealeEstate'
          }"
        >
          <i class="ph-buildings"></i>
          <span data-key="t-real-estate">{{ $t("t-real-estate") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarRealeEstate"
          :class="getVisibility('sidebarRealeEstate')"
          :visible="activeId === 'sidebarRealeEstate'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/real-estate/grid"
                class="nav-link"
                data-key="t-listing-grid"
                >{{ $t("t-listing-grid") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/real-estate/list"
                class="nav-link"
                data-key="t-listing-list"
                >{{ $t("t-listing-list") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/real-estate/map"
                class="nav-link"
                data-key="t-listing-map"
                >{{ $t("t-listing-map") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/real-estate/property-overview"
                class="nav-link"
                data-key="t-property-overview"
                >{{ $t("t-property-overview") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <BLink
                class="nav-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                v-b-toggle.sidebarAgent
                data-key="t-agent"
              >
                {{ $t("t-agent") }}
              </BLink>
              <BCollapse
                class="menu-dropdown"
                id="sidebarAgent"
                :class="{
                  show: nestedActiveId === 'sidebarAgent'
                }"
              >
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <nuxt-link
                      to="/real-estate-agent/list"
                      class="nav-link"
                      data-key="t-list-view"
                    >
                      {{ $t("t-list-view") }}
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/real-estate-agent/grid"
                      class="nav-link"
                      data-key="t-grid-view"
                    >
                      {{ $t("t-grid-view") }}
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/real-estate-agent/overview"
                      class="nav-link"
                      data-key="t-overview"
                    >
                      {{ $t("t-overview") }}
                    </nuxt-link>
                  </li>
                </ul>
              </BCollapse>
            </li>
            <li class="nav-item">
              <BLink
                class="nav-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                v-b-toggle.sidebarAgencies
                data-key="t-agencies"
                :class="{
                  active: nestedActiveId === 'sidebarAgencies'
                }"
              >
                {{ $t("t-agencies") }}
              </BLink>
              <BCollapse
                class="menu-dropdown"
                id="sidebarAgencies"
                :class="{
                  show: nestedActiveId === 'sidebarAgencies'
                }"
              >
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <nuxt-link
                      to="/real-estate-agencies/list"
                      class="nav-link"
                      data-key="t-list-view"
                    >
                      {{ $t("t-list-view") }}
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/real-estate-agencies/overview"
                      class="nav-link"
                      data-key="t-overview"
                    >
                      {{ $t("t-overview") }}
                    </nuxt-link>
                  </li>
                </ul>
              </BCollapse>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/real-estate/add-properties"
                class="nav-link"
                data-key="t-add-property"
                >{{ $t("t-add-property") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/real-estate/earnings"
                class="nav-link"
                data-key="t-earnings"
                >{{ $t("t-earnings") }}</nuxt-link
              >
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="menu-title">
        <i class="ri-more-fill"></i>
        <span data-key="t-pages">{{ $t("t-pages") }}</span>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarAuth
          :class="{
            active: activeId === 'sidebarAuth'
          }"
        >
          <i class="ph-user-circle"></i>
          <span data-key="t-authentication">{{ $t("t-authentication") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarAuth"
          :class="getVisibility('sidebarAuth')"
          :visible="activeId === 'sidebarAuth'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link to="/auth/signin" class="nav-link" data-key="t-signin">
                {{ $t("t-signin") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/auth/signup" class="nav-link" data-key="t-signup">
                {{ $t("t-signup") }}
              </nuxt-link>
            </li>

            <li class="nav-item">
              <nuxt-link
                to="/auth/pass-reset"
                class="nav-link"
                data-key="t-password-reset"
              >
                {{ $t("t-password-reset") }}
              </nuxt-link>
            </li>

            <li class="nav-item">
              <nuxt-link
                to="/auth/pass-change"
                class="nav-link"
                data-key="t-password-create"
              >
                {{ $t("t-password-create") }}
              </nuxt-link>
            </li>

            <li class="nav-item">
              <nuxt-link
                to="/auth/lockscreen"
                class="nav-link"
                data-key="t-lock-screen"
              >
                {{ $t("t-lock-screen") }}
              </nuxt-link>
            </li>

            <li class="nav-item">
              <nuxt-link to="/auth/logout" class="nav-link" data-key="t-logout">
                {{ $t("t-logout") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/auth/success-msg"
                class="nav-link"
                data-key="t-success-message"
              >
                {{ $t("t-success-message") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/auth/twostep"
                class="nav-link"
                data-key="t-two-step-verification"
              >
                {{ $t("t-two-step-verification") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <BLink
                class="nav-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                v-b-toggle.sidebarErrors
                data-key="t-errors"
                :class="{
                  active: nestedActiveId === 'sidebarErrors'
                }"
              >
                {{ $t("t-errors") }}
              </BLink>
              <BCollapse
                class="menu-dropdown"
                id="sidebarErrors"
                :class="{
                  show: nestedActiveId === 'sidebarErrors'
                }"
              >
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <nuxt-link
                      to="/auth/404"
                      class="nav-link"
                      data-key="t-404-error"
                    >
                      {{ $t("t-404-error") }}
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link to="/auth/500" class="nav-link" data-key="t-500">
                      {{ $t("t-500") }}
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link to="/auth/503" class="nav-link" data-key="t-503">
                      {{ $t("t-503") }}
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      to="/auth/offline"
                      class="nav-link"
                      data-key="t-offline-page"
                    >
                      {{ $t("t-offline-page") }}
                    </nuxt-link>
                  </li>
                </ul>
              </BCollapse>
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarPages
          :class="{
            active: activeId === 'sidebarPages'
          }"
        >
          <i class="ph-address-book"></i>
          <span data-key="t-pages"> {{ $t("t-pages") }} </span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarPages"
          :class="getVisibility('sidebarPages')"
          :visible="activeId === 'sidebarPages'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/pages/starter"
                class="nav-link"
                data-key="t-starter"
              >
                {{ $t("t-starter") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/pages/profile"
                class="nav-link"
                data-key="t-profile"
              >
                {{ $t("t-profile") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/pages/profile-settings"
                class="nav-link"
                data-key="t-profile-setting"
              >
                {{ $t("t-profile-setting") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/pages/contacts"
                class="nav-link"
                data-key="t-contacts"
              >
                {{ $t("t-contacts") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/pages/timeline"
                class="nav-link"
                data-key="t-timeline"
              >
                {{ $t("t-timeline") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/pages/faqs" class="nav-link" data-key="t-faqs">
                {{ $t("t-faqs") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/pages/pricing"
                class="nav-link"
                data-key="t-pricing"
              >
                {{ $t("t-pricing") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/pages/maintenance"
                class="nav-link"
                data-key="t-maintenance"
              >
                {{ $t("t-maintenance") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/pages/coming-soon"
                class="nav-link"
                data-key="t-coming-soon"
              >
                {{ $t("t-coming-soon") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/pages/privacy-policy"
                class="nav-link"
                data-key="t-privacy-policy"
              >
                {{ $t("t-privacy-policy") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/pages/term-conditions"
                class="nav-link"
                data-key="t-term-conditions"
              >
                {{ $t("t-term-conditions") }}
              </nuxt-link>
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="menu-title">
        <i class="ri-more-fill"></i>
        <span data-key="t-components">{{ $t("t-components") }}</span>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarUI
          :class="{
            active: activeId === 'sidebarUI'
          }"
        >
          <i class="ph-bandaids"></i>
          <span data-key="t-bootstrap-ui">{{ $t("t-bootstrap-ui") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown mega-dropdown-menu"
          id="sidebarUI"
          :class="getVisibility('sidebarUI')"
          :visible="activeId === 'sidebarUI'"
        >
          <BRow>
            <BCol lg="4">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/alerts"
                    class="nav-link"
                    data-key="t-alerts"
                    >{{ $t("t-alerts") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/badges"
                    class="nav-link"
                    data-key="t-badges"
                    >{{ $t("t-badges") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/buttons"
                    class="nav-link"
                    data-key="t-buttons"
                    >{{ $t("t-buttons") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/colors"
                    class="nav-link"
                    data-key="t-colors"
                    >{{ $t("t-colors") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/cards"
                    class="nav-link"
                    data-key="t-cards"
                    >{{ $t("t-cards") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/carousel"
                    class="nav-link"
                    data-key="t-carousel"
                    >{{ $t("t-carousel") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/dropdowns"
                    class="nav-link"
                    data-key="t-dropdowns"
                    >{{ $t("t-dropdowns") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link to="/ui/grid" class="nav-link" data-key="t-grid">{{
                    $t("t-grid")
                  }}</nuxt-link>
                </li>
              </ul>
            </BCol>
            <BCol lg="4">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/images"
                    class="nav-link"
                    data-key="t-images"
                    >{{ $t("t-images") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link to="/ui/tabs" class="nav-link" data-key="t-tabs">{{
                    $t("t-tabs")
                  }}</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/accordions"
                    class="nav-link"
                    data-key="t-accordion-collapse"
                    >{{ $t("t-accordion-collapse") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/modals"
                    class="nav-link"
                    data-key="t-modals"
                    >{{ $t("t-modals") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/offcanvas"
                    class="nav-link"
                    data-key="t-offcanvas"
                    >{{ $t("t-offcanvas") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/placeholders"
                    class="nav-link"
                    data-key="t-placeholders"
                    >{{ $t("t-placeholders") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/progress"
                    class="nav-link"
                    data-key="t-progress"
                    >{{ $t("t-progress") }}</nuxt-link
                  >
                </li>
              </ul>
            </BCol>
            <BCol lg="4">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/media"
                    class="nav-link"
                    data-key="t-media-object"
                    >{{ $t("t-media-object") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/embed-video"
                    class="nav-link"
                    data-key="t-embed-video"
                    >{{ $t("t-embed-video") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/typography"
                    class="nav-link"
                    data-key="t-typography"
                    >{{ $t("t-typography") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/lists"
                    class="nav-link"
                    data-key="t-lists"
                    >{{ $t("t-lists") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/links"
                    class="nav-link"
                    data-key="t-links"
                    >{{ $t("t-links") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/general"
                    class="nav-link"
                    data-key="t-general"
                    >{{ $t("t-general") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/utilities"
                    class="nav-link"
                    data-key="t-utilities"
                    >{{ $t("t-utilities") }}</nuxt-link
                  >
                </li>
              </ul>
            </BCol>
          </BRow>
        </BCollapse>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarAdvanceUI
          :class="{
            active: activeId === 'sidebarAdvanceUI'
          }"
        >
          <i class="ph-stack-simple"></i>
          <span data-key="t-advance-ui">{{ $t("t-advance-ui") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarAdvanceUI"
          :class="getVisibility('sidebarAdvanceUI')"
          :visible="activeId === 'sidebarAdvanceUI'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/advance-ui/sweetalerts"
                class="nav-link"
                data-key="t-sweet-alerts"
                >{{ $t("t-sweet-alerts") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/advance-ui/scrollbar"
                class="nav-link"
                data-key="t-scrollbar"
                >{{ $t("t-scrollbar") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/advance-ui/swiper"
                class="nav-link"
                data-key="t-swiper-slider"
                >{{ $t("t-swiper-slider") }}</nuxt-link
              >
            </li>
            <!-- <li class="nav-item">
                          <nuxt-link to="/advance-ui/ratings" class="nav-link" data-key="t-ratings">{{
                              $t("t-ratings") }}</nuxt-link>
                      </li> -->
            <li class="nav-item">
              <nuxt-link
                to="/advance-ui/highlight"
                class="nav-link"
                data-key="t-highlight"
                >{{ $t("t-highlight") }}</nuxt-link
              >
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.customUI
          :class="{
            active: activeId === 'customUI'
          }"
        >
          <i class="ph-wrench"></i>
          <span data-key="t-custom-ui">{{ $t("t-custom-ui") }}</span>
          <span class="badge badge-pill bg-danger" data-key="t-custom">{{
            $t("t-custom")
          }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="customUI"
          :class="getVisibility('customUI')"
          :visible="activeId === 'customUI'"
        >
          <BRow>
            <BCol lg="4">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/ribbons"
                    class="nav-link"
                    data-key="t-ribbons"
                    >{{ $t("t-ribbons") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/profile"
                    class="nav-link"
                    data-key="t-profile"
                    >{{ $t("t-profile") }}</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/ui/counter"
                    class="nav-link"
                    data-key="t-counter"
                    >{{ $t("t-counter") }}</nuxt-link
                  >
                </li>
              </ul>
            </BCol>
          </BRow>
        </BCollapse>
      </li>

      <li class="nav-item">
        <nuxt-link class="nav-link menu-link" to="/widgets">
          <i class="ph-paint-brush-broad"></i>
          <span data-key="t-widgets">{{ $t("t-widgets") }}</span>
        </nuxt-link>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarForms
          :class="{
            active: activeId === 'sidebarForms'
          }"
        >
          <i class="ri-file-list-3-line"></i>
          <span data-key="t-forms">{{ $t("t-forms") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarForms"
          :class="getVisibility('sidebarForms')"
          :visible="activeId === 'sidebarForms'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/forms/elements"
                class="nav-link"
                data-key="t-basic-elements"
                >{{ $t("t-basic-elements") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/forms/select"
                class="nav-link"
                data-key="t-form-select"
                >{{ $t("t-form-select") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/forms/checkboxs-radios"
                class="nav-link"
                data-key="t-checkboxes-radios"
                >{{ $t("t-checkboxes-radios") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/forms/pickers"
                class="nav-link"
                data-key="t-pickers"
                >{{ $t("t-pickers") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/forms/masks"
                class="nav-link"
                data-key="t-input-masks"
                >{{ $t("t-input-masks") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/forms/advanced"
                class="nav-link"
                data-key="t-advanced"
                >{{ $t("t-advanced") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/forms/range-sliders"
                class="nav-link"
                data-key="t-range-slider"
                >{{ $t("t-range-slider") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/forms/validation"
                class="nav-link"
                data-key="t-validation"
                >{{ $t("t-validation") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/forms/wizard"
                class="nav-link"
                data-key="t-wizard"
                >{{ $t("t-wizard") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/forms/editors"
                class="nav-link"
                data-key="t-editors"
                >{{ $t("t-editors") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/forms/file-uploads"
                class="nav-link"
                data-key="t-file-uploads"
                >{{ $t("t-file-uploads") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/forms/layouts"
                class="nav-link"
                data-key="t-form-layouts"
                >{{ $t("t-form-layouts") }}</nuxt-link
              >
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarTables
          :class="{
            active: activeId === 'sidebarTables'
          }"
        >
          <i class="ph-table"></i>
          <span data-key="t-tables">{{ $t("t-tables") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarTables"
          :class="getVisibility('sidebarTables')"
          :visible="activeId === 'sidebarTables'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/tables/basic"
                class="nav-link"
                data-key="t-basic-tables"
                >{{ $t("t-basic-tables") }}</nuxt-link
              >
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarCharts
          :class="{
            active: activeId === 'sidebarCharts'
          }"
        >
          <i class="ph-chart-pie-slice"></i>
          <span data-key="t-apexcharts">{{ $t("t-apexcharts") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarCharts"
          :class="getVisibility('sidebarCharts')"
          :visible="activeId === 'sidebarCharts'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-line"
                class="nav-link"
                data-key="t-line"
                >{{ $t("t-line") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-area"
                class="nav-link"
                data-key="t-area"
                >{{ $t("t-area") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-column"
                class="nav-link"
                data-key="t-column"
                >{{ $t("t-column") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-bar"
                class="nav-link"
                data-key="t-bar"
                >{{ $t("t-bar") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-mixed"
                class="nav-link"
                data-key="t-mixed"
                >{{ $t("t-mixed") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-range-area"
                class="nav-link"
                data-key="t-range-area"
                >{{ $t("t-range-area") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-funnel"
                class="nav-link"
                data-key="t-funnel"
                >{{ $t("t-funnel") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-candlestick"
                class="nav-link"
                data-key="t-candlstick"
                >{{ $t("t-candlstick") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-boxplot"
                class="nav-link"
                data-key="t-boxplot"
                >{{ $t("t-boxplot") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-bubble"
                class="nav-link"
                data-key="t-bubble"
                >{{ $t("t-bubble") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-scatter"
                class="nav-link"
                data-key="t-scatter"
                >{{ $t("t-scatter") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-heatmap"
                class="nav-link"
                data-key="t-heatmap"
                >{{ $t("t-heatmap") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-treemap"
                class="nav-link"
                data-key="t-treemap"
                >{{ $t("t-treemap") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-pie"
                class="nav-link"
                data-key="t-pie"
                >{{ $t("t-pie") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-radialbar"
                class="nav-link"
                data-key="t-radialbar"
                >{{ $t("t-radialbar") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-radar"
                class="nav-link"
                data-key="t-radar"
                >{{ $t("t-radar") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/charts/apex-polar"
                class="nav-link"
                data-key="t-polar-area"
                >{{ $t("t-polar-area") }}</nuxt-link
              >
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarIcons
          :class="{
            active: activeId === 'sidebarIcons'
          }"
        >
          <i class="ph-traffic-cone"></i>
          <span data-key="t-icons">{{ $t("t-icons") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarIcons"
          :class="getVisibility('sidebarIcons')"
          :visible="activeId === 'sidebarIcons'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/icons/remix"
                class="nav-link"
                data-key="t-remix"
                >{{ $t("t-remix") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/icons/boxicons"
                class="nav-link"
                data-key="t-boxicons"
                >{{ $t("t-boxicons") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/icons/materialdesign"
                class="nav-link"
                data-key="t-material-design"
                >{{ $t("t-material-design") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/icons/bootstrap"
                class="nav-link"
                data-key="t-bootstrap"
                >{{ $t("t-bootstrap") }}</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                to="/icons/phosphor"
                class="nav-link"
                data-key="t-phosphor"
                >{{ $t("t-phosphor") }}</nuxt-link
              >
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link collapsed"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarMaps
          :class="{
            active: activeId === 'sidebarMaps'
          }"
        >
          <i class="ph-map-trifold"></i>
          <span data-key="t-maps">{{ $t("t-maps") }}</span>
        </BLink>
        <BCollapse
          class="menu-dropdown"
          id="sidebarMaps"
          :class="getVisibility('sidebarMaps')"
          :visible="activeId === 'sidebarMaps'"
        >
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link
                to="/maps/google"
                class="nav-link"
                data-key="t-google"
                >{{ $t("t-google") }}</nuxt-link
              >
            </li>
          </ul>
        </BCollapse>
      </li>

      <li class="nav-item">
        <BLink
          class="nav-link menu-link"
          data-bs-toggle="collapse"
          aria-expanded="false"
          v-b-toggle.sidebarMultilevel
        >
          <i class="bi bi-share"></i>
          <span data-key="t-multi-level">{{ $t("t-multi-level") }}</span>
        </BLink>
        <BCollapse class="menu-dropdown" id="sidebarMultilevel">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <nuxt-link to="#" class="nav-link" data-key="t-level-1.1">
                {{ $t("t-level-1.1") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <BLink
                class="nav-link"
                data-bs-toggle="collapse"
                aria-expanded="false"
                v-b-toggle.sidebarAccount
                data-key="t-level-1.2"
              >
                {{ $t("t-level-1.2") }}
              </BLink>
              <BCollapse class="menu-dropdown" id="sidebarAccount">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <nuxt-link to="#" class="nav-link" data-key="t-level-2.1">
                      {{ $t("t-level-2.1") }}
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <BLink
                      class="nav-link"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      v-b-toggle.sidebarCrm
                      data-key="t-level-2.2"
                    >
                      {{ $t("t-level-2.2") }}
                    </BLink>
                    <BCollapse class="menu-dropdown" id="sidebarCrm">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <nuxt-link
                            to="#"
                            class="nav-link"
                            data-key="t-level-3.1"
                          >
                            {{ $t("t-level-3.1") }}
                          </nuxt-link>
                        </li>
                        <li class="nav-item">
                          <nuxt-link
                            to="#"
                            class="nav-link"
                            data-key="t-level-3.2"
                          >
                            {{ $t("t-level-3.2") }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </BCollapse>
                  </li>
                </ul>
              </BCollapse>
            </li>
          </ul>
        </BCollapse>
      </li>
    </ul>
  </BContainer>
</template>

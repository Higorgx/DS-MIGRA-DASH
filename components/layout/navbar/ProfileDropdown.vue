<script>
export default {
  data() {
    return {};
  },
  computed: {
    userInfo() {
      const user = JSON.parse(localStorage.getItem("user"));
      const { first_name = "Admin", designation } = user;
      return {
        name: first_name,
        designation: "Founder"
      };
    }
  }
};
</script>
<template>
  <BDropdown
    class="dropdown header-item topbar-user"
    no-caret
    auto-close="outside"
    variant="ghost-dark"
  >
    <template #button-content>
      <span class="d-flex align-items-center" id="page-header-user-dropdown">
        <img
          class="rounded-circle header-profile-user"
          src="@/assets/images/users/avatar-1.jpg"
          alt="Header Avatar"
        />
        <span class="text-start ms-xl-2">
          <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text"
            >{{ userInfo.name }}
          </span>
          <span class="d-none d-xl-block ms-1 fs-sm user-name-sub-text">
            {{ userInfo.designation }}</span
          >
        </span>
      </span>
    </template>
    <div class="dropdown-menu-end">
      <h6 class="dropdown-header">Welcome Richard!</h6>
      <nuxt-link class="dropdown-item" to="/pages/profile"
        ><i class="mdi mdi-account-circle text-muted fs-lg align-middle me-1" />
        <span class="align-middle">Profile</span></nuxt-link
      >
      <nuxt-link class="dropdown-item" to="/chat"
        ><i
          class="mdi mdi-message-text-outline text-muted fs-lg align-middle me-1"
        />
        <span class="align-middle">Messages</span></nuxt-link
      >
      <nuxt-link class="dropdown-item" to="/tickets/overview"
        ><i
          class="mdi mdi-calendar-check-outline text-muted fs-lg align-middle me-1"
        />
        <span class="align-middle">Taskboard</span></nuxt-link
      >
      <nuxt-link class="dropdown-item" to="/pages/faqs"
        ><i class="mdi mdi-lifebuoy text-muted fs-lg align-middle me-1" />
        <span class="align-middle">Help</span></nuxt-link
      >
      <div class="dropdown-divider"></div>
      <nuxt-link class="dropdown-item" to="/pages/profile"
        ><i class="mdi mdi-wallet text-muted fs-lg align-middle me-1" />
        <span class="align-middle">Balance : <b>$8451.36</b></span></nuxt-link
      >
      <nuxt-link class="dropdown-item" to="/pages/profile-settings"
        ><span class="badge bg-success-subtle text-success mt-1 float-end"
          >New</span
        ><i class="mdi mdi-cog-outline text-muted fs-lg align-middle me-1" />
        <span class="align-middle">Settings</span></nuxt-link
      >
      <nuxt-link class="dropdown-item" to="/auth/lockscreen"
        ><i class="mdi mdi-lock text-muted fs-lg align-middle me-1" />
        <span class="align-middle">Lock screen</span></nuxt-link
      >
      <nuxt-link class="dropdown-item" to="/logout"
        ><i class="mdi mdi-logout text-muted fs-lg align-middle me-1" />
        <span class="align-middle" data-key="t-logout">Logout</span></nuxt-link
      >
    </div>
  </BDropdown>
</template>

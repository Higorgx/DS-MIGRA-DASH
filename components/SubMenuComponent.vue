<script>
export default {
  name: "SubMenuComponent",
  props: {
    subItem: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <div
    v-if="subItem.subItems"
    :class="
      subItem.id === 'bootstrapui'
        ? 'collapse menu-dropdown mega-dropdown-menu dropdown-custom-right'
        : 'collapse menu-dropdown'
    "
    :id="subItem.link"
  >
    <BRow v-if="subItem.id === 'bootstrapui'">
      <BCol lg="4" v-for="(bootItem, index) in subItem.subItems" :key="index">
        <ul class="nav nav-sm flex-column">
          <li class="nav-item">
            <nuxt-link
              :to="bootItem.link"
              class="nav-link"
              :data-key="bootItem.label"
            >
              {{ $t(bootItem.label) }}
            </nuxt-link>
          </li>
        </ul>
      </BCol>
    </BRow>
    <ul v-else class="nav nav-sm flex-column">
      <li
        class="nav-item"
        v-for="(childItem, index) in subItem.subItems"
        :key="index"
      >
        <nuxt-link
          class="nav-link"
          :to="childItem.link"
          v-if="!childItem.subItems"
        >
          <span>{{ $t(childItem.label) }}</span>
        </nuxt-link>
        <BLink
          v-else
          :href="'#' + childItem.link"
          class="nav-link collapsed"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          :aria-controls="childItem.link"
          :data-key="childItem.label"
          >{{ $t(childItem.label) }}</BLink
        >
        <SubMenuComponent v-if="childItem.subItems" :subItem="childItem" />
      </li>
    </ul>
  </div>
</template>

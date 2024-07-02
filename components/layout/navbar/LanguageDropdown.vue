<script>
import {
  us,
  spain,
  germany,
  italy,
  russia,
  china,
  french,
  ae
} from "~/assets/images/flags/utils.js";
import i18n from "~/i18n";

export default {
  data() {
    return {
      lan: i18n.locale,
      flag: null,
      text: null,
      runtimeConfig: useRuntimeConfig(),
      languages: [
        {
          flag: us,
          language: "en",
          title: "English"
        },
        {
          flag: spain,
          language: "sp",
          title: "Española"
        },
        {
          flag: germany,
          language: "gr",
          title: "Deutsche"
        },
        {
          flag: italy,
          language: "it",
          title: "italiana"
        },
        {
          flag: russia,
          language: "ru",
          title: "русский"
        },
        {
          flag: china,
          language: "ch",
          title: "中國人"
        },
        {
          flag: french,
          language: "fr",
          title: "français"
        },
        {
          flag: ae,
          language: "ar",
          title: "عربي"
        }
      ]
    };
  },
  mounted() {
    if (this.runtimeConfig.public.VUE_APP_I18N_LOCALE) {
      this.flag = this.runtimeConfig.public.VUE_APP_I18N_LOCALE;
      this.languages.forEach((item) => {
        if (item.language == this.flag) {
          if (document.getElementById("header-lang-img")) {
            document
              .getElementById("header-lang-img")
              .setAttribute("src", item.flag);
          }
        }
      });
    }
  },
  methods: {
    setLanguage(locale, country, flag) {
      this.lan = locale;
      this.text = country;
      this.flag = flag;
      if (document.getElementById("header-lang-img")) {
        document.getElementById("header-lang-img").setAttribute("src", flag);
      }
      i18n.global.locale = locale;
    }
  }
};
</script>
<template>
  <BDropdown
    variant="link"
    no-caret
    class="dropdown topbar-head-dropdown header-item"
    end
  >
    <template #button-content>
      <img
        id="header-lang-img"
        src="@/assets/images/flags/us.svg"
        alt="Header Language"
        height="20"
        class="rounded"
      />
    </template>
    <BDropdownItem
      v-for="(entry, i) in languages"
      :key="`Lang${i}`"
      :value="entry"
      :class="{ active: lan === entry.language }"
      class="notify-item language"
      data-lang="en"
      title="English"
      end
      @click="setLanguage(entry.language, entry.title, entry.flag)"
    >
      <img
        :src="entry.flag"
        alt="user-image"
        class="me-2 rounded"
        height="18"
      />
      <span class="align-middle">{{ entry.title }}</span>
    </BDropdownItem>
  </BDropdown>
</template>

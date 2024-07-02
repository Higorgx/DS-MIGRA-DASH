<script>
import appConfig from "~/app.config";

import { bootstrapIcons } from "@/common/data";

export default {
  page: {
    title: "Bootstrap",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      icons: bootstrapIcons,
      title: "Bootstrap",
      items: [
        {
          text: "Icons",
          href: "/"
        },
        {
          text: "Bootstrap",
          active: true
        }
      ]
    };
  },
  mounted() {
    const keys = Object.keys(this.icons);
    this.loadIconList(keys);
  },
  methods: {
    loadIconList(iconKeys) {
      let allIcons = "";
      for (const icon of iconKeys) {
        allIcons += `<div class="col-xl-3 col-lg-4 col-sm-6"> <i class="bi bi-${icon}"></i> ${icon} </div>`;
      }
      document.getElementById("iconList").innerHTML = allIcons;
    }
  },
  components: {}
};
</script>

<template>
  <PageHeader :title="title" :items="items" />
  <BRow>
    <BCol cols="12">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle>Examples</BCardTitle>
          <p class="text-muted mb-0">
            Use <code>&lt;i class="bi bi-**">&lt;/i></code> class.
          </p>
        </BCardHeader>
        <BCardBody class="pt-0">
          <BRow class="icon-demo-content" id="iconList"></BRow>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

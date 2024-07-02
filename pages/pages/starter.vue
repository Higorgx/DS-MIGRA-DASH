<script>

import appConfig from "~/app.config";

export default {
  page: {
    title: "Starter",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Starter",
      items: [
        {
          text: "Pages",
          href: "/",
        },
        {
          text: "Starter",
          active: true,
        },
      ],
    };
  },
  components: {
  },
};
</script>

<template>


    <PageHeader :title="title" :items="items" />
    
  

  
</template>
<script>
import appConfig from "~/app.config";

import { simpleBubbleChart, bubble3DChart, getChartColorsArray } from "./data";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Bubble Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      simpleBubbleChart: simpleBubbleChart,
      bubble3DChart: bubble3DChart,
      title: "Bubble Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Bubble Charts",
          active: true
        }
      ]
    };
  },
  computed: {
    layoutTheme() {
      return useLayoutStore().layoutTheme;
    }
  },
  mounted() {
    this.handleUpdate();
  },
  watch: {
    layoutTheme: {
      handler() {
        this.handleUpdate();
      },
      deep: true
    }
  },
  methods: {
    handleUpdate() {
      this.simpleBubbleChart = {
        ...this.simpleBubbleChart,
        chartOptions: {
          ...this.simpleBubbleChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-info", "--tb-warning", "--tb-success"]'
          )
        }
      };
      this.bubble3DChart = {
        ...this.bubble3DChart,
        chartOptions: {
          ...this.bubble3DChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger"]'
          )
        }
      };
    }
  }
};
</script>

<template>
  <PageHeader :title="title" :items="items" />
  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Simple Bubble Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="simpleBubbleChart.series"
            :options="simpleBubbleChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">3D Bubble Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="bubble3DChart.series"
            :options="bubble3DChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

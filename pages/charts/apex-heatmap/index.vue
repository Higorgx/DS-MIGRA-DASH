<script>
import appConfig from "~/app.config";

import {
  multipleSeriesHeatmapChart,
  basicHeatmapChat,
  colorHeatmapChart,
  shadesHeatmapChart,
  getChartColorsArray
} from "./data";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Heatmap Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      multipleSeriesHeatmapChart,
      basicHeatmapChat,
      colorHeatmapChart,
      shadesHeatmapChart,
      title: "Heatmap Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Heatmap Charts",
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
      this.basicHeatmapChat = {
        ...this.basicHeatmapChat,
        chartOptions: {
          ...this.basicHeatmapChat.chartOptions,
          colors: getChartColorsArray('["--tb-success"]')
        }
      };
      this.multipleSeriesHeatmapChart = {
        ...this.multipleSeriesHeatmapChart,
        chartOptions: {
          ...this.multipleSeriesHeatmapChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-secondary", "--tb-success", "--tb-info", "--tb-warning", "--tb-danger", "--tb-dark", "--tb-primary"]'
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
    <BCol lg="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Basic Heatmap Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="450"
            dir="ltr"
            :series="basicHeatmapChat.series"
            :options="basicHeatmapChat.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol lg="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Heatmap - Multiple Series</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="450"
            dir="ltr"
            :series="multipleSeriesHeatmapChart.series"
            :options="multipleSeriesHeatmapChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol lg="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Heatmap Color Range</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="colorHeatmapChart.series"
            :options="colorHeatmapChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol lg="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Heatmap - Range Without Shades</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="shadesHeatmapChart.series"
            :options="shadesHeatmapChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

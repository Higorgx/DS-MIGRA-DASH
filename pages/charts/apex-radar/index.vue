<script>
import appConfig from "~/app.config";

import {
  basicRadarChart,
  radarMultiseriesChart,
  polygonRadarChart,
  getChartColorsArray
} from "./data";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Radar Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      basicRadarChart: basicRadarChart,
      radarMultiseriesChart: radarMultiseriesChart,
      polygonRadarChart: polygonRadarChart,
      title: "Radar Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Radar Charts",
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
      this.basicRadarChart = {
        ...this.basicRadarChart,
        chartOptions: {
          ...this.basicRadarChart.chartOptions,
          colors: getChartColorsArray('["--tb-success"]')
        }
      };
      this.radarMultiseriesChart = {
        ...this.radarMultiseriesChart,
        chartOptions: {
          ...this.radarMultiseriesChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-danger", "--tb-success", "--tb-primary"]'
          )
        }
      };
      this.polygonRadarChart = {
        ...this.polygonRadarChart,
        chartOptions: {
          ...this.polygonRadarChart.chartOptions,
          colors: getChartColorsArray('["--tb-info"]')
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
          <BCardTitle class="mb-0">Basic Radar Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="basicRadarChart.series"
            :options="basicRadarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Radar Chart - Multiple series</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="radarMultiseriesChart.series"
            :options="radarMultiseriesChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Radar Chart - Polygon Fill</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="polygonRadarChart.series"
            :options="polygonRadarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

<script>
import appConfig from "~/app.config";

import {
  basicScatterChart,
  dateTimeScatterChart,
  scatterImagesChart,
  getChartColorsArray
} from "./data";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Scatter Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      basicScatterChart,
      dateTimeScatterChart,
      scatterImagesChart,
      title: "Scatter Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Scatter Charts",
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
      this.basicScatterChart = {
        ...this.basicScatterChart,
        chartOptions: {
          ...this.basicScatterChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning"]'
          )
        }
      };
      this.dateTimeScatterChart = {
        ...this.dateTimeScatterChart,
        chartOptions: {
          ...this.dateTimeScatterChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-warning", "--tb-info"]'
          )
        }
      };
      this.scatterImagesChart = {
        ...this.scatterImagesChart,
        chartOptions: {
          ...this.scatterImagesChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-danger"]')
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
          <BCardTitle class="mb-0">Basic Scatter Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="basicScatterChart.series"
            :options="basicScatterChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Scatter - Datetime Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="dateTimeScatterChart.series"
            :options="dateTimeScatterChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Scatter Images Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="scatterImagesChart.series"
            :options="scatterImagesChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

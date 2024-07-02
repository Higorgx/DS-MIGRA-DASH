<script>
import appConfig from "~/app.config";

import {
  basicPolarareaChart,
  polarAreaMonochromeChart,
  getChartColorsArray
} from "./data";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Polararea Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      basicPolarareaChart: basicPolarareaChart,
      polarAreaMonochromeChart: polarAreaMonochromeChart,
      title: "Polararea Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Polararea Charts",
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
      this.basicPolarareaChart = {
        ...this.basicPolarareaChart,
        chartOptions: {
          ...this.basicPolarareaChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning","--tb-danger", "--tb-info", "--tb-success", "--tb-primary", "--tb-dark", "--tb-secondary"]'
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
          <BCardTitle class="mb-0">Basic Polararea Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="320"
            dir="ltr"
            :series="basicPolarareaChart.series"
            :options="basicPolarareaChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">PolarArea Monochrome</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="320"
            dir="ltr"
            :series="polarAreaMonochromeChart.series"
            :options="polarAreaMonochromeChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

<script>
import appConfig from "~/app.config";
import { useLayoutStore } from "~/stores/layout";

import {
  treemapChart,
  multiSeriesChart,
  distributedChart,
  colorRangeChart,
  getChartColorsArray
} from "./data";

export default {
  page: {
    title: "Treemap Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      treemapChart,
      multiSeriesChart,
      distributedChart,
      colorRangeChart,

      title: "Treemap Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Treemap Charts",
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
      this.treemapChart = {
        ...this.treemapChart,
        chartOptions: {
          ...this.treemapChart.chartOptions,
          colors: getChartColorsArray('["--tb-success"]')
        }
      };
      this.multiSeriesChart = {
        ...this.multiSeriesChart,
        chartOptions: {
          ...this.multiSeriesChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary","--tb-success"]')
        }
      };
      this.distributedChart = {
        ...this.distributedChart,
        chartOptions: {
          ...this.distributedChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-secondary", "--tb-success", "--tb-info","--tb-warning", "--tb-danger"]'
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
          <BCardTitle class="mb-0">Basic Treemap Charts</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="treemapChart.series"
            :options="treemapChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Multi-Dimensional Treemap Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="multiSeriesChart.series"
            :options="multiSeriesChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">
            Distributed Treemap Chart (Different Color for each Cell)
          </BCardTitle>
        </BCardHeader>

        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="distributedChart.series"
            :options="distributedChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Treemap Chart with Color Ranges</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="colorRangeChart.series"
            :options="colorRangeChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

<script>
import appConfig from "~/app.config";

import {
  mixedLineChart,
  yAxisChart,
  lineAreaChart,
  lineColumnAreaChart,
  getChartColorsArray
} from "./data";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Mixed Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      mixedLineChart: mixedLineChart,
      yAxisChart: yAxisChart,
      lineAreaChart: lineAreaChart,
      lineColumnAreaChart: lineColumnAreaChart,
      title: "Mixed Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Mixed Charts",
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
      this.mixedLineChart = {
        ...this.mixedLineChart,
        chartOptions: {
          ...this.mixedLineChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-success"]')
        }
      };
      this.yAxisChart = {
        ...this.yAxisChart,
        chartOptions: {
          ...this.yAxisChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-info", "--tb-success"]'
          )
        }
      };
      this.lineAreaChart = {
        ...this.lineAreaChart,
        chartOptions: {
          ...this.lineAreaChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-success"]')
        }
      };
      this.lineColumnAreaChart = {
        ...this.lineColumnAreaChart,
        chartOptions: {
          ...this.lineColumnAreaChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-danger"]'
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
          <BCardTitle class="mb-0">Line & Column Charts</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="mixedLineChart.series"
            :options="mixedLineChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Multiple Y-Axis Charts</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="yAxisChart.series"
            :options="yAxisChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Line & Area Charts</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="lineAreaChart.series"
            :options="lineAreaChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Line, Column & Area Charts</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="lineColumnAreaChart.series"
            :options="lineColumnAreaChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

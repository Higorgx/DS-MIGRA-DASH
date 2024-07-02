<script>
import appConfig from "~/app.config";

import {
  boxChart,
  boxplotScatterChart,
  horizontalBoxplotChart,
  getChartColorsArray
} from "./data";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Boxplot Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      boxChart: boxChart,
      boxplotScatterChart: boxplotScatterChart,
      horizontalBoxplotChart: horizontalBoxplotChart,
      title: "Boxplot Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Boxplot Charts",
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
      this.boxplotScatterChart = {
        ...this.boxplotScatterChart,
        chartOptions: {
          ...this.boxplotScatterChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-danger", "--tb-info", "--tb-danger", "--tb-primary"]'
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
          <BCardTitle class="mb-0">Basic Box Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="boxChart.series"
            :options="boxChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Boxplot with Scatter Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="boxplotScatterChart.series"
            :options="boxplotScatterChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Horizontal BoxPlot</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="horizontalBoxplotChart.series"
            :options="horizontalBoxplotChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

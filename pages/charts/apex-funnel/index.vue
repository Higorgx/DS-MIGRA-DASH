<script>
import appConfig from "~/app.config";

import { funnelChart, pyramidChart, getChartColorsArray } from "./data";
import { useLayoutStore } from "~/stores/layout";

/**
 * Mixed chart component
 */
export default {
  page: {
    title: "Funnel Charts",
    meta: [
      {
        name: "description",
        content: appConfig.description
      }
    ]
  },
  data() {
    return {
      funnelChart: funnelChart,
      pyramidChart: pyramidChart,
      title: "Funnel Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Funnel Charts",
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
      this.funnelChart = {
        ...this.funnelChart,
        chartOptions: {
          ...this.funnelChart.chartOptions,
          colors: getChartColorsArray('["--tb-success"]')
        }
      };
      this.pyramidChart = {
        ...this.pyramidChart,
        chartOptions: {
          ...this.pyramidChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-info", "--tb-danger", "--tb-primary", "--tb-secondary", "--tb-success", "--tb-dark", "--tb-warning"]'
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
          <BCardTitle class="mb-0">Funnel Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="funnelChart.series"
            :options="funnelChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>

    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Pyramid</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <div>
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="pyramidChart.series"
              :options="pyramidChart.chartOptions"
            />
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

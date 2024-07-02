<script>
import appConfig from "~/app.config";

import { basicRangeAreaChart, comboChart, getChartColorsArray } from "./data";
import { useLayoutStore } from "~/stores/layout";

/**
 * Mixed chart component
 */
export default {
  page: {
    title: "Range Area Charts",
    meta: [
      {
        name: "description",
        content: appConfig.description
      }
    ]
  },
  data() {
    return {
      basicRangeAreaChart: basicRangeAreaChart,
      comboChart: comboChart,
      title: "Range Area Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Range Area Charts",
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
      this.basicRangeAreaChart = {
        ...this.basicRangeAreaChart,
        chartOptions: {
          ...this.basicRangeAreaChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary"]')
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
          <BCardTitle class="mb-0">Basic Range Area Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <!-- <div id="basic_range_area" data-colors='["--vz-primary"]' class="apex-charts" dir="ltr"> -->
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="basicRangeAreaChart.series"
            :options="basicRangeAreaChart.chartOptions"
          />
          <!-- </div> -->
        </BCardBody>
      </BCard>
    </BCol>

    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Combo</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <div>
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="comboChart.series"
              :options="comboChart.chartOptions"
            />
            <div
              id="combo_range_area"
              data-colors='["--vz-info", "--vz-danger"]'
              class="apex-charts"
              dir="ltr"
            ></div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

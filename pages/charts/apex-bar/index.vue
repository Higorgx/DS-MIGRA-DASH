<script>
import appConfig from "~/app.config";

import {
  basicBarChart,
  customDatalabelsChart,
  stackedBarChart,
  stackedBar100Chart,
  barNegativeChart,
  barMarkersChart,
  reversedBarChart,
  patternedBarChart,
  groupedBarChart,
  barImagesChart,
  getChartColorsArray
} from "./data";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Bar Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      title: "Bar Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Bar Charts",
          active: true
        }
      ],
      basicBarChart,
      customDatalabelsChart,
      stackedBarChart,
      stackedBar100Chart,
      barNegativeChart,
      barMarkersChart,
      reversedBarChart,
      patternedBarChart,
      groupedBarChart,
      barImagesChart
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
      this.basicBarChart = {
        ...this.basicBarChart,
        chartOptions: {
          ...this.basicBarChart.chartOptions,
          colors: getChartColorsArray('["--tb-success"]')
        }
      };
      this.customDatalabelsChart = {
        ...this.customDatalabelsChart,
        chartOptions: {
          ...this.customDatalabelsChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-secondary", "--tb-success", "--tb-info", "--tb-warning", "--tb-danger", "--tb-dark", "--tb-primary", "--tb-success", "--tb-secondary"]'
          )
        }
      };
      this.stackedBarChart = {
        ...this.stackedBarChart,
        chartOptions: {
          ...this.stackedBarChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]'
          )
        }
      };
      this.stackedBar100Chart = {
        ...this.stackedBar100Chart,
        chartOptions: {
          ...this.stackedBar100Chart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]'
          )
        }
      };
      this.barNegativeChart = {
        ...this.barNegativeChart,
        chartOptions: {
          ...this.barNegativeChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-success"]')
        }
      };
      this.barMarkersChart = {
        ...this.barMarkersChart,
        chartOptions: {
          ...this.barMarkersChart.chartOptions,
          colors: getChartColorsArray('["--tb-success", "--tb-primary"]')
        }
      };
      this.reversedBarChart = {
        ...this.reversedBarChart,
        chartOptions: {
          ...this.reversedBarChart.chartOptions,
          colors: getChartColorsArray('["--tb-info"]')
        }
      };
      this.patternedBarChart = {
        ...this.patternedBarChart,
        chartOptions: {
          ...this.patternedBarChart.chartOptions
        },
        colors: getChartColorsArray(
          '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger"]'
        )
      };
      this.groupedBarChart = {
        ...this.groupedBarChart,
        chartOptions: {
          ...this.groupedBarChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-success"]')
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
          <BCardTitle class="mb-0">Basic Bar Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="basicBarChart.series"
            :options="basicBarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Custom DataLabels Bar</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="customDatalabelsChart.series"
            :options="customDatalabelsChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Stacked Bar Charts</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="stackedBarChart.series"
            :options="stackedBarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Stacked Bars 100</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="stackedBar100Chart.series"
            :options="stackedBar100Chart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Bar with Negative Values</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="barNegativeChart.series"
            :options="barNegativeChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Bar with Marker</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="barMarkersChart.series"
            :options="barMarkersChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Reversed Bar Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="reversedBarChart.series"
            :options="reversedBarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Patterned Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="patternedBarChart.series"
            :options="patternedBarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Grouped Bar Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="410"
            dir="ltr"
            :series="groupedBarChart.series"
            :options="groupedBarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Bar with Images</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="410"
            dir="ltr"
            :series="barImagesChart.series"
            :options="barImagesChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

<script>
import appConfig from "~/app.config";

import {
  basicLineChart,
  zoomableChart,
  lineDatalabelChart,
  lineAnnotation,
  syncingAreaChart,
  brushLineChart,
  brushAreaChart,
  steplineChart,
  gradientLineChart,
  realtimeLineChart,
  dashedLineChart,
  missingDataChart,
  syncingCharts1,
  syncingCharts2,
  syncingCharts3,
  getChartColorsArray
} from "./data";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Line Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      basicLineChart,
      zoomableChart,
      lineDatalabelChart,
      lineAnnotation,
      syncingAreaChart,
      brushLineChart,
      brushAreaChart,
      steplineChart,
      gradientLineChart,
      realtimeLineChart,
      dashedLineChart,
      missingDataChart,
      syncingCharts1,
      syncingCharts2,
      syncingCharts3,
      title: "Line Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Line Charts",
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
      this.basicLineChart = {
        ...this.basicLineChart,
        chartOptions: {
          ...this.basicLineChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary"]')
        }
      };
      this.zoomableChart = {
        ...this.zoomableChart,
        chartOptions: {
          ...this.zoomableChart.chartOptions,
          colors: getChartColorsArray('["--tb-secondary"]')
        }
      };
      this.lineDatalabelChart = {
        ...this.lineDatalabelChart,
        chartOptions: {
          ...this.lineDatalabelChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-success"]')
        }
      };
      this.dashedLineChart = {
        ...this.dashedLineChart,
        chartOptions: {
          ...this.dashedLineChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-danger", "--tb-success"]'
          )
        }
      };
      this.lineAnnotation = {
        ...this.lineAnnotation,
        chartOptions: {
          ...this.lineAnnotation.chartOptions,
          colors: getChartColorsArray('["--tb-primary"]')
        }
      };
      this.brushLineChart = {
        ...this.brushLineChart,
        chartOptions: {
          ...this.brushLineChart.chartOptions,
          colors: getChartColorsArray('["--tb-danger"]')
        }
      };
      this.brushAreaChart = {
        ...this.brushAreaChart,
        chartOptions: {
          ...this.brushAreaChart.chartOptions,
          colors: getChartColorsArray('["--tb-info"]')
        }
      };
      this.steplineChart = {
        ...this.steplineChart,
        chartOptions: {
          ...this.steplineChart.chartOptions,
          colors: getChartColorsArray('["--tb-success"]')
        }
      };
      this.gradientLineChart = {
        ...this.gradientLineChart,
        chartOptions: {
          ...this.gradientLineChart.chartOptions,
          colors: getChartColorsArray('["--tb-success"]')
        }
      };
      this.missingDataChart = {
        ...this.missingDataChart,
        chartOptions: {
          ...this.missingDataChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-danger", "--tb-success"]'
          )
        }
      };
      this.syncingCharts1 = {
        ...this.syncingCharts1,
        chartOptions: {
          ...this.syncingCharts1.chartOptions,
          colors: getChartColorsArray('["--tb-primary"]')
        }
      };
      this.syncingCharts2 = {
        ...this.syncingCharts2,
        chartOptions: {
          ...this.syncingCharts2.chartOptions,
          colors: getChartColorsArray('["--tb-warning"]')
        }
      };
      this.syncingCharts3 = {
        ...this.syncingCharts3,
        chartOptions: {
          ...this.syncingCharts3.chartOptions,
          colors: getChartColorsArray('["--tb-success"]')
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
          <BCardTitle class="mb-0">Basic Line Chart</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="basicLineChart.series"
            :options="basicLineChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Zoomable Timeseries</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="zoomableChart.series"
            :options="zoomableChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Line with Data Labels</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <apexchart
            class="apex-charts"
            height="380"
            dir="ltr"
            :series="lineDatalabelChart.series"
            :options="lineDatalabelChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Dashed Line</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <apexchart
            class="apex-charts"
            height="380"
            dir="ltr"
            :series="dashedLineChart.series"
            :options="dashedLineChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Line with Annotations</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="lineAnnotation.series"
            :options="lineAnnotation.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>

    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Brush Charts</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <div>
            <apexchart
              class="apex-charts"
              height="210"
              dir="ltr"
              :series="brushLineChart.series"
              :options="brushLineChart.chartOptions"
            />
            <apexchart
              class="apex-charts"
              height="130"
              dir="ltr"
              :series="brushAreaChart.series"
              :options="brushAreaChart.chartOptions"
            />
            <div
              id="brushchart_line"
              data-colors='["--tb-info"]'
              class="apex-charts"
              dir="ltr"
            ></div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Stepline Charts</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="steplineChart.series"
            :options="steplineChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>

    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Gradient Charts</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="gradientLineChart.series"
            :options="gradientLineChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Missing Data/ Null Value Charts</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="missingDataChart.series"
            :options="missingDataChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>

    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Syncing Charts</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <div>
            <apexchart
              class="apex-charts"
              height="160"
              dir="ltr"
              :series="syncingCharts1.series"
              :options="syncingCharts1.chartOptions"
            />
            <apexchart
              class="apex-charts"
              height="160"
              dir="ltr"
              :series="syncingCharts2.series"
              :options="syncingCharts2.chartOptions"
            />
            <apexchart
              class="apex-charts"
              height="160"
              dir="ltr"
              :series="syncingCharts3.series"
              :options="syncingCharts3.chartOptions"
            />
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

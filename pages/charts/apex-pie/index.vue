<script>
import appConfig from "~/app.config";
import { useLayoutStore } from "~/stores/layout";

import {
  simplePieChart,
  donutChart,
  updatingDonutChart,
  gradientDonutChart,
  patternDonutChart,
  imagePieChart,
  monochromePieChart,
  getChartColorsArray
} from "./data";

export default {
  page: {
    title: "Pie Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      simplePieChart,
      donutChart,
      updatingDonutChart,
      gradientDonutChart,
      patternDonutChart,
      imagePieChart,
      monochromePieChart,
      title: "Pie Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Pie Charts",
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
      this.simplePieChart = {
        ...this.simplePieChart,
        chartOptions: {
          ...this.simplePieChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]'
          )
        }
      };
      this.donutChart = {
        ...this.donutChart,
        chartOptions: {
          ...this.donutChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]'
          )
        }
      };
      this.updatingDonutChart = {
        ...this.updatingDonutChart,
        chartOptions: {
          ...this.updatingDonutChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]'
          )
        }
      };

      this.gradientDonutChart = {
        ...this.gradientDonutChart,
        chartOptions: {
          ...this.gradientDonutChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]'
          )
        }
      };
      this.patternDonutChart = {
        ...this.patternDonutChart,
        chartOptions: {
          ...this.patternDonutChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]'
          )
        }
      };
      this.imagePieChart = {
        ...this.imagePieChart,
        chartOptions: {
          ...this.imagePieChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-info"]'
          )
        }
      };
    },
    appendData: function () {
      var arr = this.updatingDonutChart.series.slice();
      arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
      this.updatingDonutChart.series = arr;
    },

    removeData: function () {
      if (this.updatingDonutChart.series.length === 1) return;
      var arr = this.updatingDonutChart.series.slice();
      arr.pop();
      this.updatingDonutChart.series = arr;
    },

    randomize: function () {
      this.updatingDonutChart.series = this.updatingDonutChart.series.map(
        function () {
          return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        }
      );
    },

    reset: function () {
      this.updatingDonutChart.series = [44, 55, 13, 33];
    }
  },
  components: {}
};
</script>

<template>
  <PageHeader :title="title" :items="items" />
  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Simple Pie Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="300"
            dir="ltr"
            :series="simplePieChart.series"
            :options="simplePieChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Simple Donut Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="300"
            dir="ltr"
            :series="donutChart.series"
            :options="donutChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Updating Donut Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="280"
            dir="ltr"
            :series="updatingDonutChart.series"
            :options="updatingDonutChart.chartOptions"
          />

          <div
            class="d-flex align-items-start flex-wrap gap-2 justify-content-center mt-4"
          >
            <BButton id="add" variant="light" size="sm" @click="appendData">
              + ADD
            </BButton>

            <BButton id="remove" variant="light" size="sm" @click="removeData">
              - REMOVE
            </BButton>

            <BButton
              id="randomize"
              variant="light"
              size="sm"
              @click="randomize"
            >
              RANDOMIZE
            </BButton>

            <BButton id="reset" variant="light" size="sm" @click="reset">
              RESET
            </BButton>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Monochrome Pie Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="300"
            dir="ltr"
            :series="monochromePieChart.series"
            :options="monochromePieChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Gradient Donut Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="300"
            dir="ltr"
            :series="gradientDonutChart.series"
            :options="gradientDonutChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Patterned Donut Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="300"
            dir="ltr"
            :series="patternDonutChart.series"
            :options="patternDonutChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Pie Chart with Image Fill</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="300"
            dir="ltr"
            :series="imagePieChart.series"
            :options="imagePieChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

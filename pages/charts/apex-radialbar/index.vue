<script>
import appConfig from "~/app.config";
import { useLayoutStore } from "~/stores/layout";

import {
  basicRadialBarChart,
  multiRadialbarChart,
  circleAngleChart,
  gradientRadialbarChart,
  strokedRadialbarChart,
  semiRadialbarChart,
  imageRadialbarChart,
  getChartColorsArray
} from "./data";

export default {
  page: {
    title: "Radialbar Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      basicRadialBarChart,
      multiRadialbarChart,
      circleAngleChart,
      gradientRadialbarChart,
      strokedRadialbarChart,
      semiRadialbarChart,
      imageRadialbarChart,
      title: "Radialbar Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Radialbar Charts",
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
      this.basicRadialBarChart = {
        ...this.basicRadialBarChart,
        chartOptions: {
          ...this.basicRadialBarChart.chartOptions,
          colors: getChartColorsArray('["--tb-success"]')
        }
      };
      this.multiRadialbarChart = {
        ...this.multiRadialbarChart,
        chartOptions: {
          ...this.multiRadialbarChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger"]'
          )
        }
      };
      this.circleAngleChart = {
        ...this.circleAngleChart,
        chartOptions: {
          ...this.circleAngleChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-info", "--tb-danger", "--tb-success"]'
          )
        }
      };

      this.strokedRadialbarChart = {
        ...this.strokedRadialbarChart,
        chartOptions: {
          ...this.strokedRadialbarChart.chartOptions,
          colors: getChartColorsArray('["--tb-success"]')
        }
      };

      this.semiRadialbarChart = {
        ...this.semiRadialbarChart,
        chartOptions: {
          ...this.semiRadialbarChart.chartOptions,
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
          <BCardTitle class="mb-0">Simple Radialbar Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="basicRadialBarChart.series"
            :options="basicRadialBarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Multiple Radialbar</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <div id="multiple_radialbar" class="apex-charts" dir="ltr"></div>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="multiRadialbarChart.series"
            :options="multiRadialbarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Circle Chart - Custom Angle</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="circleAngleChart.series"
            :options="circleAngleChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Gradient Circle Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="gradientRadialbarChart.series"
            :options="gradientRadialbarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Stroked Circle Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="326"
            dir="ltr"
            :series="strokedRadialbarChart.series"
            :options="strokedRadialbarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>

    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Radialbars with Image</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="315"
            dir="ltr"
            :series="imageRadialbarChart.series"
            :options="imageRadialbarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Semi Circular Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="semiRadialbarChart.series"
            :options="semiRadialbarChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

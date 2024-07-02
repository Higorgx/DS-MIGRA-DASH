<script>
import appConfig from "~/app.config";

import {
  basicCandlestickChart,
  comboCandlestickBrushChart,
  comboCandlestickChart,
  categoryXaxisChart,
  candlestickLineChart
} from "./data";

export default {
  page: {
    title: "Candlestick Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      basicCandlestickChart: basicCandlestickChart,
      comboCandlestickBrushChart: comboCandlestickBrushChart,
      comboCandlestickChart: comboCandlestickChart,
      categoryXaxisChart: categoryXaxisChart,
      candlestickLineChart: candlestickLineChart,
      title: "Candlestick Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Candlestick Charts",
          active: true
        }
      ]
    };
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
          <BCardTitle class="mb-0">Basic Candlestick Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="basicCandlestickChart.series"
            :options="basicCandlestickChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0"
            >Candlestick Synced with Brush Chart (Combo)</BCardTitle
          >
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="200"
            dir="ltr"
            :series="comboCandlestickBrushChart.series"
            :options="comboCandlestickBrushChart.chartOptions"
          />
          <apexchart
            class="apex-charts"
            height="150"
            dir="ltr"
            :series="comboCandlestickChart.series"
            :options="comboCandlestickChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Category X-Axis</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="categoryXaxisChart.series"
            :options="categoryXaxisChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Candlestick with line</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="candlestickLineChart.series"
            :options="candlestickLineChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

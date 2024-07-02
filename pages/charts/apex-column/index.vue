<script>
import appConfig from "~/app.config";

import {
  basicColumnChart,
  columnDatalabelChart,
  stackedColumnsChart,
  columnStackedChart,
  columnMarkersChart,
  columnRotatedLabel,
  columnNegativeChart,
  rangeColumnChart,
  chartYearOption,
  quarterChartOption,
  distributedColumnchart,
  dynamicQuarterLoadedChart,
  columnGroupChart,
  groupedStackedChart,
  dumbbellChart,
  getChartColorsArray
} from "./data";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Column Charts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      title: "Column Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/"
        },
        {
          text: "Column Charts",
          active: true
        }
      ],
      basicColumnChart,
      columnDatalabelChart,
      stackedColumnsChart,
      columnStackedChart,
      columnMarkersChart,
      columnRotatedLabel,
      columnNegativeChart,
      rangeColumnChart,
      chartYearOption,
      quarterChartOption,
      distributedColumnchart,
      dynamicQuarterLoadedChart,
      columnGroupChart,
      groupedStackedChart,
      dumbbellChart
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
      this.basicColumnChart = {
        ...this.basicColumnChart,
        chartOptions: {
          ...this.basicColumnChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-danger", "--tb-primary", "--tb-success"]'
          )
        }
      };
      this.columnDatalabelChart = {
        ...this.columnDatalabelChart,
        chartOptions: {
          ...this.columnDatalabelChart.chartOptions,
          colors: getChartColorsArray('["--tb-success"]')
        }
      };
      this.stackedColumnsChart = {
        ...this.stackedColumnsChart,
        chartOptions: {
          ...this.stackedColumnsChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger"]'
          )
        }
      };
      this.columnStackedChart = {
        ...this.columnStackedChart,
        chartOptions: {
          ...this.columnStackedChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning"]'
          )
        }
      };
      this.groupedStackedChart = {
        ...this.groupedStackedChart,
        chartOptions: {
          ...this.groupedStackedChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-success", "--tb-primary","--tb-secondary", "--tb-danger"]'
          )
        }
      };
      this.dumbbellChart = {
        ...this.dumbbellChart,
        chartOptions: {
          ...this.dumbbellChart.chartOptions,
          colors: getChartColorsArray('["--tb-success", "--tb-primary"]')
        }
      };
      this.columnMarkersChart = {
        ...this.columnMarkersChart,
        chartOptions: {
          ...this.columnMarkersChart.chartOptions,
          colors: getChartColorsArray('["--tb-success", "--tb-primary"]')
        }
      };
      this.columnRotatedLabel = {
        ...this.columnRotatedLabel,
        chartOptions: {
          ...this.columnRotatedLabel.chartOptions,
          colors: getChartColorsArray('["--tb-info"]')
        }
      };
      this.columnNegativeChart = {
        ...this.columnNegativeChart,
        chartOptions: {
          ...this.columnNegativeChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-success", "--tb-danger", "--tb-warning"]'
          )
        }
      };
      this.rangeColumnChart = {
        ...this.rangeColumnChart,
        chartOptions: {
          ...this.rangeColumnChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-success"]')
        }
      };
      this.chartYearOption = {
        ...this.chartYearOption,
        chartOptions: {
          ...this.chartYearOption.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-dark", "--tb-info"]'
          )
        }
      };

      this.distributedColumnchart = {
        ...this.distributedColumnchart,
        chartOptions: {
          ...this.distributedColumnchart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-dark", "--tb-info"]'
          )
        }
      };
      this.columnGroupChart = {
        ...this.columnGroupChart,
        chartOptions: {
          ...this.columnGroupChart.chartOptions,
          colors: getChartColorsArray('["--tb-info"]')
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
          <BCardTitle class="mb-0">Basic Column Charts</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="basicColumnChart.series"
            :options="basicColumnChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Column with Data Labels</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="columnDatalabelChart.series"
            :options="columnDatalabelChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Stacked Column Charts</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="stackedColumnsChart.series"
            :options="stackedColumnsChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Stacked Column 100</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="columnStackedChart.series"
            :options="columnStackedChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Grouped Stacked Columns</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="groupedStackedChart.series"
            :options="groupedStackedChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>

    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Dumbbell Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="dumbbellChart.series"
            :options="dumbbellChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Column with Markers</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="columnMarkersChart.series"
            :options="columnMarkersChart.chartOptions"
          />
          <div id="column_markers" class="apex-charts" dir="ltr"></div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Column with Rotated Labels</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="columnRotatedLabel.series"
            :options="columnRotatedLabel.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Column with Nagetive Values</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="columnNegativeChart.series"
            :options="columnNegativeChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Range Column Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="rangeColumnChart.series"
            :options="rangeColumnChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Dynamic Loaded Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <div id="dynamicloadedchart-wrap">
            <div id="chart-year">
              <apexchart
                type="bar"
                height="330"
                ref="chart"
                :options="chartYearOption.chartOptions"
                :series="chartYearOption.series"
              />
            </div>
            <div id="chart-quarter">
              <apexchart
                type="bar"
                height="330"
                ref="chartQuarter"
                :options="dynamicQuarterLoadedChart.chartOptions"
                :series="dynamicQuarterLoadedChart.series"
              />
            </div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Distributed Columns Charts</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="distributedColumnchart.series"
            :options="distributedColumnchart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
  <BRow>
    <BCol xl="6">
      <BCard no-body>
        <BCardHeader>
          <BCardTitle class="mb-0">Dynamic Loaded Chart</BCardTitle>
        </BCardHeader>
        <BCardBody>
          <apexchart
            type="bar"
            height="330"
            ref="chart"
            :options="columnGroupChart.chartOptions"
            :series="columnGroupChart.series"
          />
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

<script>
import { CountTo } from "vue3-count-to";
import { basicBarChart } from "~/modules/utils/EChart";
import AmChartComponent from "~/components/AmChartComponent.vue";

export default {
  components: {
    CountTo,
    AmChartComponent
  },
  data() {
    return {
      basicBarChart
    };
  }
};
</script>
<template>
  <BCol xl="9">
    <BCard no-body class="card-height-100">
      <BCardHeader class="d-flex align-items-center">
        <BCardTitle title-tag="h5" class="mb-0 flex-grow-1"
          >Active Users Right Now</BCardTitle
        >
        <div class="flex-shrink-0">
          <BButton type="button" variant="subtle-primary" size="sm"
            ><i class="bi bi-file-earmark-text me-1 align-baseline"></i>
            Reports</BButton
          >
        </div>
      </BCardHeader>
      <BCardBody>
        <BRow>
          <BCol lg="6">
            <AmChartComponent />
          </BCol>
          <BCol lg="6">
            <div class="mb-4">
              <h6 class="text-muted mb-3 fw-medium fs-xs text-uppercase">
                Compared to last month
              </h6>
              <h3>
                <count-to
                  :startVal="0"
                  :duration="5000"
                  :endVal="53736"
                ></count-to>
                <small class="text-muted fw-normal fs-sm">Users</small>
              </h3>
            </div>
            <div>
              <apexchart
                class="apex-charts"
                height="265"
                dir="ltr"
                :series="basicBarChart.series"
                :options="basicBarChart.chartOptions"
               />
            </div>
          </BCol>
        </BRow>
      </BCardBody>
    </BCard>
  </BCol>
</template>

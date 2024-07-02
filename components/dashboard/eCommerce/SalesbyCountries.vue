<script>
import { CountTo } from "vue3-count-to";
import AmChartComponent from "~/components/AmChartComponent.vue";

export default {
  components: { CountTo, AmChartComponent }
};
</script>
<template>
  <BCol xl="6">
    <BCard no-body>
      <BCardHeader class="align-items-center d-flex">
        <BCardTitle class="mb-0 flex-grow-1">Sales by Countries</BCardTitle>
        <div class="flex-shrink-0">
          <BButton type="button" variant="subtle-primary" size="sm">
            Export Report
          </BButton>
        </div>
      </BCardHeader>

      <BCardBody>
        <BRow>
          <BCol lg="8">
            <AmChartComponent />
          </BCol>
          <BCol lg="4">
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
                <small class="text-muted fw-normal fs-sm">Sales</small>
              </h3>
            </div>
            <div>
              <ul class="list-unstyled vstack gap-2">
                <li class="p-2 rounded">
                  <i
                    class="ri-checkbox-blank-circle-fill text-primary align-bottom me-1"
                  ></i>
                  United States <span class="float-end">15,364</span>
                </li>
                <li class="bg-light-subtle p-2 rounded">
                  <i
                    class="ri-checkbox-blank-circle-fill text-secondary align-bottom me-1"
                  ></i>
                  Greenland <span class="float-end">12,387</span>
                </li>
                <li class="p-2 rounded">
                  <i
                    class="ri-checkbox-blank-circle-fill text-info align-bottom me-1"
                  ></i>
                  Serbia
                  <span class="float-end">9,123</span>
                </li>
                <li class="bg-light-subtle p-2 rounded">
                  <i
                    class="ri-checkbox-blank-circle-fill text-success align-bottom me-1"
                  ></i>
                  Russia <span class="float-end">7,108</span>
                </li>
                <li class="p-2 rounded">
                  <i
                    class="ri-checkbox-blank-circle-fill text-danger align-bottom me-1"
                  ></i>
                  Brazil <span class="float-end">6,731</span>
                </li>
                <li class="bg-light-subtle p-2 rounded">
                  <i
                    class="ri-checkbox-blank-circle-fill text-warning align-bottom me-1"
                  ></i>
                  Sydney <span class="float-end">3,023</span>
                </li>
              </ul>
            </div>
          </BCol>
        </BRow>
      </BCardBody>
    </BCard>
  </BCol>
</template>

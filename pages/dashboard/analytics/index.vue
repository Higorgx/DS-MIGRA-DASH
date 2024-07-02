<script>
import appConfig from "~/app.config";
import ActiveUsers from "~/components/dashboard/analytics/ActiveUsers.vue";
import { CountTo } from "vue3-count-to";
import {
  pageViewChart,
  clicksChart,
  conversationsChart,
  salesReportChart,
  totalSessionsChart,
  avgVisitDurationChart,
  impressionsChart,
  totalViewsChart,
  timeOnSalesChart,
  goalCompletionsChart,
  bounceRateChart,
  newSessionsChart,
  getChartColorsArray
} from "~/components/dashboard/analytics/chartsData.js";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Analytics",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      title: "Analytics",
      items: [
        {
          text: "Dashboards",
          href: "/"
        },
        {
          text: "Analytics",
          active: true
        }
      ],
      pageViewChart,
      clicksChart,
      conversationsChart,
      salesReportChart,
      totalSessionsChart,
      avgVisitDurationChart,
      impressionsChart,
      totalViewsChart,
      timeOnSalesChart,
      goalCompletionsChart,
      bounceRateChart,
      newSessionsChart,
      activeChart: "pageView"
    };
  },
  components: {
    CountTo,
    ActiveUsers
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
      this.pageViewChart = {
        ...this.pageViewChart,
        chartOptions: {
          ...this.pageViewChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-light", "--tb-primary", "--tb-secondary"]'
          )
        }
      };
      this.totalSessionsChart = {
        ...this.totalSessionsChart,
        chartOptions: {
          ...this.totalSessionsChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]')
        }
      };

      this.avgVisitDurationChart = {
        ...this.avgVisitDurationChart,
        chartOptions: {
          ...this.avgVisitDurationChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]')
        }
      };
      this.impressionsChart = {
        ...this.impressionsChart,
        chartOptions: {
          ...this.impressionsChart.chartOptions,
          colors: getChartColorsArray('["--tb-secondary"]')
        }
      };
      this.totalViewsChart = {
        ...this.totalViewsChart,
        chartOptions: {
          ...this.totalViewsChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary"]')
        }
      };
      this.clicksChart = {
        ...this.clicksChart,
        chartOptions: {
          ...this.clicksChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-light", "--tb-secondary", "--tb-primary"]'
          )
        }
      };
      this.conversationsChart = {
        ...this.conversationsChart,
        chartOptions: {
          ...this.conversationsChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary-text-emphasis"]')
        }
      };
      this.timeOnSalesChart = {
        ...this.timeOnSalesChart,
        chartOptions: {
          ...this.timeOnSalesChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary"]')
        }
      };
      this.goalCompletionsChart = {
        ...this.goalCompletionsChart,
        chartOptions: {
          ...this.goalCompletionsChart.chartOptions,
          colors: getChartColorsArray('["--tb-dark"]')
        }
      };
      this.bounceRateChart = {
        ...this.bounceRateChart,
        chartOptions: {
          ...this.bounceRateChart.chartOptions,
          colors: getChartColorsArray('["--tb-danger"]')
        }
      };
      this.newSessionsChart = {
        ...this.newSessionsChart,
        chartOptions: {
          ...this.newSessionsChart.chartOptions,
          colors: getChartColorsArray('["--tb-info"]')
        }
      };
      this.salesReportChart = {
        ...this.salesReportChart,
        chartOptions: {
          ...this.salesReportChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]')
        }
      };
    }
  }
};
</script>

<template>
  <PageHeader :title="title" :items="items" />
  <BRow>
    <BCol xl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-reset dropdown-btn p-0"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content>
              <span class="text-muted fs-lg">
                <i class="mdi mdi-dots-vertical align-middle" />
              </span>
            </template>
            <div class="dropdown-menu-end">
              <BLink class="dropdown-item" href="#">Today</BLink>
              <BLink class="dropdown-item" href="#">Last Week</BLink>
              <BLink class="dropdown-item" href="#">Last Month</BLink>
              <BLink class="dropdown-item" href="#">Current Year</BLink>
            </div>
          </BDropdown>
          <p class="fs-md text-muted mb-0">Total Sessions</p>

          <BRow class="mt-4 align-items-end">
            <BCol lg="6">
              <h3 class="mb-4">
                <count-to
                  :startVal="0"
                  :duration="5000"
                  :endVal="368.24"
                  :decimals="2"
                  suffix="k"
                />
              </h3>
              <p class="text-success mb-0">
                <i class="bi bi-arrow-up me-1"></i> 06.41% Last Month
              </p>
            </BCol>
            <BCol lg="6">
              <apexchart
                class="apex-charts m-n3 mt-n4"
                height="124"
                dir="ltr"
                :series="totalSessionsChart.series"
                :options="totalSessionsChart.chartOptions"
              />
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-reset dropdown-btn p-0"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content>
              <span class="text-muted fs-lg">
                <i class="mdi mdi-dots-vertical align-middle" />
              </span>
            </template>
            <div class="dropdown-menu-end">
              <BLink class="dropdown-item" href="#">Today</BLink>
              <BLink class="dropdown-item" href="#">Last Week</BLink>
              <BLink class="dropdown-item" href="#">Last Month</BLink>
              <BLink class="dropdown-item" href="#">Current Year</BLink>
            </div>
          </BDropdown>
          <p class="fs-md text-muted mb-0">Avg. Visit Duration</p>

          <BRow class="mt-4 align-items-end">
            <BCol lg="6">
              <h3 class="mb-4">
                <count-to
                  :startVal="0"
                  :duration="5000"
                  :endVal="1.47"
                  :decimals="2"
                  suffix="sec"
                />
              </h3>
              <p class="text-success mb-0">
                <i class="bi bi-arrow-up me-1"></i> 13% Last Month
              </p>
            </BCol>
            <BCol lg="6">
              <apexchart
                class="apex-charts m-n3 mt-n4"
                height="124"
                dir="ltr"
                :series="avgVisitDurationChart.series"
                :options="avgVisitDurationChart.chartOptions"
              />
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-reset dropdown-btn p-0"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content>
              <span class="text-muted fs-lg">
                <i class="mdi mdi-dots-vertical align-middle" />
              </span>
            </template>
            <div class="dropdown-menu-end">
              <BLink class="dropdown-item" href="#">Today</BLink>
              <BLink class="dropdown-item" href="#">Last Week</BLink>
              <BLink class="dropdown-item" href="#">Last Month</BLink>
              <BLink class="dropdown-item" href="#">Current Year</BLink>
            </div>
          </BDropdown>
          <p class="fs-md text-muted mb-0">Impressions</p>

          <BRow class="mt-4 align-items-end">
            <BCol lg="6">
              <h3 class="mb-4">
                <count-to :startVal="0" :duration="5000" :endVal="1647" />
              </h3>
              <p class="text-danger mb-0">
                <i class="bi bi-arrow-down me-1"></i> 07.26% Last Week
              </p>
            </BCol>
            <BCol lg="6">
              <apexchart
                class="apex-charts m-n3 mt-n4"
                height="124"
                dir="ltr"
                :series="impressionsChart.series"
                :options="impressionsChart.chartOptions"
              />
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-reset dropdown-btn p-0"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content>
              <span class="text-muted fs-lg">
                <i class="mdi mdi-dots-vertical align-middle" />
              </span>
            </template>
            <div class="dropdown-menu-end">
              <BLink class="dropdown-item" href="#">Today</BLink>
              <BLink class="dropdown-item" href="#">Last Week</BLink>
              <BLink class="dropdown-item" href="#">Last Month</BLink>
              <BLink class="dropdown-item" href="#">Current Year</BLink>
            </div>
          </BDropdown>
          <p class="fs-md text-muted mb-0">Total Views</p>

          <BRow class="mt-4 align-items-end">
            <BCol lg="6">
              <h3 class="mb-4">
                <count-to
                  :startVal="0"
                  :duration="5000"
                  :endVal="291.32"
                  :decimals="2"
                  suffix="k"
                />
              </h3>
              <p class="text-success mb-0">
                <i class="bi bi-arrow-up me-1"></i> 13% Last Month
              </p>
            </BCol>
            <BCol lg="6">
              <apexchart
                class="apex-charts m-n3 mt-n4"
                height="124"
                dir="ltr"
                :series="totalViewsChart.series"
                :options="totalViewsChart.chartOptions"
              />
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="8">
      <BCard no-body>
        <BCardHeader class="d-flex align-items-center flex-wrap gap-3">
          <BCardTitle title-tag="h5" class="mb-0 flex-grow-1"
            >Performance Overview</BCardTitle
          >
          <ul class="nav nav-pills flex-shrink-0" role="tablist">
            <li class="nav-item" role="presentation">
              <BLink
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                :aria-selected="activeChart === 'pageView'"
                :class="{
                  active: activeChart === 'pageView'
                }"
                @click="activeChart = 'pageView'"
              >
                Pageviews
              </BLink>
            </li>
            <li class="nav-item" role="presentation">
              <BLink
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                :aria-selected="activeChart === 'clicks'"
                :class="{
                  active: activeChart === 'clicks'
                }"
                tabindex="-1"
                @click="activeChart = 'clicks'"
              >
                Clicks
              </BLink>
            </li>
            <li class="nav-item" role="presentation">
              <BLink
                class="nav-link"
                data-bs-toggle="tab"
                role="tab"
                :aria-selected="activeChart === 'conversations'"
                :class="{
                  active: activeChart === 'conversations'
                }"
                tabindex="-1"
                @click="activeChart = 'conversations'"
              >
                Conversations
              </BLink>
            </li>
          </ul>
        </BCardHeader>
        <BCardBody class="ps-0">
          <div class="tab-content text-muted">
            <div
              :class="{
                active: activeChart === 'pageView'
              }"
              class="tab-pane"
              id="pageViews"
              role="tabpanel"
            >
              <apexchart
                class="apex-charts"
                height="373"
                dir="ltr"
                :series="pageViewChart.series"
                :options="pageViewChart.chartOptions"
              />
            </div>
            <div
              :class="{
                active: activeChart === 'clicks'
              }"
              class="tab-pane"
              id="Clicks"
              role="tabpanel"
            >
              <apexchart
                class="apex-charts"
                height="373"
                dir="ltr"
                :series="clicksChart.series"
                :options="clicksChart.chartOptions"
              />
            </div>
            <div
              :class="{
                active: activeChart === 'conversations'
              }"
              class="tab-pane"
              id="conversations"
              role="tabpanel"
            >
              <apexchart
                class="apex-charts"
                height="373"
                dir="ltr"
                :series="conversationsChart.series"
                :options="conversationsChart.chartOptions"
              />
            </div>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="4">
      <BCard no-body class="card-height-100" id="networks">
        <BCardHeader class="d-flex">
          <BCardTitle title-tag="h5" class="mb-0 flex-grow-1"
            >Browser Usage</BCardTitle
          >
          <div class="flex-shrink-0">
            <BDropdown
              class="sortble-dropdown"
              toggle-class="text-reset dropdown-btn p-0"
              end
              variant="ghost-dark"
            >
              <template #button-content>
                <span class="text-muted fs-lg">
                  <small class="text-muted dropdown-title"> Order Date </small>
                </span>
              </template>
              <div class="dropdown-menu-end">
                <BLink class="dropdown-item sort" data-sort="browsers">
                  Browsers
                </BLink>
                <BLink class="dropdown-item sort" data-sort="click">
                  Click
                </BLink>
                <BLink class="dropdown-item sort" data-sort="pageviews">
                  Bounce Rate
                </BLink>
              </div>
            </BDropdown>
          </div>
        </BCardHeader>
        <BCardBody>
          <div class="table-responsive mb-0">
            <table class="table align-middle mb-0">
              <thead class="table-active">
                <tr>
                  <th class="sort cursor-pointer" data-sort="browsers">
                    Browsers
                  </th>
                  <th class="sort cursor-pointer text-center" data-sort="click">
                    Click
                  </th>
                  <th
                    class="sort cursor-pointer text-center"
                    data-sort="pageviews"
                  >
                    Bounce Rate
                  </th>
                </tr>
              </thead>
              <tbody class="list">
                <tr>
                  <td>
                    <img
                      src="@/assets/images/brands/chrome.png"
                      alt=""
                      class="avatar-xxs"
                    />
                    <span class="ms-2 browsers">Google Chrome</span>
                  </td>
                  <td class="click text-center">640</td>
                  <td class="pageviews text-center">86.01%</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="@/assets/images/brands/firefox.png"
                      alt=""
                      class="avatar-xxs"
                    />
                    <span class="ms-2 browsers">Firefox</span>
                  </td>
                  <td class="click text-center">274</td>
                  <td class="pageviews text-center">59.22%</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="@/assets/images/brands/safari.png"
                      alt=""
                      class="avatar-xxs"
                    />
                    <span class="ms-2 browsers">Safari</span>
                  </td>
                  <td class="click text-center">591</td>
                  <td class="pageviews text-center">71.36%</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="@/assets/images/brands/opera.png"
                      alt=""
                      class="avatar-xxs"
                    />
                    <span class="ms-2 browsers">Opera</span>
                  </td>
                  <td class="click text-center">456</td>
                  <td class="pageviews text-center">63.82%</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="@/assets/images/brands/microsoft.png"
                      alt=""
                      class="avatar-xxs"
                    />
                    <span class="ms-2 browsers">Microsoft Edge</span>
                  </td>
                  <td class="click text-center">312</td>
                  <td class="pageviews text-center">57.48%</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="@/assets/images/brands/microsoft2.png"
                      alt=""
                      class="avatar-xxs"
                    />
                    <span class="ms-2 browsers">Internet Explorer</span>
                  </td>
                  <td class="click text-center">164</td>
                  <td class="pageviews text-center">77.21%</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="@/assets/images/brands/chromium.png"
                      alt=""
                      class="avatar-xxs"
                    />
                    <span class="ms-2 browsers">Chromium</span>
                  </td>
                  <td class="click text-center">36</td>
                  <td class="pageviews text-center">18.90%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <ActiveUsers />
    <BCol xl="3">
      <BCard no-body class="card-height-100" id="top-Pages">
        <BCardHeader class="d-flex align-items-center">
          <BCardTitle title-tag="h5" class="mb-0 flex-grow-1"
            >Top Pages</BCardTitle
          >
          <div class="flex-shrink-0">
            <BDropdown
              class="card-header-dropdown"
              toggle-class="text-reset dropdown-btn p-0"
              no-caret
              end
              variant="ghost-dark"
            >
              <template #button-content>
                <span class="text-muted fs-lg">
                  <i class="mdi mdi-dots-vertical align-middle" />
                </span>
              </template>
              <div class="dropdown-menu-end">
                <BLink
                  class="dropdown-item sort"
                  data-sort="activePage"
                  href="#!"
                  >Active Page</BLink
                >
                <BLink
                  class="dropdown-item sort"
                  data-sort="pageUsers"
                  href="#!"
                  >Users</BLink
                >
              </div>
            </BDropdown>
          </div>
        </BCardHeader>
        <BCardBody>
          <div class="table-responsive">
            <table
              class="table align-middle table-borderless table-centered table-nowrap mb-0"
            >
              <thead class="text-muted table-light">
                <tr>
                  <th
                    scope="col"
                    class="sort cursor-pointer"
                    data-sort="activePage"
                    style="width: 62"
                  >
                    Active Page
                  </th>
                  <th
                    scope="col"
                    class="sort cursor-pointer"
                    data-sort="activePageNo"
                  >
                    Active
                  </th>
                  <th
                    scope="col"
                    class="sort cursor-pointer"
                    data-sort="pageUsers"
                  >
                    Users
                  </th>
                </tr>
              </thead>
              <tbody class="list">
                <tr>
                  <td>
                    <BLink href="#" class="activePage text-reset"
                      >/themesbrand/velzon</BLink
                    >
                  </td>
                  <td class="activePageNo">299</td>
                  <td class="pageUsers">25.3%</td>
                </tr>
                <!-- end -->
                <tr>
                  <td>
                    <BLink href="#" class="activePage text-reset"
                      >/skote/index.html</BLink
                    >
                  </td>
                  <td class="activePageNo">240</td>
                  <td class="pageUsers">22.7%</td>
                </tr>
                <!-- end -->
                <tr>
                  <td>
                    <BLink href="#" class="activePage text-reset"
                      >/hybrix/timeline</BLink
                    >
                  </td>
                  <td class="activePageNo">190</td>
                  <td class="pageUsers">18.7%</td>
                </tr>
                <!-- end -->
                <tr>
                  <td>
                    <BLink href="#" class="activePage text-reset"
                      >/themesbrand/minia</BLink
                    >
                  </td>
                  <td class="activePageNo">135</td>
                  <td class="pageUsers">14.2%</td>
                </tr>
                <!-- end -->
                <tr>
                  <td>
                    <BLink href="#" class="activePage text-reset"
                      >/dashon/dashboard</BLink
                    >
                  </td>
                  <td class="activePageNo">118</td>
                  <td class="pageUsers">12.6%</td>
                </tr>
                <!-- end -->
                <tr>
                  <td>
                    <BLink href="#" class="activePage text-reset"
                      >/doot/chats</BLink
                    >
                  </td>
                  <td class="activePageNo">90</td>
                  <td class="pageUsers">10.9%</td>
                </tr>
                <!-- end -->
                <tr>
                  <td>
                    <BLink href="#" class="activePage text-reset"
                      >/steex/learning</BLink
                    >
                  </td>
                  <td class="activePageNo">75</td>
                  <td class="pageUsers">07.3%</td>
                </tr>
                <!-- end -->
              </tbody>
              <!-- end tbody -->
            </table>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="4">
      <BCard no-body class="card-height-100 border-0 overflow-hidden">
        <BCardBody class="p-0">
          <BRow class="g-0">
            <BCol md="6">
              <BCard
                no-body
                class="shadow-none border-end-md border-bottom rounded-0 mb-0"
              >
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="100"
                    width="50"
                    dir="ltr"
                    :series="timeOnSalesChart.series"
                    :options="timeOnSalesChart.chartOptions"
                  >
                  </apexchart>
                  <div class="mt-2">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm"
                    >
                      Time on Sale
                    </p>
                    <h4 class="fw-semibold mb-3">
                      <count-to
                        :startVal="0"
                        :duration="5000"
                        :endVal="32"
                        suffix="M"
                      ></count-to
                      >{{ " " }}
                      <count-to
                        :startVal="0"
                        :duration="5000"
                        :endVal="12"
                        suffix="s"
                      />
                    </h4>
                    <div class="d-flex align-items-center gap-2">
                      <h5 class="text-success flex-shrink-0 fs-xs mb-0">
                        <i
                          class="ri-arrow-right-up-line fs-sm align-middle"
                        ></i>
                        +21.36 %
                      </h5>
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          Analytics for last week
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard no-body class="shadow-none border-bottom rounded-0 mb-0">
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="100"
                    width="50"
                    dir="ltr"
                    :series="goalCompletionsChart.series"
                    :options="goalCompletionsChart.chartOptions"
                  />
                  <div class="mt-2">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm"
                    >
                      Goal Completions
                    </p>
                    <h4 class="fw-semibold mb-3">
                      <count-to
                        :startVal="0"
                        :duration="5000"
                        :endVal="254157"
                      />
                    </h4>
                    <div class="d-flex align-items-center gap-2">
                      <h5 class="text-success flex-shrink-0 fs-xs mb-0">
                        <i
                          class="ri-arrow-right-up-line fs-sm align-middle"
                        ></i>
                        +6.30 %
                      </h5>
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          Analytics for last week
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard no-body class="shadow-none border-end-md rounded-0 mb-0">
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="100"
                    width="50"
                    dir="ltr"
                    :series="bounceRateChart.series"
                    :options="bounceRateChart.chartOptions"
                  >
                  </apexchart>
                  <div class="mt-2">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm"
                    >
                      Bounce Rate
                    </p>
                    <h4 class="fw-semibold mb-3">
                      <count-to
                        :startVal="0"
                        :duration="5000"
                        :endVal="68"
                        suffix="%"
                      />
                    </h4>
                    <div class="d-flex align-items-center gap-2">
                      <h5 class="text-danger flex-shrink-0 fs-xs mb-0">
                        <i
                          class="ri-arrow-right-down-line fs-sm align-middle"
                        ></i>
                        +2.01 %
                      </h5>
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          Analytics for last week
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard
                no-body
                class="shadow-none border-top border-top-md-0 rounded-0 mb-0"
              >
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="100"
                    width="50"
                    dir="ltr"
                    :series="newSessionsChart.series"
                    :options="newSessionsChart.chartOptions"
                  >
                  </apexchart>
                  <div class="mt-2">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm"
                    >
                      New Sessions
                    </p>
                    <h4 class="fw-semibold mb-3">
                      <count-to
                        :startVal="0"
                        :duration="5000"
                        :endVal="32548"
                      />
                    </h4>
                    <div class="d-flex align-items-center gap-2">
                      <h5 class="text-success flex-shrink-0 fs-xs mb-0">
                        <i
                          class="ri-arrow-right-up-line fs-sm align-middle"
                        ></i>
                        +10.42 %
                      </h5>
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          than last week
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="4">
      <BCard no-body class="card-height-100">
        <BCardHeader class="d-flex align-items-center">
          <BCardTitle title-tag="h5" class="mb-0 flex-grow-1"
            >Sales Report</BCardTitle
          >
          <div class="flex-shrink-0">
            <BButton type="button" variant="subtle-info" size="sm"
              ><i class="bi bi-file-earmark-text me-1 align-baseline"></i>
              Generate Reports</BButton
            >
          </div>
        </BCardHeader>
        <BCardBody class="pb-0">
          <h4>
            <count-to
              :startVal="0"
              :duration="5000"
              :endVal="452.32"
              :decimals="2"
              prefix="$"
              suffix="M"
            />
            <span class="text-success fw-normal fs-sm ms-1"
              ><i class="bi bi-arrow-up"></i> +23.57%</span
            >
          </h4>
          <p class="text-muted mb-0">($215.32 Avg. revenue monthly)</p>
        </BCardBody>
        <BCardBody class="pt-0 pb-2 ps-0 mt-2 mt-lg-n3">
          <apexchart
            class="apex-charts"
            height="333"
            dir="ltr"
            :series="salesReportChart.series"
            :options="salesReportChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="4">
      <BCard no-body class="card-height-100">
        <BCardHeader class="d-flex align-items-center">
          <BCardTitle title-tag="h5" class="mb-0 flex-grow-1">
            Earning
          </BCardTitle>
          <BDropdown
            class="card-header-dropdown"
            toggle-class="text-reset dropdown-btn p-0"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content>
              <span class="text-muted fs-lg">
                <i class="mdi mdi-dots-vertical align-middle" />
              </span>
            </template>
            <div class="dropdown-menu-end">
              <BLink class="dropdown-item" href="#">Current Years</BLink>
              <BLink class="dropdown-item" href="#">Last Years</BLink>
            </div>
          </BDropdown>
        </BCardHeader>
        <BCardBody>
          <div class="p-3 text-center bg-light-subtle mb-4 rounded">
            <h4 class="mb-0">
              <count-to
                :startVal="0"
                :duration="5000"
                :endVal="314.57"
                :decimals="2"
                prefix="$"
                suffix="M"
              />
              <span class="text-muted fw-normal fs-sm ms-1"
                ><span class="text-success fw-medium"
                  ><i class="bi bi-arrow-up"></i> +23.57%</span
                >
                Last Month</span
              >
            </h4>
          </div>
          <div class="progress progress-bar-animated">
            <div
              class="progress-bar"
              role="progressbar"
              data-bs-toggle="tooltip"
              data-bs-title="Product Development (28%)"
              style="width: 28%"
              aria-valuenow="28"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class="progress-bar bg-secondary"
              role="progressbar"
              data-bs-toggle="tooltip"
              data-bs-title="Startup Business (15%)"
              style="width: 15%"
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class="progress-bar bg-info"
              role="progressbar"
              data-bs-toggle="tooltip"
              data-bs-title="Corporate Design (20%)"
              style="width: 20%"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class="progress-bar bg-light"
              role="progressbar"
              data-bs-toggle="tooltip"
              data-bs-title="Develop Project (18%)"
              style="width: 18%"
              aria-valuenow="18"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class="progress-bar bg-success"
              role="progressbar"
              data-bs-toggle="tooltip"
              data-bs-title="Prototype (13%)"
              style="width: 13%"
              aria-valuenow="13"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              data-bs-toggle="tooltip"
              data-bs-title="Design (8%)"
              style="width: 8%"
              aria-valuenow="8"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <ul class="list-unstyled mt-4 pt-2 vstack gap-3">
            <li>
              <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                  <i class="bi bi-circle-square text-primary me-2"></i> Product
                  Development
                </div>
                <div class="flex-shrink-0">28%</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                  <i class="bi bi-circle-square text-secondary me-2"></i>
                  Startup Business
                </div>
                <div class="flex-shrink-0">15%</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                  <i class="bi bi-circle-square text-info me-2"></i> Corporate
                  Design
                </div>
                <div class="flex-shrink-0">20%</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                  <i class="bi bi-circle-square text-light me-2"></i> Develop
                  Project
                </div>
                <div class="flex-shrink-0">18%</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                  <i class="bi bi-circle-square text-success me-2"></i>
                  Prototype
                </div>
                <div class="flex-shrink-0">13%</div>
              </div>
            </li>
            <li>
              <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                  <i class="bi bi-circle-square text-warning me-2"></i> Design
                </div>
                <div class="flex-shrink-0">8%</div>
              </div>
            </li>
          </ul>
          <div class="text-center">
            <BLink href="#!" class="link-secondary fw-medium link-effect"
              >View All Earning
              <i class="bi bi-arrow-right align-baseline ms-1"></i
            ></BLink>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>
../../../components/dashboard/eCommerce/analytics/chartsData

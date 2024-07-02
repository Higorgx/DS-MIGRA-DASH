<script>
// import Layout from "../../../layouts/main.vue";
// import PageHeader from "@/components/page-header";
import appConfig from "~/app.config";
import { CountTo } from "vue3-count-to";
import simplebar from "simplebar-vue";
import {
  realizedRateChart,
  balanceOverviewChart,
  emailSentChart,
  usersActivityChart,
  syncStatusBreakdownChart,
  getChartColorsArray
} from "~/components/dashboard/crm/chartsData.js";
import { useLayoutStore } from "~/stores/layout";

import avatar2 from "~/assets/images/users/avatar-2.jpg";
import avatar3 from "~/assets/images/users/avatar-3.jpg";
import avatar5 from "~/assets/images/users/avatar-5.jpg";
import avatar6 from "~/assets/images/users/avatar-6.jpg";
import avatar7 from "~/assets/images/users/avatar-7.jpg";
import avatar8 from "~/assets/images/users/avatar-8.jpg";
import avatar9 from "~/assets/images/users/avatar-9.jpg";

export default {
  page: {
    title: "CRM",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      searchQuery: "",
      title: "CRM",
      items: [
        {
          text: "Dashboards",
          href: "/"
        },
        {
          text: "CRM",
          active: true
        }
      ],
      realizedRateChart,
      balanceOverviewChart,
      emailSentChart,
      usersActivityChart,
      syncStatusBreakdownChart,
      page: 1,
      perPage: 5,
      pages: [],
      contactData: [
        {
          img: avatar2,
          name: "Buck Roberts",
          phoneNumber: "(11) 3885-1022",
          score: "234",
          location: "Guarulhos, Brazil",
          date: "17 Mar, 2023"
        },
        {
          img: avatar3,
          name: "Josefa Weissnat",
          phoneNumber: "(53) 3035-3100",
          score: "418",
          location: "California, USA",
          date: "15Mar, 2023"
        },
        {
          img: avatar5,
          name: "Jacinthe Will",
          phoneNumber: "(33) 3521-6761",
          score: "357",
          location: "Brasília, Brazil",
          date: "11 Mar, 2023"
        },
        {
          img: avatar6,
          name: "Donnell Schultz",
          phoneNumber: "(51) 3233-7909",
          score: "631",
          location: "Natal, Brazil",
          date: "29 Feb, 2023"
        },
        {
          img: avatar7,
          name: "Xander Wyman",
          phoneNumber: "(48) 3877-9000",
          score: "249",
          location: "Logrono, Spain",
          date: "24 Feb, 2023"
        },
        {
          img: avatar8,
          name: "Buck Roberts",
          phoneNumber: "(92) 3639-8685",
          score: "176",
          location: "Ibiza, Spain",
          date: "27 Jan, 2023"
        },
        {
          img: avatar9,
          name: "Federico Hand",
          phoneNumber: "(11) 3666-9716",
          score: "176",
          location: "San Luis Potosi, Mexico",
          date: "21 Dec, 2022"
        }
      ]
    };
  },
  mounted() {
    this.handleUpdate();
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.contactData);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return data.title.toLowerCase().includes(search);
        });
      } else {
        return this.displayedPosts;
      }
    },
    layoutTheme() {
      return useLayoutStore().layoutTheme;
    }
  },
  watch: {
    contactData() {
      this.setPages();
    },
    layoutTheme: {
      handler() {
        this.handleUpdate();
      },
      deep: true
    }
  },
  created() {
    this.setPages();
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.contactData.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(contactData) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return contactData.slice(from, to);
    },
    handleUpdate() {
      this.realizedRateChart = {
        ...this.realizedRateChart,
        chartOptions: {
          ...this.realizedRateChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-secondary", "--tb-danger"]'
          )
        }
      };
      this.balanceOverviewChart = {
        ...this.balanceOverviewChart,
        chartOptions: {
          ...this.balanceOverviewChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-light","--tb-secondary"]'
          )
        }
      };
      this.emailSentChart = {
        ...this.emailSentChart,
        chartOptions: {
          ...this.emailSentChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-success", "--tb-secondary"]'
          )
        }
      };
      this.usersActivityChart = {
        ...this.usersActivityChart,
        chartOptions: {
          ...this.usersActivityChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-light"]')
        }
      };
      this.syncStatusBreakdownChart = {
        ...this.syncStatusBreakdownChart,
        chartOptions: {
          ...this.syncStatusBreakdownChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-primary", "--tb-primary-rgb, 0.85", "--tb-primary-rgb, 0.60", "--tb-primary-rgb, 0.50", "--tb-info"]'
          )
        }
      };
    }
  },
  components: {
    // Layout,
    // PageHeader,
    CountTo,
    simplebar
  }
};
</script>

<template>
  <PageHeader :title="title" :items="items" />
  <BRow>
    <BCol cols="xxl" sm="6">
      <BCard no-body class="overflow-hidden">
        <BCardBody>
          <div class="avatar-sm float-end">
            <div
              class="avatar-title bg-primary-subtle text-primary fs-3xl rounded"
            >
              <i class="ph ph-briefcase" />
            </div>
          </div>
          <h4>
            <count-to
              :startVal="0"
              :duration="5000"
              :endVal="368.24"
              :decimals="2"
              prefix="$"
              suffix="M"
            />
          </h4>
          <p class="text-muted mb-4">Annual Profit</p>
          <p class="text-muted mb-0">
            <span class="badge bg-success-subtle text-success"
              ><i class="bi bi-arrow-up" /> 4.65%</span
            >
            vs last month
          </p>
        </BCardBody>
        <div
          class="progress progress-sm rounded-0"
          role="progressbar"
          aria-valuenow="76"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: 76%"></div>
        </div>
      </BCard>
    </BCol>
    <BCol cols="xxl" sm="6">
      <BCard no-body class="overflow-hidden">
        <BCardBody>
          <div class="avatar-sm float-end">
            <div
              class="avatar-title bg-secondary-subtle text-secondary fs-3xl rounded"
            >
              <i class="ph ph-wallet" />
            </div>
          </div>
          <h4>
            <count-to
              :startVal="0"
              :duration="5000"
              :endVal="1454.71"
              :decimals="2"
              prefix="$"
              suffix="k"
            />
          </h4>
          <p class="text-muted mb-4">Daily average income</p>
          <p class="text-muted mb-0">
            <span class="badge bg-success-subtle text-success"
              ><i class="bi bi-arrow-up" /> 1.33%</span
            >
            vs last month
          </p>
        </BCardBody>
        <div
          class="progress progress-sm rounded-0"
          role="progressbar"
          aria-valuenow="88"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-secondary" style="width: 88%"></div>
        </div>
      </BCard>
    </BCol>
    <BCol cols="xxl" sm="6">
      <BCard no-body class="overflow-hidden">
        <BCardBody>
          <div class="avatar-sm float-end">
            <div
              class="avatar-title bg-danger-subtle text-danger fs-3xl rounded"
            >
              <i class="bi bi-broadcast" />
            </div>
          </div>
          <h4>
            <count-to
              :startVal="0"
              :duration="5000"
              :endVal="33.37"
              :decimals="2"
              suffix="%"
            />
          </h4>
          <p class="text-muted mb-4">Lead Conversations</p>
          <p class="text-muted mb-0">
            <span class="badge bg-success-subtle text-success"
              ><i class="bi bi-arrow-up" /> 2.69%</span
            >
            vs last month
          </p>
        </BCardBody>
        <div
          class="progress progress-sm rounded-0"
          role="progressbar"
          aria-valuenow="18"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-danger" style="width: 18%"></div>
        </div>
      </BCard>
    </BCol>
    <BCol cols="xxl" sm="6">
      <BCard no-body class="overflow-hidden">
        <BCardBody>
          <div class="avatar-sm float-end">
            <div
              class="avatar-title bg-success-subtle text-success fs-3xl rounded"
            >
              <i class="ph ph-rocket-launch" />
            </div>
          </div>
          <h4>
            <count-to :startVal="0" :duration="5000" :endVal="648" />
          </h4>
          <p class="text-muted mb-4">Campaign Sent</p>
          <p class="text-muted mb-0">
            <span class="badge bg-danger-subtle text-danger"
              ><i class="bi bi-arrow-down" /> 0.78%</span
            >
            vs last month
          </p>
        </BCardBody>
        <div
          class="progress progress-sm rounded-0"
          role="progressbar"
          aria-valuenow="49"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-success" style="width: 49%"></div>
        </div>
      </BCard>
    </BCol>
    <BCol cols="xxl">
      <BCard no-body class="overflow-hidden">
        <BCardBody>
          <div class="avatar-sm float-end">
            <div
              class="avatar-title bg-warning-subtle text-warning fs-3xl rounded"
            >
              <i class="ph ph-heartbeat" />
            </div>
          </div>
          <h4>
            <count-to :startVal="0" :duration="5000" :endVal="1742" />
          </h4>
          <p class="text-muted mb-4">Annual Deals</p>
          <p class="text-muted mb-0">
            <span class="badge bg-success-subtle text-success"
              ><i class="bi bi-arrow-up" /> 7.93%</span
            >
            vs last month
          </p>
        </BCardBody>
        <div
          class="progress progress-sm rounded-0"
          role="progressbar"
          aria-valuenow="83"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-warning" style="width: 83%"></div>
        </div>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="3">
      <BCard no-body>
        <BCardHeader class="align-items-center d-flex">
          <BCardTitle title-tag="h6" class="mb-0 flex-grow-1"
            >Realized Rate</BCardTitle
          >
          <BDropdown
            class="card-header-dropdown flex-shrink-0"
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
          <apexchart
            class="apex-charts"
            height="403"
            dir="ltr"
            :series="realizedRateChart.series"
            :options="realizedRateChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="9">
      <BCard no-body class="card-height-100">
        <BCardHeader class="align-items-center d-flex">
          <BCardTitle title-tag="h6" class="mb-0 flex-grow-1">
            Balance Overview
          </BCardTitle>
          <div>
            <BButton variant="subtle-secondary me-1" size="sm"> ALL </BButton>
            <BButton variant="subtle-secondary me-1" size="sm"> 1M </BButton>
            <BButton variant="subtle-secondary me-1" size="sm"> 6M </BButton>
            <BButton variant="subtle-primary" size="sm"> 1Y </BButton>
          </div>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts ms-n3"
            height="300"
            dir="ltr"
            :series="balanceOverviewChart.series"
            :options="balanceOverviewChart.chartOptions"
          />

          <div class="table-responsive table-card mb-0 mt-2">
            <table
              class="table table-sm table-borderless align-middle text-center mb-0 table-nowrap"
            >
              <tbody>
                <tr>
                  <td class="text-start">
                    <i
                      class="bi bi-diamond-fill align-baseline me-1 text-primary"
                    />
                    Total Revenue
                  </td>
                  <th>$795.69k</th>
                  <td class="text-muted">
                    <span class="text-success"
                      ><i class="bi bi-caret-up-fill align-baseline me-1" />
                      6.19%</span
                    >
                    than last years
                  </td>
                  <td class="text-end" style="width: 150px">
                    <BLink
                      href="#!"
                      class="icon-link icon-link-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                      >View All <i class="bi bi-arrow-right"></i
                    ></BLink>
                  </td>
                </tr>
                <tr>
                  <td class="text-start">
                    <i
                      class="bi bi-diamond-fill align-baseline me-1 text-light"
                    />
                    Total Expenses
                  </td>
                  <th>$415.37k</th>
                  <td class="text-muted">
                    <span class="text-success"
                      ><i class="bi bi-caret-up-fill align-baseline me-1" />
                      3.62%</span
                    >
                    than last years
                  </td>
                  <td class="text-end" style="width: 150px">
                    <BLink
                      href="#!"
                      class="icon-link icon-link-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                      >View All <i class="bi bi-arrow-right"></i
                    ></BLink>
                  </td>
                </tr>
                <tr>
                  <td class="text-start">
                    <i
                      class="bi bi-diamond-fill align-baseline me-1 text-secondary"
                    />
                    Profit Ratio
                  </td>
                  <th>3.6%</th>
                  <td class="text-muted">
                    <span class="text-danger"
                      ><i class="bi bi-caret-down-fill align-baseline me-1" />
                      1.47%</span
                    >
                    than last years
                  </td>
                  <td class="text-end" style="width: 150px">
                    <BLink
                      href="#!"
                      class="icon-link icon-link-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                      >View All <i class="bi bi-arrow-right"></i
                    ></BLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="6">
      <BCard no-body id="leadsList">
        <BCardHeader class="align-items-center d-flex">
          <BCardTitle class="mb-0 flex-grow-1">Contact Leads</BCardTitle>
          <div class="flex-shrink-0">
            <BDropdown
              class="card-header-dropdown sortble-dropdown"
              toggle-class="text-reset dropdown-btn p-0"
              end
              no-caret
              variant="ghost-dark"
            >
              <template #button-content>
                <span class="fw-semibold text-uppercase fs-12"> Sort by: </span>
                <span class="text-muted dropdown-title">Leads Score</span>
                <i class="mdi mdi-chevron-down ms-1" />
              </template>
              <div class="dropdown-menu-end">
                <BLink
                  href="#"
                  class="dropdown-item sort"
                  data-sort="leads_score"
                >
                  Leads Score
                </BLink>
                <BLink
                  href="#"
                  class="dropdown-item sort"
                  data-sort="contact_name"
                >
                  Contact Name
                </BLink>
                <BLink
                  href="#"
                  class="dropdown-item sort"
                  data-sort="phone_number"
                >
                  Phone Number
                </BLink>
              </div>
            </BDropdown>
          </div>
        </BCardHeader>
        <BCardBody>
          <div class="table-responsive table-card my-0">
            <table
              class="table table-borderless table-centered align-middle table-nowrap mb-0"
            >
              <thead class="text-muted table-light">
                <tr>
                  <th
                    scope="col"
                    class="sort cursor-pointer"
                    data-sort="contact_name"
                  >
                    Contact Name
                  </th>
                  <th
                    scope="col"
                    class="sort cursor-pointer"
                    data-sort="phone_number"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    class="sort cursor-pointer"
                    data-sort="leads_score"
                  >
                    Leads Score
                  </th>
                  <th
                    scope="col"
                    class="sort cursor-pointer"
                    data-sort="location"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    class="sort cursor-pointer"
                    data-sort="create_date"
                  >
                    Create Date
                  </th>
                </tr>
              </thead>
              <tbody class="list">
                <tr v-for="(data, index) of resultQuery" :key="index">
                  <td>
                    <div class="d-flex align-items-center gap-2">
                      <img
                        :src="data.img"
                        alt="react.png"
                        class="avatar-xxs rounded"
                      />
                      <nuxt-link
                        to="/pages/profile"
                        class="text-reset contact_name"
                      >
                        {{ data.name }}
                      </nuxt-link>
                    </div>
                  </td>
                  <td class="phone_number">{{ data.phoneNumber }}</td>
                  <td class="leads_score">{{ data.score }}</td>
                  <td class="location">{{ data.location }}</td>
                  <td class="create_date">{{ data.date }}</td>
                </tr>
              </tbody>
              <!-- end tbody -->
            </table>
          </div>
          <div class="align-items-center mt-2 pt-2 row">
            <BCol cols="sm">
              <div class="text-muted text-center text-sm-start">
                Showing
                <span class="fw-semibold">{{ displayedPosts.length }}</span> of
                <span class="fw-semibold">{{ contactData.length }}</span>
                Results
              </div>
            </BCol>
            <BCol sm="auto" class="mt-3 mt-sm-0">
              <div
                class="pagination-wrap pagination-sm hstack gap-2 justify-content-center"
              >
                <BLink
                  class="page-item pagination-prev"
                  href="#"
                  v-if="page != 1"
                  @click="page--"
                >
                  <i class="bi bi-arrow-left" />
                </BLink>
                <ul class="pagination listjs-pagination mb-0">
                  <li
                    :class="{
                      active: pageNumber == page,
                      disabled: pageNumber == '...'
                    }"
                    v-for="(pageNumber, index) in pages"
                    :key="index"
                    @click="page = pageNumber"
                  >
                    <BLink class="page" href="#" data-i="1" data-page="10">{{
                      pageNumber
                    }}</BLink>
                  </li>
                </ul>
                <BLink
                  class="page-item pagination-next"
                  href="#"
                  v-if="page < pages.length"
                  @click="page++"
                >
                  <i class="bi bi-arrow-right" />
                </BLink>
              </div>
            </BCol>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="3" lg="6">
      <BCard no-body class="card-height-100">
        <BCardHeader class="align-items-center d-flex">
          <BCardTitle title-tag="h6" class="mb-0 flex-grow-1"
            >Email Sent</BCardTitle
          >
          <BDropdown
            class="card-header-dropdown flex-shrink-0"
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
          <apexchart
            class="apex-charts"
            height="365"
            dir="ltr"
            :series="emailSentChart.series"
            :options="emailSentChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="3" lg="6">
      <BCard no-body class="card-height-100">
        <BCardHeader class="align-items-center d-flex">
          <BCardTitle title-tag="h6" class="mb-0 flex-grow-1"
            >Users Activity</BCardTitle
          >
          <BDropdown
            class="card-header-dropdown flex-shrink-0"
            toggle-class="text-reset dropdown-btn p-0"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content>
              <span class="text-muted">
                This Month<i class="mdi mdi-chevron-down ms-1" />
              </span>
            </template>
            <div class="dropdown-menu-end">
              <BLink class="dropdown-item" href="#">This Month</BLink>
              <BLink class="dropdown-item" href="#">Last Month</BLink>
            </div>
          </BDropdown>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="330"
            dir="ltr"
            :series="usersActivityChart.series"
            :options="usersActivityChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="4">
      <BCard no-body>
        <BCardHeader class="align-items-center d-flex">
          <BCardTitle title-tag="h6" class="mb-0 flex-grow-1">
            Sync Status Breakdown
          </BCardTitle>
          <BDropdown
            class="card-header-dropdown flex-shrink-0"
            toggle-class="text-reset dropdown-btn p-0"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content>
              <span class="text-muted"
                >This Month<i class="mdi mdi-chevron-down ms-1"></i
              ></span>
            </template>
            <div class="dropdown-menu-end">
              <BLink class="dropdown-item" href="#">This Month</BLink>
              <BLink class="dropdown-item" href="#">Last Month</BLink>
            </div>
          </BDropdown>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="350"
            dir="ltr"
            :series="syncStatusBreakdownChart.series"
            :options="syncStatusBreakdownChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="4">
      <BCard no-body>
        <BCardHeader class="align-items-center d-flex">
          <BCardTitle title-tag="h6" class="mb-0 flex-grow-1">
            Open Deals
          </BCardTitle>
          <BDropdown
            class="card-header-dropdown flex-shrink-0"
            toggle-class="text-reset dropdown-btn p-0"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content>
              <span class="fw-semibold text-uppercase"> Sort by: </span>
              <span class="text-muted">
                Today<i class="mdi mdi-chevron-down ms-1" />
              </span>
            </template>
            <div class="dropdown-menu-end">
              <BLink class="dropdown-item" href="#">Today</BLink>
              <BLink class="dropdown-item" href="#">Yesterday</BLink>
              <BLink class="dropdown-item" href="#">Last 7 Days</BLink>
              <BLink class="dropdown-item" href="#">Last 30 Days</BLink>
              <BLink class="dropdown-item" href="#">This Month</BLink>
              <BLink class="dropdown-item" href="#">Last Month</BLink>
            </div>
          </BDropdown>
        </BCardHeader>
        <BCardBody class="px-0">
          <simplebar
            data-simplebar
            class="card-body py-0"
            style="max-height: 350px"
          >
            <div class="vstack gap-2">
              <div class="py-2 px-3 border border-dashed rounded">
                <div class="d-flex align-items-center gap-2">
                  <div class="flex-shrink-0">
                    <img
                      src="~/assets/images/users/avatar-10.jpg"
                      alt=""
                      class="avatar-sm rounded"
                    />
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <h6 class="fs-md text-truncate">
                      <BLink href="#!" class="text-reset"
                        >SASS app workflow diagram</BLink
                      >
                    </h6>
                    <p class="text-muted mb-0">
                      Closing Deal date 14 Jan, 2023
                    </p>
                  </div>
                  <div class="text-end">
                    <h5 class="fs-md text-primary mb-0">$49.99</h5>
                  </div>
                </div>
              </div>
              <div class="py-2 px-3 border border-dashed rounded">
                <div class="d-flex align-items-center gap-2">
                  <div class="flex-shrink-0">
                    <img
                      src="~/assets/images/users/avatar-9.jpg"
                      alt=""
                      class="avatar-sm rounded"
                    />
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <h6 class="fs-md text-truncate">
                      <BLink href="#!" class="text-reset"
                        >Steex - Admin Dashboard</BLink
                      >
                    </h6>
                    <p class="text-muted mb-0">
                      Closing Deal date 22 April, 2023
                    </p>
                  </div>
                  <div class="text-end">
                    <h5 class="fs-md text-primary mb-0">$132.94</h5>
                  </div>
                </div>
              </div>
              <div class="py-2 px-3 border border-dashed rounded">
                <div class="d-flex align-items-center gap-2">
                  <div class="flex-shrink-0">
                    <img
                      src="~/assets/images/users/avatar-8.jpg"
                      alt=""
                      class="avatar-sm rounded"
                    />
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <h6 class="fs-md text-truncate">
                      <BLink href="#!" class="text-reset"
                        >Create New Components</BLink
                      >
                    </h6>
                    <p class="text-muted mb-0">
                      Closing Deal date 29 April, 2023
                    </p>
                  </div>
                  <div class="text-end">
                    <h5 class="fs-md text-primary mb-0">$349.99</h5>
                  </div>
                </div>
              </div>
              <div class="py-2 px-3 border border-dashed rounded">
                <div class="d-flex align-items-center gap-2">
                  <div class="flex-shrink-0">
                    <img
                      src="~/assets/images/users/avatar-7.jpg"
                      alt=""
                      class="avatar-sm rounded"
                    />
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <h6 class="fs-md text-truncate">
                      <BLink href="#!" class="text-reset"
                        >New Email Design Templates</BLink
                      >
                    </h6>
                    <p class="text-muted mb-0">
                      Closing Deal date 23 March, 2023
                    </p>
                  </div>
                  <div class="text-end">
                    <h5 class="fs-md text-primary mb-0">$258.73</h5>
                  </div>
                </div>
              </div>
              <div class="py-2 px-3 border border-dashed rounded">
                <div class="d-flex align-items-center gap-2">
                  <div class="flex-shrink-0">
                    <img
                      src="~/assets/images/users/avatar-6.jpg"
                      alt=""
                      class="avatar-sm rounded"
                    />
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <h6 class="fs-md text-truncate">
                      <BLink href="#!" class="text-reset"
                        >Urban Modern Design</BLink
                      >
                    </h6>
                    <p class="text-muted mb-0">
                      Closing Deal date 17 March, 2023
                    </p>
                  </div>
                  <div class="text-end">
                    <h5 class="fs-md text-primary mb-0">$374.61</h5>
                  </div>
                </div>
              </div>
              <div class="py-2 px-3 border border-dashed rounded">
                <div class="d-flex align-items-center gap-2">
                  <div class="flex-shrink-0">
                    <img
                      src="~/assets/images/users/avatar-4.jpg"
                      alt=""
                      class="avatar-sm rounded"
                    />
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <h6 class="fs-md text-truncate">
                      <BLink href="#!" class="text-reset"
                        >Airbnb React Development</BLink
                      >
                    </h6>
                    <p class="text-muted mb-0">
                      Closing Deal date 03 Feb, 2023
                    </p>
                  </div>
                  <div class="text-end">
                    <h5 class="fs-md text-primary mb-0">$976.07</h5>
                  </div>
                </div>
              </div>
            </div>
          </simplebar>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="4">
      <BCard no-body>
        <BCardHeader class="align-items-center d-flex">
          <BCardTitle title-tag="h6" class="mb-0 flex-grow-1">
            Create Tasks List
          </BCardTitle>
          <BDropdown
            class="card-header-dropdown flex-shrink-0"
            toggle-class="text-reset dropdown-btn p-0"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content>
              <span class="fw-semibold text-uppercase"> Sort by: </span>
              <span class="text-muted">
                Today<i class="mdi mdi-chevron-down ms-1" />
              </span>
            </template>
            <div class="dropdown-menu-end">
              <BLink class="dropdown-item" href="#">Today</BLink>
              <BLink class="dropdown-item" href="#">Yesterday</BLink>
              <BLink class="dropdown-item" href="#">Last 7 Days</BLink>
              <BLink class="dropdown-item" href="#">Last 30 Days</BLink>
              <BLink class="dropdown-item" href="#">This Month</BLink>
              <BLink class="dropdown-item" href="#">Last Month</BLink>
            </div>
          </BDropdown>
        </BCardHeader>
        <BCardBody class="px-0">
          <simplebar
            data-simplebar
            class="card-body py-0"
            style="max-height: 350px"
          >
            <ul class="list-group list-group-flush">
              <li class="list-group-item ps-0">
                <div class="d-flex align-items-start">
                  <div class="form-check ps-0 flex-sharink-0">
                    <input
                      type="checkbox"
                      class="form-check-input ms-0"
                      id="task_one"
                    />
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <label class="form-check-label mb-0 ps-2" for="task_one">
                      <span class="d-block fw-semibold mb-1 text-truncate"
                        >Review and make sure nothing slips through cracks</span
                      >
                      <span class="text-muted d-block"
                        >If someone cracks, they lose control of their emotions
                        or actions because they are under a lot of
                        pressure.</span
                      >
                    </label>
                  </div>
                  <div class="flex-shrink-0 ms-2">
                    <p class="text-muted fs-xs fw-medium mb-0">15 Sep, 2023</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item ps-0">
                <div class="d-flex align-items-start">
                  <div class="form-check ps-0 flex-sharink-0">
                    <input
                      type="checkbox"
                      class="form-check-input ms-0"
                      id="task_two"
                    />
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <label class="form-check-label mb-0 ps-2" for="task_two">
                      <span class="d-block fw-semibold mb-1 text-truncate"
                        >Send meeting invites for sales campaign</span
                      >
                      <span class="text-muted d-block"
                        >I will send you a meeting invite" is grammatically
                        incorrect. Invite is a verb and invitation is the
                        noun.</span
                      >
                    </label>
                  </div>
                  <div class="flex-shrink-0 ms-2">
                    <p class="text-muted fs-xs fw-medium mb-0">20 Sep, 2023</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item ps-0">
                <div class="d-flex align-items-start">
                  <div class="form-check flex-sharink-0 ps-0">
                    <input
                      type="checkbox"
                      class="form-check-input ms-0"
                      id="task_three"
                    />
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <label class="form-check-label mb-0 ps-2" for="task_three">
                      <span class="d-block fw-semibold mb-1 text-truncate"
                        >Make a creating an account profile</span
                      >
                      <span class="text-muted d-block"
                        >Like any other essay, a profile essay has three main
                        parts, the introduction, body, and conclusion.</span
                      >
                    </label>
                  </div>
                  <div class="flex-shrink-0 ms-2">
                    <p class="text-muted fs-xs fw-medium mb-0">08 Feb, 2023</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item ps-0">
                <div class="d-flex align-items-start">
                  <div class="form-check ps-0 flex-sharink-0">
                    <input
                      type="checkbox"
                      class="form-check-input ms-0"
                      id="task_four"
                    />
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <label class="form-check-label mb-0 ps-2" for="task_four">
                      <span class="d-block fw-semibold mb-1 text-truncate"
                        >Change email option process</span
                      >
                      <span class="text-muted d-block"
                        >If people have you saved as something else in their
                        contacts, that's the name they'll see.</span
                      >
                    </label>
                  </div>
                  <div class="flex-shrink-0 ms-2">
                    <p class="text-muted fs-xs fw-medium mb-0">19 Jan, 2023</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item ps-0">
                <div class="d-flex align-items-start">
                  <div class="form-check ps-0 flex-sharink-0">
                    <input
                      type="checkbox"
                      class="form-check-input ms-0"
                      id="task_five"
                    />
                  </div>
                  <div class="flex-grow-1 overflow-hidden">
                    <label class="form-check-label mb-0 ps-2" for="task_five">
                      <span class="d-block fw-semibold mb-1 text-truncate"
                        >Additional Calendar</span
                      >
                      <span class="text-muted d-block"
                        >Employees can use shared calendars to manage their own
                        assignments and appointments</span
                      >
                    </label>
                  </div>
                  <div class="flex-shrink-0 ms-2">
                    <p class="text-muted fs-xs fw-medium mb-0">03 Jan, 2023</p>
                  </div>
                </div>
              </li>
            </ul>
          </simplebar>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>
../../../components/dashboard/crm/chartsData

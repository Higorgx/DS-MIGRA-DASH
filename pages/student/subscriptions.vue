<script>
import appConfig from "~/app.config";
import { studentsSubscriptionList } from "@/common/data";

export default {
  page: {
    title: "My Subscriptions",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      title: "My Subscriptions",
      items: [
        {
          text: "Students",
          href: "/"
        },
        {
          text: "My Subscriptions",
          active: true
        }
      ],
      searchQuery: null,
      subscriptionList: studentsSubscriptionList
    };
  },
  computed: {
    displayedPosts() {
      return this.subscriptionList;
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.category.toLowerCase().includes(search) ||
            data.course.toLowerCase().includes(search) ||
            data.price.toString().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    }
  },
};
</script>

<template>
  <PageHeader :title="title" :items="items" />
  <BRow id="subscriptionList">
    <BCol lg="12">
      <BCard no-body>
        <BCardBody>
          <BRow class="align-items-center g-3">
            <BCol xxl="3" lg="6" class="me-auto">
              <BCardTitle title-tag="h6">My Subscriptions</BCardTitle>
              <p class="text-muted mb-0">
                Monthly: <b class="text-primary-emphasis">$326.95</b> Yearly:
                <b class="text-primary-emphasis">$1452.32</b>
              </p>
            </BCol>
            <BCol xxl="3">
              <div class="search-box">
                <input
                  type="text"
                  class="form-control search"
                  placeholder="Search courses, category price etc..."
                  v-model="searchQuery"
                />
                <i class="ri-search-line search-icon"></i>
              </div>
            </BCol>
            <BCol xxl="auto" cols="auto">
              <nuxt-link to="/learning/list" class="btn btn-primary"
                ><i class="bi bi-plus-circle align-baseline me-1"></i> Add
                New</nuxt-link
              >
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol lg="12">
      <div class="table-responsive">
        <table
          class="table table-custom align-middle table-borderless table-nowrap"
        >
          <thead>
            <tr>
              <th scope="col" class="sort cursor-pointer" data-sort="plan">
                Plan
              </th>
              <th scope="col" class="sort cursor-pointer" data-sort="price">
                Price
              </th>
              <th scope="col" class="sort cursor-pointer" data-sort="duration">
                Duration
              </th>
              <th scope="col" class="sort cursor-pointer" data-sort="status">
                Status
              </th>
              <th
                scope="col"
                class="sort cursor-pointer"
                data-sort="payment_due"
              >
                Payment Due
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody class="list">
            <tr v-for="(data, index) of resultQuery" :key="index">
              <td scope="row">
                <div class="d-flex align-items-center gap-2">
                  <div class="flex-shrink-0">
                    <div class="avatar-sm">
                      <div
                        :class="data.backgroundColor + ' avatar-title rounded'"
                      >
                        <img :src="data.logoImg" alt="" class="avatar-xxs" />
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="fs-md mb-2 plan">{{ data.course }}</h6>
                    <p class="text-muted mb-0">{{ data.category }}</p>
                  </div>
                </div>
              </td>
              <td class="price">{{ data.price }}</td>
              <td class="duration">{{ data.duration }}</td>
              <td class="status" v-if="data.status == 'Active'">
                <span class="badge bg-success-subtle text-success status">{{
                  data.status
                }}</span>
              </td>
              <td class="status" v-if="data.status == 'Unactive'">
                <span class="badge bg-danger-subtle text-danger status">{{
                  data.status
                }}</span>
              </td>
              <td>
                <p :class="data.textColor + ' mb-0 payment_due'">
                  <i class="bi bi-clock align-baseline me-1"></i>
                  {{ data.paymentDue }}
                </p>
              </td>
              <td v-if="data.status == 'Active'">
                <BLink
                  href="#!"
                  class="text-decoration-underline"
                  v-if="data.action == 'Renew Now'"
                  >{{ data.action }}</BLink
                >
                <p
                  class="mb-0 text-muted"
                  disabled
                  v-if="data.action == 'Pay Now'"
                >
                  {{ data.action }}
                </p>
              </td>
              <td v-if="data.status == 'Unactive'">
                <BLink href="#!" class="text-decoration-underline">{{
                  data.action
                }}</BLink>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="noresult" v-if="resultQuery.length < 1">
          <div class="text-center py-4">
            <div class="avatar-md mx-auto mb-4">
              <div
                class="avatar-title bg-light text-primary rounded-circle fs-4xl"
              >
                <i class="bi bi-search"></i>
              </div>
            </div>
            <h5 class="mt-2">Sorry! No Result Found</h5>
            <p class="text-muted mb-0">
              We've searched more than 150+ products We did not find any
              products for you search.
            </p>
          </div>
        </div>
      </div>
    </BCol>
  </BRow>
</template>

<script>
import appConfig from "~/app.config";

export default {
  page: {
    title: "Shop Cart",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      title: "Shop Cart",
      items: [
        {
          text: "Ecommerce",
          href: "/"
        },
        {
          text: "Shop Cart",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <PageHeader :title="title" :items="items" />
  <BRow class="justify-content-center">
    <BCol xxl="10">
      <BCard no-body>
        <BRow class="g-0 product-list">
          <BCol xxl="9">
            <BCardHeader class="d-flex align-items-center gap-2">
              <BCardTitle title-tag="h5" class="flex-grow-1 mb-0"
                >Shopping Cart</BCardTitle
              >
              <div class="flex-shrink-0">
                <span class="badge bg-danger-subtle text-danger">5 Items</span>
              </div>
            </BCardHeader>
            <BCardBody>
              <div class="table-responsive">
                <table
                  class="table align-middle table-nowrap table-borderless mb-0"
                >
                  <thead class="table-active">
                    <tr>
                      <th>Product Items</th>
                      <th>Item Price</th>
                      <th>Quantity</th>
                      <th class="text-end">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="product">
                      <td>
                        <div
                          class="product-item d-flex align-items-center gap-3"
                        >
                          <div class="avatar-md flex-shrink-0">
                            <div class="avatar-title bg-light rounded">
                              <img
                                src="@/assets/images/products/img-1.png"
                                alt=""
                                class="avatar-sm"
                              />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="fs-md mb-1">
                              <nuxt-link
                                to="/ecommerce/product-details"
                                class="text-reset"
                                >Branded T-Shirts</nuxt-link
                              >
                            </h6>
                            <p class="text-muted mb-2">
                              <BLink href="#!" class="text-reset"
                                >Fashion</BLink
                              >
                            </p>
                            <p class="mb-0">
                              <span class="text-muted">Size:</span> XL
                              <span class="text-muted">Color:</span> Blue
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>$<span class="product-price">161.25</span></td>
                      <td>
                        <div class="input-step">
                          <BButton type="button" variant="none" class="minus"
                            >–</BButton
                          >
                          <input
                            type="number"
                            class="product-quantity"
                            value="3"
                            min="0"
                            max="100"
                            readonly
                          />
                          <BButton type="button" variant="none" class="plus"
                            >+</BButton
                          >
                        </div>
                      </td>
                      <td class="fw-medium text-end">
                        $<span class="product-line-price">483.75</span>
                      </td>
                    </tr>
                    <tr class="product">
                      <td>
                        <div
                          class="product-item d-flex align-items-center gap-3"
                        >
                          <div class="avatar-md flex-shrink-0">
                            <div class="avatar-title bg-light rounded">
                              <img
                                src="@/assets/images/products/img-3.png"
                                alt=""
                                class="avatar-sm"
                              />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="fs-md mb-1">
                              <nuxt-link
                                to="/ecommerce/product-details"
                                class="text-reset"
                                >Fossil gen 5E smart watch</nuxt-link
                              >
                            </h6>
                            <p class="text-muted mb-2">
                              <BLink href="#!" class="text-reset">Watchs</BLink>
                            </p>
                            <p class="mb-0">
                              <span class="text-muted">Color:</span> White
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>$<span class="product-price">69.60</span></td>
                      <td>
                        <div class="input-step">
                          <BButton type="button" variant="none" class="minus"
                            >–</BButton
                          >
                          <input
                            type="number"
                            class="product-quantity"
                            value="2"
                            min="0"
                            max="100"
                            readonly
                          />
                          <BButton type="button" variant="none" class="plus"
                            >+</BButton
                          >
                        </div>
                      </td>
                      <td class="fw-medium text-end">
                        $<span class="product-line-price">139.20</span>
                      </td>
                    </tr>
                    <tr class="product">
                      <td>
                        <div
                          class="product-item d-flex align-items-center gap-3"
                        >
                          <div class="avatar-md flex-shrink-0">
                            <div class="avatar-title bg-light rounded">
                              <img
                                src="@/assets/images/products/img-6.png"
                                alt=""
                                class="avatar-sm"
                              />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="fs-md mb-1">
                              <nuxt-link
                                to="/ecommerce/product-details"
                                class="text-reset"
                                >Olive Printed Men Round Neck</nuxt-link
                              >
                            </h6>
                            <p class="text-muted mb-2">
                              <BLink href="#!" class="text-reset"
                                >Fashion</BLink
                              >
                            </p>
                            <p class="mb-0">
                              <span class="text-muted">Size:</span> M
                              <span class="text-muted">Color:</span> Brown
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>$<span class="product-price">250.00</span></td>
                      <td>
                        <div class="input-step">
                          <BButton type="button" variant="none" class="minus"
                            >–</BButton
                          >
                          <input
                            type="number"
                            class="product-quantity"
                            value="6"
                            min="0"
                            max="100"
                            readonly
                          />
                          <BButton type="button" variant="none" class="plus"
                            >+</BButton
                          >
                        </div>
                      </td>
                      <td class="fw-medium text-end">
                        $<span class="product-line-price">1500.00</span>
                      </td>
                    </tr>
                    <tr class="product">
                      <td>
                        <div
                          class="product-item d-flex align-items-center gap-3"
                        >
                          <div class="avatar-md flex-shrink-0">
                            <div class="avatar-title bg-light rounded">
                              <img
                                src="@/assets/images/products/img-9.png"
                                alt=""
                                class="avatar-sm"
                              />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="fs-md mb-1">
                              <nuxt-link
                                to="/ecommerce/product-details"
                                class="text-reset"
                                >Flip-Flops and House Slippers</nuxt-link
                              >
                            </h6>
                            <p class="text-muted mb-2">
                              <BLink href="#!" class="text-reset"
                                >Footwear</BLink
                              >
                            </p>
                            <p class="mb-0">
                              <span class="text-muted">Size:</span> 8
                              <span class="text-muted">Color:</span> Green
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>$<span class="product-price">150.00</span></td>
                      <td>
                        <div class="input-step">
                          <BButton type="button" variant="none" class="minus"
                            >–</BButton
                          >
                          <input
                            type="number"
                            class="product-quantity"
                            value="1"
                            min="0"
                            max="100"
                            readonly
                          />
                          <BButton type="button" variant="none" class="plus"
                            >+</BButton
                          >
                        </div>
                      </td>
                      <td class="fw-medium text-end">
                        $<span class="product-line-price">150.00</span>
                      </td>
                    </tr>
                    <tr class="product">
                      <td>
                        <div
                          class="product-item d-flex align-items-center gap-3"
                        >
                          <div class="avatar-md flex-shrink-0">
                            <div class="avatar-title bg-light rounded">
                              <img
                                src="@/assets/images/products/img-2.png"
                                alt=""
                                class="avatar-sm"
                              />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="fs-md mb-1">
                              <nuxt-link
                                to="/ecommerce/product-details"
                                class="text-reset"
                                >Like style travel black handbag</nuxt-link
                              >
                            </h6>
                            <p class="text-muted mb-2">
                              <BLink href="#!" class="text-reset"
                                >Luggage</BLink
                              >
                            </p>
                            <p class="mb-0">
                              <span class="text-muted">Color:</span> Green
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>$<span class="product-price">89.99</span></td>
                      <td>
                        <div class="input-step">
                          <BButton type="button" variant="none" class="minus"
                            >–</BButton
                          >
                          <input
                            type="number"
                            class="product-quantity"
                            value="0"
                            min="0"
                            max="100"
                            readonly
                          />
                          <BButton type="button" variant="none" class="plus"
                            >+</BButton
                          >
                        </div>
                      </td>
                      <td class="fw-medium text-end">
                        $<span class="product-line-price">00.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </BCardBody>
          </BCol>
          <BCol xxl="3">
            <div class="border-start-xxl border-top-xxl-0 border-top h-100">
              <BCardHeader>
                <BCardTitle title-tag="h5" class="mb-0"
                  >Order Summary</BCardTitle
                >
              </BCardHeader>
              <BCardBody class="mt-2">
                <div class="table-responsive table-card">
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td class="fw-semibold" colspan="2">Sub Total :</td>
                        <td class="fw-semibold text-end cart-subtotal">
                          $2,272.95
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          Discount <span class="text-muted">(STEEX30)</span> :
                        </td>
                        <td class="text-end cart-discount">- $681.89</td>
                      </tr>
                      <tr>
                        <td colspan="2">Shipping Charge :</td>
                        <td class="text-end cart-shipping">$49.99</td>
                      </tr>
                      <tr>
                        <td colspan="2">Estimated Tax (18%):</td>
                        <td class="text-end cart-tax">$409.13</td>
                      </tr>
                      <tr>
                        <th colspan="2">Total (USD) :</th>
                        <td class="text-end">
                          <span class="fw-semibold cart-total">
                            $2,050.18
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="text-end mt-4">
                  <nuxt-link
                    to="/ecommerce/products-grid"
                    class="btn btn-secondary me-1"
                    >Continue Shopping</nuxt-link
                  >
                  <nuxt-link to="/ecommerce/checkout" class="btn btn-primary"
                    >Checkout</nuxt-link
                  >
                </div>
              </BCardBody>
            </div>
          </BCol>
        </BRow>
      </BCard>
    </BCol>
  </BRow>
</template>

<script>
import simplebar from "simplebar-vue";

export default {
  data() {
    return {
      removeCartModal: false
    };
  },
  components: {
    simplebar
  },
  methods: {
    removeProduct(element) {
      this.removeCartModal = true;
      document
        .getElementById("remove-cartproduct")
        .addEventListener("click", function () {
          if (element.target.parentElement.parentElement.closest(".product")) {
            element.target.parentElement.parentElement
              .closest(".product")
              .remove();

            document.querySelector("#removeCartModal .btn-close").click();

            Array.from(document.querySelectorAll(".cartitem-badge")).forEach(
              (badge) => {
                badge.innerHTML = document.querySelectorAll(".product").length;
              }
            );
            if (document.querySelectorAll(".product").length === 0) {
              if (document.getElementById("empty-cart")) {
                document.getElementById("empty-cart").style.display = "block";
              }
              if (
                document.getElementById("checkout-elem") ||
                document.getElementById("count-table")
              ) {
                document.getElementById("checkout-elem").style.display = "none";
                document.getElementById("count-table").style.display = "none";
              }
            }
          }
        });
    }
  }
};
</script>
<template>
  <BDropdown
    class="dropdown topbar-head-dropdown header-item"
    toggle-class="rounded-circle"
    variant="ghost-dark"
    no-caret
    end
    auto-close="outside"
  >
    <template #button-content>
      <i class="bi bi-bag fs-2xl"></i>
      <span
        class="position-absolute topbar-badge cartitem-badge fs-3xs translate-middle badge rounded-pill bg-info"
      >
        5
      </span>
    </template>
    <div class="dropdown-menu-xl dropdown-menu-end p-0 product-list">
      <div class="p-3 border-bottom">
        <BRow class="align-items-center">
          <BCol>
            <h6 class="m-0 fs-lg fw-semibold">
              My Cart
              <span class="badge bg-secondary fs-sm cartitem-badge ms-1"
                >7</span
              >
            </h6>
          </BCol>
          <BCol cols="auto">
            <BLink href="#!">View All</BLink>
          </BCol>
        </BRow>
      </div>
      <simplebar data-simplebar style="max-height: 300px">
        <div class="p-3">
          <div class="text-center empty-cart" id="empty-cart">
            <div class="avatar-md mx-auto my-3">
              <div
                class="avatar-title bg-info-subtle text-info fs-2 rounded-circle"
              >
                <i class="bx bx-cart"></i>
              </div>
            </div>
            <h5 class="mb-3">Your Cart is Empty!</h5>
            <BLink href="#!" class="btn btn-success w-md mb-3">Shop Now</BLink>
          </div>

          <div class="d-block dropdown-item product text-wrap p-2">
            <div class="d-flex">
              <div class="avatar-sm me-3 flex-shrink-0">
                <div class="avatar-title bg-light rounded">
                  <img
                    src="@/assets/images/products/img-1.png"
                    class="avatar-xs"
                    alt="user-pic"
                  />
                </div>
              </div>
              <div class="flex-grow-1">
                <p class="mb-1 fs-sm text-muted">Fashion</p>
                <h6 class="mt-0 mb-3 fs-md">
                  <BLink href="#!" class="text-reset"
                    >Blive Printed Men Round Neck</BLink
                  >
                </h6>
                <div class="text-muted fw-medium d-none">
                  $<span class="product-price">327.49</span>
                </div>
                <div class="input-step">
                  <BButton type="button" variant="white" class="minus">
                    –
                  </BButton>
                  <input
                    type="number"
                    class="product-quantity"
                    value="2"
                    min="0"
                    max="100"
                    readonly
                  />
                  <BButton type="button" variant="white" class="plus"
                    >+</BButton
                  >
                </div>
              </div>
              <div
                class="ps-2 d-flex flex-column justify-content-between align-items-end"
              >
                <BButton
                  type="button"
                  variant="ghost-primary"
                  size="sm"
                  class="btn-icon remove-cart-btn"
                  @click="removeProduct"
                >
                  <i class="ri-close-fill fs-lg" />
                </BButton>
                <h5 class="mb-0">
                  $ <span class="product-line-price">654.98</span>
                </h5>
              </div>
            </div>
          </div>

          <div class="d-block dropdown-item product text-wrap p-2">
            <div class="d-flex">
              <div class="avatar-sm me-3 flex-shrink-0">
                <div class="avatar-title bg-light rounded">
                  <img
                    src="@/assets/images/products/img-5.png"
                    class="avatar-xs"
                    alt="user-pic"
                  />
                </div>
              </div>
              <div class="flex-grow-1">
                <p class="mb-1 fs-sm text-muted">Sportwear</p>
                <h6 class="mt-0 mb-3 fs-md">
                  <BLink href="#!" class="text-reset"
                    >Willage Volleyball Ball</BLink
                  >
                </h6>
                <div class="text-muted fw-medium d-none">
                  $<span class="product-price">49.06</span>
                </div>
                <div class="input-step">
                  <BButton variant="white" type="button" class="minus"
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
                  <BButton variant="white" type="button" class="plus"
                    >+</BButton
                  >
                </div>
              </div>
              <div
                class="ps-2 d-flex flex-column justify-content-between align-items-end"
              >
                <BButton
                  type="button"
                  size="sm"
                  variant="ghost-primary"
                  class="btn-icon remove-cart-btn"
                  @click="removeProduct"
                  ><i class="ri-close-fill fs-lg"></i
                ></BButton>
                <h5 class="mb-0">
                  $ <span class="product-line-price">147.18</span>
                </h5>
              </div>
            </div>
          </div>

          <div class="d-block dropdown-item product text-wrap p-2">
            <div class="d-flex">
              <div class="avatar-sm me-3 flex-shrink-0">
                <div class="avatar-title bg-light rounded">
                  <img
                    src="@/assets/images/products/img-10.png"
                    class="avatar-xs"
                    alt="user-pic"
                  />
                </div>
              </div>
              <div class="flex-grow-1">
                <p class="mb-1 fs-sm text-muted">Fashion</p>
                <h6 class="mt-0 mb-3 fs-md">
                  <BLink href="#!" class="text-reset"
                    >Cotton collar tshirts for men</BLink
                  >
                </h6>
                <div class="text-muted fw-medium d-none">
                  $<span class="product-price">53.33</span>
                </div>
                <div class="input-step">
                  <BButton variant="white" type="button" class="minus"
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
                  <BButton variant="white" type="button" class="plus"
                    >+</BButton
                  >
                </div>
              </div>
              <div
                class="ps-2 d-flex flex-column justify-content-between align-items-end"
              >
                <BButton
                  type="button"
                  size="sm"
                  variant="ghost-primary"
                  class="btn-icon remove-cart-btn"
                  @click="removeProduct"
                  ><i class="ri-close-fill fs-lg"></i
                ></BButton>
                <h5 class="mb-0">
                  $ <span class="product-line-price">159.99</span>
                </h5>
              </div>
            </div>
          </div>

          <div class="d-block dropdown-item product text-wrap p-2">
            <div class="d-flex">
              <div class="avatar-sm me-3 flex-shrink-0">
                <div class="avatar-title bg-light rounded">
                  <img
                    src="@/assets/images/products/img-11.png"
                    class="avatar-xs"
                    alt="user-pic"
                  />
                </div>
              </div>
              <div class="flex-grow-1">
                <p class="mb-1 fs-sm text-muted">Fashion</p>
                <h6 class="mt-0 mb-3 fs-md">
                  <BLink href="#!" class="text-reset"
                    >Jeans blue men boxer</BLink
                  >
                </h6>
                <div class="text-muted fw-medium d-none">
                  $<span class="product-price">164.37</span>
                </div>
                <div class="input-step">
                  <BButton variant="white" type="button" class="minus"
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
                  <BButton variant="white" type="button" class="plus"
                    >+</BButton
                  >
                </div>
              </div>
              <div
                class="ps-2 d-flex flex-column justify-content-between align-items-end"
              >
                <BButton
                  type="button"
                  variant="ghost-primary"
                  size="sm"
                  class="btn-icon remove-cart-btn"
                  @click="removeProduct"
                  ><i class="ri-close-fill fs-lg"></i
                ></BButton>
                <h5 class="mb-0">
                  $ <span class="product-line-price">164.37</span>
                </h5>
              </div>
            </div>
          </div>

          <div class="d-block dropdown-item product text-wrap p-2">
            <div class="d-flex">
              <div class="avatar-sm me-3 flex-shrink-0">
                <div class="avatar-title bg-light rounded">
                  <img
                    src="@/assets/images/products/img-8.png"
                    class="avatar-xs"
                    alt="user-pic"
                  />
                </div>
              </div>
              <div class="flex-grow-1">
                <p class="mb-1 fs-sm text-muted">Fashion</p>
                <h6 class="mt-0 mb-3 fs-md">
                  <BLink href="#!" class="text-reset"
                    >Full Sleeve Solid Men Sweatshirt</BLink
                  >
                </h6>
                <div class="text-muted fw-medium d-none">
                  $<span class="product-price">180.00</span>
                </div>
                <div class="input-step">
                  <BButton variant="white" type="button" class="minus"
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
                  <BButton variant="white" type="button" class="plus"
                    >+</BButton
                  >
                </div>
              </div>
              <div
                class="ps-2 d-flex flex-column justify-content-between align-items-end"
              >
                <BButton
                  type="button"
                  variant="ghost-primary"
                  size="sm"
                  class="btn-icon remove-cart-btn"
                  @click="removeProduct"
                  ><i class="ri-close-fill fs-lg"></i
                ></BButton>
                <h5 class="mb-0">
                  $ <span class="product-line-price">180.00</span>
                </h5>
              </div>
            </div>
          </div>

          <div id="count-table">
            <table class="table table-borderless mb-0 fw-semibold">
              <tbody>
                <tr>
                  <td>Sub Total :</td>
                  <td class="text-end cart-subtotal">$1306.52</td>
                </tr>
                <tr>
                  <td>Discount <span class="text-muted">(Steex15)</span>:</td>
                  <td class="text-end cart-discount">- $195.98</td>
                </tr>
                <tr>
                  <td>Shipping Charge :</td>
                  <td class="text-end cart-shipping">$65.00</td>
                </tr>
                <tr>
                  <td>Estimated Tax (12.5%) :</td>
                  <td class="text-end cart-tax">$163.31</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </simplebar>
      <div
        class="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border"
        id="checkout-elem"
      >
        <div class="d-flex justify-content-between align-items-center pb-3">
          <h5 class="m-0 text-muted">Total:</h5>
          <div class="px-2">
            <h5 class="m-0 cart-total">$1338.86</h5>
          </div>
        </div>

        <nuxt-link
          to="/ecommerce/checkout"
          class="btn btn-info text-center w-100"
        >
          Checkout
        </nuxt-link>
      </div>
    </div>
  </BDropdown>

  <BModal
    v-model="removeCartModal"
    hide-footer
    centered
    class="zoomIn"
    body-class="p-md-5"
    id="removeCartModal"
  >
    <div class="text-center">
      <div class="text-danger">
        <i class="bi bi-trash display-5"></i>
      </div>
      <div class="mt-4">
        <h4>Are you sure ?</h4>
        <p class="text-muted mx-4 mb-0">
          Are you sure you want to remove this product ?
        </p>
      </div>
    </div>
    <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
      <BButton
        type="button"
        variant="light"
        class="w-sm"
        @click="removeCartModal = false"
        >Close</BButton
      >
      <BButton
        type="button"
        variant="danger"
        class="w-sm"
        id="remove-cartproduct"
        >Yes, Delete It!</BButton
      >
    </div>
  </BModal>
</template>

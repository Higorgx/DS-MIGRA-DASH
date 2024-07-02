<script>
import simplebar from "simplebar-vue";

export default {
  data() {
    return {
      removeNotificationModal: false
    };
  },
  components: {
    simplebar
  },
  mounted() {
    // count notifications
    Array.from(document.querySelectorAll(".notification-check input")).forEach(
      function (element) {
        element.addEventListener("change", function (el) {
          el.target.closest(".notification-item").classList.toggle("active");

          var checkedCount = document.querySelectorAll(
            ".notification-check input:checked"
          ).length;

          if (
            el.target.closest(".notification-item").classList.contains("active")
          ) {
            checkedCount > 0
              ? (document.getElementById("notification-actions").style.display =
                  "block")
              : (document.getElementById("notification-actions").style.display =
                  "none");
          } else {
            checkedCount > 0
              ? (document.getElementById("notification-actions").style.display =
                  "block")
              : (document.getElementById("notification-actions").style.display =
                  "none");
          }
          document.getElementById("select-content").innerHTML = checkedCount;
        });

        var notificationDropdown = document.getElementById(
          "notificationDropdown"
        );
        if (notificationDropdown) {
          notificationDropdown.addEventListener(
            "hide.bs.dropdown",
            function () {
              element.checked = false;
              document
                .querySelectorAll(".notification-item")
                .forEach(function (item) {
                  item.classList.remove("active");
                });
              document.getElementById("notification-actions").style.display =
                "";
            }
          );
        }
      }
    );
  },
  methods: {
    deleteNotification() {
      this.removeNotificationModal = true;
      document
        .getElementById("delete-notification")
        .addEventListener("click", function () {
          Array.from(document.querySelectorAll(".notification-item")).forEach(
            function (element) {
              if (element.classList.contains("active")) {
                element.remove();
              }
              Array.from(
                document.querySelectorAll(".notification-badge")
              ).forEach(function (item) {
                item.innerHTML = document.querySelectorAll(
                  ".notification-check input"
                ).length;
              });
              Array.from(
                document.querySelectorAll(".notification-unread")
              ).forEach(function (item) {
                item.innerHTML = document.querySelectorAll(
                  ".notification-item.unread-message"
                ).length;
              });
            }
          );
          document.querySelector("#removeNotificationModal .btn-close").click();

          if (document.querySelectorAll(".notification-item").length === 0) {
            document
              .querySelectorAll(".notification-title")
              .forEach(function (item) {
                item.style.display = "none";
              });

            var emptyNotificationElem = document.querySelector(
              "#notificationItemsTabContent .empty-notification-elem"
            );
            if (
              !emptyNotificationElem &&
              document.getElementById("notificationItemsTabContent")
            ) {
              document.getElementById(
                "notificationItemsTabContent"
              ).innerHTML +=
                '<div class="empty-notification-elem text-center px-4">\
                  <div class="mt-3 avatar-md mx-auto">\
                    <div class="avatar-title bg-info-subtle text-info fs-24 rounded-circle">\
                    <i class="bi bi-bell "/>\
                    </div>\
                  </div>\
                  <div class="pb-3 mt-2">\
                    <h6 class="fs-lg fw-semibold lh-base">Hey! You have no any notifications </h6>\
                  </div>\
                </div>';
            }
          }
        });
    }
  }
};
</script>
<template>
  <BDropdown
    class="dropdown topbar-head-dropdown ms-1 header-item"
    id="notificationDropdown"
    toggle-class="rounded-circle"
    variant="ghost-dark"
    no-caret
    end
    auto-close="outside"
  >
    <template #button-content>
      <i class="bi bi-bell fs-2xl" />
      <span
        class="position-absolute topbar-badge fs-3xs translate-middle badge rounded-pill bg-danger"
        ><span class="notification-badge">4</span
        ><span class="visually-hidden">unread messages</span></span
      >
    </template>
    <div
      class="dropdown-menu-lg dropdown-menu-end p-0"
      aria-labelledby="page-header-notifications-dropdown"
    >
      <div class="dropdown-head rounded-top">
        <div class="p-3 border-bottom border-bottom-dashed">
          <BRow class="align-items-center">
            <BCol>
              <h6 class="mb-0 fs-lg fw-semibold">
                Notifications
                <span
                  class="badge bg-danger-subtle text-danger fs-sm notification-badge"
                >
                  4
                </span>
              </h6>
              <p class="fs-md text-muted mt-1 mb-0">
                You have
                <span class="fw-semibold notification-unread">3</span>
                unread messages
              </p>
            </BCol>

            <BCol cols="auto">
              <BDropdown
                toggle-class="rounded-circle"
                variant="ghost-dark"
                no-caret
              >
                <template #button-content>
                  <i class="bi bi-three-dots-vertical" />
                </template>
                <li class="dropdown-item">
                  <span href="#">All Clear</span>
                </li>
                <li class="dropdown-item">
                  <span href="#">Mark all as read</span>
                </li>
                <li class="dropdown-item">
                  <span href="#">Archive All</span>
                </li>
              </BDropdown>
            </BCol>
          </BRow>
        </div>
      </div>
      <div class="py-2 ps-2" id="notificationItemsTabContent">
        <simplebar data-simplebar style="max-height: 300px" class="pe-2">
          <h6
            class="text-overflow text-muted fs-sm my-2 text-uppercase notification-title"
          >
            New
          </h6>
          <div
            class="text-reset notification-item d-block dropdown-item position-relative unread-message"
          >
            <div class="d-flex">
              <div class="avatar-xs me-3 flex-shrink-0">
                <span
                  class="avatar-title bg-info-subtle text-info rounded-circle fs-lg"
                >
                  <i class="bx bx-badge-check" />
                </span>
              </div>
              <div class="flex-grow-1">
                <BLink href="#!" class="stretched-link">
                  <h6 class="mt-0 fs-md mb-2 lh-base">
                    Your <b>Elite</b> author Graphic Optimization
                    <span class="text-secondary">reward</span> is ready!
                  </h6>
                </BLink>
                <p class="mb-0 fs-2xs fw-medium text-uppercase text-muted">
                  <span
                    ><i class="mdi mdi-clock-outline" /> Just 30 sec ago</span
                  >
                </p>
              </div>
              <div class="px-2 fs-base">
                <div class="form-check notification-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="all-notification-check01"
                  />
                  <label
                    class="form-check-label"
                    for="all-notification-check01"
                  ></label>
                </div>
              </div>
            </div>
          </div>

          <div
            class="text-reset notification-item d-block dropdown-item position-relative unread-message"
          >
            <div class="d-flex">
              <div class="position-relative me-3 flex-shrink-0">
                <img
                  src="@/assets/images/users/avatar-2.jpg"
                  class="rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <span
                  class="active-badge position-absolute start-100 translate-middle p-1 bg-success rounded-circle"
                >
                  <span class="visually-hidden">New alerts</span>
                </span>
              </div>
              <div class="flex-grow-1">
                <BLink href="#!" class="stretched-link">
                  <h6 class="mt-0 mb-1 fs-md fw-semibold">Angela Bernier</h6>
                </BLink>
                <div class="fs-sm text-muted">
                  <p class="mb-1">
                    Answered to your comment on the cash flow forecast's graph
                    🔔.
                  </p>
                </div>
                <p class="mb-0 fs-2xs fw-medium text-uppercase text-muted">
                  <span><i class="mdi mdi-clock-outline" /> 48 min ago</span>
                </p>
              </div>
              <div class="px-2 fs-base">
                <div class="form-check notification-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="all-notification-check02"
                  />
                  <label
                    class="form-check-label"
                    for="all-notification-check02"
                  ></label>
                </div>
              </div>
            </div>
          </div>

          <div
            class="text-reset notification-item d-block dropdown-item position-relative unread-message"
          >
            <div class="d-flex">
              <div class="avatar-xs me-3 flex-shrink-0">
                <span
                  class="avatar-title bg-danger-subtle text-danger rounded-circle fs-lg"
                >
                  <i class="bx bx-message-square-dots" />
                </span>
              </div>
              <div class="flex-grow-1">
                <BLink href="#!" class="stretched-link">
                  <h6 class="mt-0 mb-2 fs-md lh-base">
                    You have received <b class="text-success">20</b> new
                    messages in the conversation
                  </h6>
                </BLink>
                <p class="mb-0 fs-2xs fw-medium text-uppercase text-muted">
                  <span><i class="mdi mdi-clock-outline" /> 2 hrs ago</span>
                </p>
              </div>
              <div class="px-2 fs-base">
                <div class="form-check notification-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="all-notification-check03"
                  />
                  <label
                    class="form-check-label"
                    for="all-notification-check03"
                  ></label>
                </div>
              </div>
            </div>
          </div>

          <h6
            class="text-overflow text-muted fs-sm my-2 text-uppercase notification-title"
          >
            Read Before
          </h6>

          <div
            class="text-reset notification-item d-block dropdown-item position-relative"
          >
            <div class="d-flex">
              <div class="position-relative me-3 flex-shrink-0">
                <img
                  src="@/assets/images/users/avatar-8.jpg"
                  class="rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <span
                  class="active-badge position-absolute start-100 translate-middle p-1 bg-warning rounded-circle"
                >
                  <span class="visually-hidden">New alerts</span>
                </span>
              </div>

              <div class="flex-grow-1">
                <BLink href="#!" class="stretched-link">
                  <h6 class="mt-0 mb-1 fs-md fw-semibold">Maureen Gibson</h6>
                </BLink>
                <div class="fs-sm text-muted">
                  <p class="mb-1">We talked about a project on linkedin.</p>
                </div>
                <p class="mb-0 fs-2xs fw-medium text-uppercase text-muted">
                  <span><i class="mdi mdi-clock-outline" /> 4 hrs ago</span>
                </p>
              </div>
              <div class="px-2 fs-base">
                <div class="form-check notification-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="all-notification-check04"
                  />
                  <label
                    class="form-check-label"
                    for="all-notification-check04"
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </simplebar>
        <div class="notification-actions" id="notification-actions">
          <div
            class="d-flex text-muted justify-content-center align-items-center"
          >
            Select
            <div id="select-content" class="text-body fw-semibold px-1">0</div>
            Result
            <BButton
              type="button"
              variant="link"
              class="link-danger p-0 ms-2"
              @click="deleteNotification"
              >Remove</BButton
            >
          </div>
        </div>
      </div>
    </div>
  </BDropdown>

  <BModal
    v-model="removeNotificationModal"
    id="removeNotificationModal"
    body-class="p-md-5"
    hide-footer
    centered
    class="fade zoomIn"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="text-center">
      <div class="text-danger">
        <i class="bi bi-trash display-4" />
      </div>
      <div class="mt-4 fs-base">
        <h4 class="mb-1">Are you sure ?</h4>
        <p class="text-muted mx-4 mb-0">
          Are you sure you want to remove this Notification ?
        </p>
      </div>
    </div>
    <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
      <button type="button" class="btn w-sm btn-light" data-bs-dismiss="modal">
        Close
      </button>
      <button
        type="button"
        class="btn w-sm btn-danger"
        id="delete-notification"
      >
        Yes, Delete It!
      </button>
    </div>
  </BModal>
</template>

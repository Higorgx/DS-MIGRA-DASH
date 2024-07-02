<script>
import appConfig from "~/app.config";
export default {
  page: {
    title: "Contacts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      title: "Contacts",
      items: [
        {
          text: "Pages",
          href: "/"
        },
        {
          text: "Contacts",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <PageHeader :title="title" :items="items" />
  <BRow class="align-items-center g-3 mb-4">
    <BCol sm="3" class="me-auto">
      <BCardTitle title-tag="h5" class="mb-0"
        >Contact List
        <span class="badge bg-success ms-1 align-baseline"
          >834</span
        ></BCardTitle
      >
    </BCol>
    <BCol lg="3" sm="5">
      <div class="search-box">
        <input
          type="text"
          class="form-control search"
          placeholder="Search for name, number, location or something..."
        />
        <i class="ri-search-line search-icon" />
      </div>
    </BCol>
    <BCol sm="auto" cols="auto">
      <div
        class="d-flex flex-wrap align-items-center justify-content-end gap-2"
      >
        <div>
          <BLink href="#" class="btn btn-primary"
            ><i class="bx bx-plus me-1" /> Add New</BLink
          >
        </div>
      </div>
    </BCol>
  </BRow>

  <BRow>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <img
                src="@/assets/images/users/avatar-2.jpg"
                alt=""
                class="avatar-sm rounded"
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >Patricia Honda</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">Full Stack Developer</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 617 219 6245
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              patriciahonda@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> 2995 Lynn Street
              Newton, MA 02160
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <img
                src="@/assets/images/users/avatar-3.jpg"
                alt=""
                class="avatar-sm rounded"
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >James Lash</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">Web Designer</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 617 219 6245
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              jameslash@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> 3089 Leroy Lane
              Pollock, SD 57648
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <img
                src="@/assets/images/users/avatar-4.jpg"
                alt=""
                class="avatar-sm rounded"
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >Angus Garnsey</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">React Developer</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 085 383 2388
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              angusgarnsey@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> 1738 Old Cress
              Lady Frere 5411
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <img
                src="@/assets/images/users/avatar-5.jpg"
                alt=""
                class="avatar-sm rounded"
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >Matilda Marston</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">Shopify Developer</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 082 288 1065
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              matildamarston@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> 2168 Bezuidenhout
              St Evander 2270
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <img
                src="@/assets/images/users/avatar-6.jpg"
                alt=""
                class="avatar-sm rounded"
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >Zachary Benjamin</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">Shopify Developer</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 348 9730237
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              zacharybenjamin@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> Via Carlo Alberto,
              8 22020-Faloppio CO
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <div class="avatar-sm">
                <div
                  class="avatar-title fs-lg bg-danger-subtle text-danger rounded"
                >
                  RC
                </div>
              </div>
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >Ruby Chomley</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">Shopify Developer</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 348 9730237
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              rubychomley@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> Via Pasquale
              Scura, 76 75010-Calciano MT
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <img
                src="@/assets/images/users/avatar-7.jpg"
                alt=""
                class="avatar-sm rounded"
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >Sophia Prendiville</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">Angular Developer</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 0354 3037376
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              sophiaprendiville@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> 36078-Maglio Di
              Sopra VI
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <div class="avatar-sm">
                <div
                  class="avatar-title fs-lg bg-info-subtle text-info rounded"
                >
                  SZ
                </div>
              </div>
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >Samantha Zepps</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">Project Manager</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 0365 4363346
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              samanthazepps@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> Via del Carmine,
              108 36040-Sarego VI
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <div class="avatar-sm">
                <div
                  class="avatar-title fs-lg bg-warning-subtle text-warning rounded"
                >
                  XB
                </div>
              </div>
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >Xavier Bower</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">Graphic Designer</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 0486 45 08 27
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              xavierbower@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> Rue Haute 47 8630
              Steenkerke
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <img
                src="@/assets/images/users/avatar-8.jpg"
                alt=""
                class="avatar-sm rounded"
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >Ryder Herron</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">Flask Development</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 0496 11 27 97
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              ryderherron@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> Rue du Commerce
              366 3722 Wintershoven
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <img
                src="@/assets/images/users/avatar-9.jpg"
                alt=""
                class="avatar-sm rounded"
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >Jesse Edouard</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">CEO & Founder</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 044 017 3869
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              jessedouard@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> Laivurinkatu 29
              49460 HAMINA
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xxl="3" sm="6">
      <BCard no-body>
        <BCardBody>
          <BDropdown
            class="float-end"
            toggle-class="text-muted btn-sm"
            no-caret
            end
            variant="ghost-dark"
          >
            <template #button-content
              ><i class="bx bx-dots-horizontal-rounded"
            /></template>
            <div>
              <BLink class="dropdown-item" href="#">Edit</BLink>
              <BLink class="dropdown-item" href="#">Action</BLink>
              <BLink class="dropdown-item" href="#">Remove</BLink>
            </div>
          </BDropdown>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative">
              <img
                src="@/assets/images/users/avatar-10.jpg"
                alt=""
                class="avatar-sm rounded"
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"
                ><span class="visually-hidden">unread messages</span></span
              >
            </div>
            <div class="flex-grow-1 ms-2">
              <h5 class="fs-md">
                <nuxt-link to="/pages/profile" class="text-dark"
                  >Isabel Hardwicke</nuxt-link
                >
              </h5>
              <p class="text-muted mb-0">Web Designer</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-muted mb-2">
              <i class="bi bi-telephone align-baseline me-1" /> 046 535 5916
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-envelope align-baseline me-1" />
              isabelhardwicke@steex.com
            </p>
            <p class="text-muted mb-0">
              <i class="bi bi-geo-alt align-baseline me-1" /> Kankaanpääntie 64
              94450 KEMINMAA
            </p>
          </div>
          <div class="d-flex gap-2 pt-4">
            <nuxt-link to="/pages/profile" class="btn btn-subtle-secondary w-50"
              ><i class="bi bi-person align-baseline me-1" /> Profile</nuxt-link
            >
            <BButton variant="primary" type="button" class="text-truncate w-50"
              ><i class="bi bi-chat-left-text align-baseline me-1" /> Contact
              Us</BButton
            >
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow
    class="align-items-center justify-content-between text-center text-sm-start mb-3"
  >
    <BCol cols="sm">
      <div class="text-muted">
        Showing <span class="fw-semibold">12</span> of
        <span class="fw-semibold">20</span> Results
      </div>
    </BCol>
    <BCol sm="auto" class="mt-3 mt-sm-0">
      <div class="pagination-wrap hstack gap-2">
        <BLink class="page-item pagination-prev disabled" href="#">
          Previous
        </BLink>
        <ul class="pagination listjs-pagination mb-0">
          <li class="active">
            <BLink class="page" href="#" data-i="1" data-page="10">1</BLink>
          </li>
          <li>
            <BLink class="page" href="#" data-i="2" data-page="10">2</BLink>
          </li>
        </ul>
        <BLink class="page-item pagination-next" href="#"> Next </BLink>
      </div>
    </BCol>
  </BRow>
</template>

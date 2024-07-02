<script></script>
<template>
  <BDropdown
    class="dropdown topbar-head-dropdown header-item"
    toggle-class="rounded-circle"
    variant="ghost-dark"
    no-caret
  >
    <template #button-content>
      <i class="bi bi-grid fs-2xl"></i>
    </template>
    <div>
      <div
        class="p-3 border-top-0 border-start-0 border-end-0 border-dashed border"
      >
        <BRow class="align-items-center">
          <BCol>
            <h6 class="m-0 fw-semibold fs-base">Browse by Apps</h6>
          </BCol>
          <BCol cols="auto">
            <BLink href="#!" class="btn btn-sm btn-subtle-info">
              View All Apps
              <i class="ri-arrow-right-s-line align-middle"></i>
            </BLink>
          </BCol>
        </BRow>
      </div>

      <div class="p-2">
        <BRow class="g-0">
          <BCol>
            <BLink class="dropdown-icon-item" href="#!">
              <img src="@/assets/images/brands/github.png" alt="Github" />
              <span>GitHub</span>
            </BLink>
          </BCol>
          <BCol>
            <BLink class="dropdown-icon-item" href="#!">
              <img src="@/assets/images/brands/bitbucket.png" alt="bitbucket" />
              <span>Bitbucket</span>
            </BLink>
          </BCol>
          <BCol>
            <BLink class="dropdown-icon-item" href="#!">
              <img src="@/assets/images/brands/dribbble.png" alt="dribbble" />
              <span>Dribbble</span>
            </BLink>
          </BCol>
        </BRow>

        <BRow class="g-0">
          <BCol>
            <BLink class="dropdown-icon-item" href="#!">
              <img src="@/assets/images/brands/dropbox.png" alt="dropbox" />
              <span>Dropbox</span>
            </BLink>
          </BCol>
          <BCol>
            <BLink class="dropdown-icon-item" href="#!">
              <img
                src="@/assets/images/brands/mail_chimp.png"
                alt="mail_chimp"
              />
              <span>Mail Chimp</span>
            </BLink>
          </BCol>
          <BCol>
            <BLink class="dropdown-icon-item" href="#!">
              <img src="@/assets/images/brands/slack.png" alt="slack" />
              <span>Slack</span>
            </BLink>
          </BCol>
        </BRow>
      </div>
    </div>
  </BDropdown>
</template>

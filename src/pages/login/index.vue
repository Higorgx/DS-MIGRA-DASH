<template>
  <section class="dashboard">
    <div class="proBanner">
      
    </div>
    <div class="row">
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
        </div>
      </div>
      <div class="col-md-8 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-row justify-content-between">
              <div>
                <h4 class="card-title">Open Projects</h4>
                <p>Your data status</p>
              </div>
              <div class="align-self-center">
                <p class="text-muted">View History</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="preview-list">
                  <div class="preview-item border-bottom  py-3">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-primary rounded">
                        <i class="mdi mdi-file-document"></i>
                      </div>
                    </div>
                    <div class="preview-item-content d-sm-flex flex-grow">
                      <div class="flex-grow">
                        <h6 class="preview-subject">New Document</h6>
                        <p class="mb-0">Broadcast web app mockup</p>
                      </div>
                      <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                        <p class="text-muted">15 minutes ago</p>
                        <p>30 tasks, 5 issues </p>
                      </div>
                    </div>
                  </div>
                  <div class="preview-item border-bottom  py-3">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-success rounded">
                        <i class="mdi mdi-cloud-upload"></i>
                      </div>
                    </div>
                    <div class="preview-item-content d-sm-flex flex-grow">
                      <div class="flex-grow">
                        <h6 class="preview-subject">New Design</h6>
                        <p class="mb-0">Upload new design</p>
                      </div>
                      <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                        <p class="text-muted">1 hour ago</p>
                        <p>23 tasks, 5 issues </p>
                      </div>
                    </div>
                  </div>
                  <div class="preview-item border-bottom  py-3">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-info rounded">
                        <i class="mdi mdi-clock"></i>
                      </div>
                    </div>
                    <div class="preview-item-content d-sm-flex flex-grow">
                      <div class="flex-grow">
                        <h6 class="preview-subject">Project meeting</h6>
                        <p class="mb-0">New project discussion</p>
                      </div>
                      <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                        <p class="text-muted">35 minutes ago</p>
                        <p>15 tasks, 2 issues </p>
                      </div>
                    </div>
                  </div>
                  <div class="preview-item border-bottom  py-3">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-warning rounded">
                        <i class="mdi mdi-email"></i>
                      </div>
                    </div>
                    <div class="preview-item-content d-sm-flex flex-grow">
                      <div class="flex-grow">
                        <h6 class="preview-subject">Broadcast Mail</h6>
                        <p class="mb-0">Sent release details to team</p>
                      </div>
                      <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                        <p class="text-muted">55 minutes ago</p>
                        <p>35 tasks, 7 issues </p>
                      </div>
                    </div>
                  </div>
                  <div class="preview-item py-3">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-danger rounded">
                        <i class="mdi mdi-chart-pie"></i>
                      </div>
                    </div>
                    <div class="preview-item-content d-sm-flex flex-grow">
                      <div class="flex-grow">
                        <h6 class="preview-subject">Planning</h6>
                        <p class="mb-0">New application planning</p>
                      </div>
                      <div class="mr-auto text-sm-right pt-2 pt-sm-0">
                        <p class="text-muted">50 minutes ago</p>
                        <p>27 tasks, 4 issues </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-row p-3">
              <div class="align-self-top">
                <p class="card-title mb-1 font-weight-bold">Today's sales</p>
                <h3 class="mb-0">2800</h3>
              </div>
              <div class="align-self-center flex-grow text-right">
                <i class="icon-lg mdi mdi-chart-pie text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-row p-3">
              <div class="align-self-top">
                <p class="card-title mb-1 font-weight-bold">Total Revenue</p>
                <h3 class="mb-0">38,879</h3>
              </div>
              <div class="align-self-center flex-grow text-right">
                <i class="icon-lg mdi mdi-cash-multiple text-warning"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-row p-3">
              <div class="align-self-top">
                <p class="card-title mb-1 font-weight-bold">Today's Visits</p>
                <h3 class="mb-0">2569</h3>
              </div>
              <div class="align-self-center flex-grow text-right">
                <i class="icon-lg mdi mdi-account-outline text-success"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'dashboard',
  components: {
  },
  data() {
    return {
      time1: null,
      slide1: 0,
    };
  },
  methods: {
    toggleProBanner: () => {
      document.querySelector('body').classList.toggle('pro-banner-collapse');
    }
  }
}
</script>

<style scoped>

</style>
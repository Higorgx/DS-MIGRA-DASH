<script>
import appConfig from "~/app.config";
import { ref, watch } from "vue";

// Editors
import { reactive } from "vue";

import DropZone from "@/common/dropZone.vue";
import CKEditorComponent from "~/components/CKEditorComponent.vue";
import Multiselect from "@vueform/multiselect";

export default {
  page: {
    title: "Add Product",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      title: "Add Product",
      items: [
        {
          text: "Ecommerce",
          href: "/"
        },
        {
          text: "Add Product",
          active: true
        }
      ],
      editorData: "",
      plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor"
      ],
      toolbar:
        "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
      options: {
        height: 300,
        style_formats: [
          { title: "Bold text", inline: "b" },
          { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
          { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
          { title: "Example 1", inline: "span", classes: "example1" },
          { title: "Example 2", inline: "span", classes: "example2" },
          { title: "Table styles" },
          { title: "Table row 1", selector: "tr", classes: "tablerow1" }
        ]
      },
      tagsOptions: [
        { value: "Fashion", label: "Fashion" },
        { value: "Style", label: "Style" },
        { value: "Brands", label: "Brands" },
        { value: "Puma", label: "Puma" }
      ],
      tagsSelectValue: [
        { value: "Fashion", label: "Fashion" },
        { value: "Style", label: "Style" },
        { value: "Brands", label: "Brands" },
        { value: "Puma", label: "Puma" }
      ]

      // value: null,
      // options: ['list', 'of', 'options']
    };
  },
  setup() {
    // product dropzone
    let files = ref([]);
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
      files.value.push(dropzoneFile.value);
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
      files.value.push(dropzoneFile.value);
    };
    watch(
      () => [...files.value],
      () => [...galleryFiles.value],
      (currentValue) => {
        return currentValue;
      }
    );

    // gallery dropzone
    let galleryFiles = ref([]);
    let galleryDropzoneFile = ref("");
    const galleryDrop = (e) => {
      galleryDropzoneFile.value = e.dataTransfer.files[0];
      galleryFiles.value.push(galleryDropzoneFile.value);
    };
    const gallerySelectedFile = () => {
      galleryDropzoneFile.value = document.querySelector(
        ".galleryDropzoneFile"
      ).files[0];
      galleryFiles.value.push(galleryDropzoneFile.value);
    };
    //

    // const state = reactive({
    //     content:
    //         "<h3><span class='ql-size-large;'>Hello World!</span></h3><p><br></p><h3>This is an simple editable area.</h3><p><br></p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p><br></p><p>End of simple area</p>",
    //     _content: "",
    //     disabled: false,
    // });

    return {
      dropzoneFile,
      files,
      drop,
      selectedFile,
      galleryDropzoneFile,
      galleryFiles,
      galleryDrop,
      gallerySelectedFile
    };
  },
  methods: {
    deleteRecord(ele) {
      ele.target.parentElement.parentElement.parentElement.remove();
    },
    onEditorValueChange(newValue) {
      this.editorData = newValue;
    }
  },
  components: {
    DropZone,
    CKEditorComponent,
    Multiselect
  }
};
</script>

<template>
  <PageHeader :title="title" :items="items" />
  <BRow>
    <BCol lg="12">
      <BCard no-body>
        <BCardBody>
          <BRow>
            <BCol xxl="4">
              <BCardTitle title-tag class="BCardTitle mb-3"
                >Product Information</BCardTitle
              >
              <p class="text-muted">
                Product Information refers to any information held by an
                organisation about the products it produces, buys, sells or
                distributes.
              </p>
            </BCol>
            <BCol xxl="8">
              <form action="#!">
                <div class="mb-3">
                  <label for="productTitle" class="form-label"
                    >Product Title <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="productTitle"
                    placeholder="Enter product title"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="productCategories" class="form-label"
                    >Categories <span class="text-danger">*</span></label
                  >
                  <!-- <multiselect v-model="value" :options="options"></multiselect> -->

                  <select
                    class="form-control"
                    data-choices
                    name="productCategories"
                    id="productCategories"
                  >
                    <option value="">Select categories</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Automotive Accessories">
                      Automotive Accessories
                    </option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Sportswear">Sportswear</option>
                    <option value="Watches">Watches</option>
                    <option value="Headphones">Headphones</option>
                    <option value="Other Accessories">Other Accessories</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="productType" class="form-label"
                    >Product Type <span class="text-danger">*</span></label
                  >
                  <select
                    class="form-control"
                    data-choices
                    name="productType"
                    id="productType"
                  >
                    <option value="">Select Type</option>
                    <option value="Simple">Simple</option>
                    <option value="Classified">Classified</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="shortDecs" class="form-label"
                    >Short Description <span class="text-danger">*</span></label
                  >
                  <textarea
                    class="form-control"
                    id="shortDecs"
                    placeholder="Must enter minimum of a 100 characters"
                    rows="3"
                  ></textarea>
                </div>
                <BRow>
                  <BCol lg="6">
                    <div class="mb-3">
                      <label for="productBrand" class="form-label"
                        >Brand <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="productBrand"
                        placeholder="Enter brand"
                        required
                      />
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="mb-3">
                      <label for="productUnit" class="form-label"
                        >Unit <span class="text-danger">*</span></label
                      >
                      <select
                        class="form-control"
                        data-choices
                        name="productUnit"
                        id="productUnit"
                      >
                        <option value="">Select Unit</option>
                        <option value="Kilogram">Kilogram</option>
                        <option value="Pieces">Pieces</option>
                      </select>
                    </div>
                  </BCol>
                </BRow>
                <div class="mb-3">
                  <label for="productTags" class="form-label">Tags</label>
                  <Multiselect
                    placeholder="Select Tags"
                    :searchable="false"
                    mode="tags"
                    :object="true"
                    :create-option="false"
                    v-model="tagsSelectValue"
                    :options="tagsOptions"
                  />
                </div>
                <BRow>
                  <BCol lg="6">
                    <div class="form-check form-switch mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="exchangeableInput"
                      />
                      <label class="form-check-label" for="exchangeableInput"
                        >Exchangeable</label
                      >
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="form-check form-switch mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="refundableInput"
                      />
                      <label class="form-check-label" for="refundableInput"
                        >Refundable</label
                      >
                    </div>
                  </BCol>
                </BRow>
              </form>
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol lg="12">
      <BCard no-body>
        <BCardBody>
          <BRow>
            <BCol xxl="4">
              <BCardTitle title-tag class="BCardTitle mb-3"
                >Description</BCardTitle
              >
              <p class="text-muted">
                Product Information refers to any information held by an
                organization about the products it produces, buys, sells or
                distributes.
              </p>
            </BCol>
            <BCol xxl="8">
              <div>
                <label class="form-label"
                  >Product Description <span class="text-danger">*</span></label
                >
                <div class="ckeditor-classic">
                  <CKEditorComponent @onChange="onEditorValueChange" />
                  <!-- <ckeditor v-model="editorData" :editor="editor"></ckeditor> -->
                </div>
              </div>
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol lg="12">
      <BCard no-body>
        <BCardBody>
          <BRow>
            <BCol xxl="4">
              <BCardTitle title-tag class="BCardTitle mb-3">Images</BCardTitle>
              <p class="text-muted">
                Product Information refers to any information held by an
                organization about the products it produces, buys, sells or
                distributes.
              </p>
            </BCol>
            <BCol xxl="8">
              <div class="mb-3">
                <label class="form-label"
                  >Product Images <span class="text-danger">*</span></label
                >
                <DropZone
                  @drop.prevent="drop"
                  @change="selectedFile"
                  files="product images"
                  cloudIcon="remix"
                />

                <ul class="list-unstyled mb-0" id="dropzone-preview">
                  <li class="mt-2" id="dropzone-preview-list">
                    <div
                      class="border rounded"
                      v-for="(file, index) of files"
                      :key="index"
                    >
                      <div class="d-flex p-2">
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar-sm bg-light rounded">
                            <img
                              data-dz-thumbnail
                              class="img-fluid rounded d-block"
                              src="@/assets/images/new-document.png"
                              alt="Dropzone-Image"
                            />
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <div class="pt-1">
                            <h5 class="fs-md mb-1" data-dz-name>
                              &nbsp;
                              {{ file.name }}
                            </h5>
                            <p class="fs-sm text-muted mb-0" data-dz-size>
                              <strong>{{ file.size / 1024 }}</strong> KB
                            </p>
                            <strong
                              class="error text-danger"
                              data-dz-errormessage
                            ></strong>
                          </div>
                        </div>
                        <div class="flex-shrink-0 ms-3">
                          <BButton
                            variant="danger"
                            class="sm"
                            data-dz-remove
                            @click="deleteRecord"
                            >Delete</BButton
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="mb-3">
                <label class="form-label"
                  >Gallery Images <span class="text-danger">*</span></label
                >
                <DropZone
                  @drop.prevent="galleryDrop"
                  @change="gallerySelectedFile"
                  files="gallery images"
                  cloudIcon="remix"
                  dropzoneFile="galleryDropzoneFile"
                />
                <ul class="list-unstyled mb-0" id="dropzone-preview2">
                  <li class="mt-2" id="dropzone-preview-list2">
                    <!-- This is used as the file preview template -->
                    <div
                      class="border rounded mb-1"
                      v-for="(file, index) of galleryFiles"
                      :key="index"
                    >
                      <div class="d-flex p-2">
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar-sm bg-light rounded">
                            <img
                              data-dz-thumbnail
                              class="img-fluid rounded d-block"
                              src="@/assets/images/new-document.png"
                              alt="Dropzone-Image"
                            />
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <div class="pt-1">
                            <h5 class="fs-md mb-1" data-dz-name>
                              &nbsp;
                              {{ file.name }}
                            </h5>
                            <p class="fs-sm text-muted mb-0" data-dz-size>
                              <strong>{{ file.size / 1024 }}</strong> KB
                            </p>
                            <strong
                              class="error text-danger"
                              data-dz-errormessage
                            ></strong>
                          </div>
                        </div>
                        <div class="flex-shrink-0 ms-3">
                          <BButton
                            data-dz-remove
                            variant="danger"
                            class="sm"
                            @click="deleteRecord"
                            >Delete</BButton
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- end dropzon-preview -->
              </div>
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol lg="12">
      <BCard no-body>
        <BCardBody>
          <BRow>
            <BCol xxl="4">
              <BCardTitle title-tag class="BCardTitle mb-3"
                >General Info</BCardTitle
              >
              <p class="text-muted mb-0">
                An informational product can be a digital book (or e-book), a
                digital report, a white paper, a piece of software, audio or
                video files, a website, an e-zine or a newsletter.
              </p>
            </BCol>
            <BCol xxl="8">
              <BRow class="gy-3">
                <BCol lg="6">
                  <div>
                    <label for="manufacturer-name-input" class="form-label"
                      >Manufacturer Name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="manufacturer-name-input"
                      placeholder="Enter manufacturer name"
                      required
                    />
                  </div>
                </BCol>
                <BCol lg="6">
                  <div>
                    <label class="form-label" for="manufacturer-brand-input"
                      >Manufacturer Brand</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="manufacturer-brand-input"
                      placeholder="Enter manufacturer brand"
                    />
                  </div>
                </BCol>
                <BCol lg="4">
                  <div>
                    <label for="productStocks" class="form-label"
                      >Stocks <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="productStocks"
                      placeholder="Stocks"
                      required
                    />
                  </div>
                </BCol>
                <BCol lg="4">
                  <div>
                    <label class="form-label" for="product-price-input"
                      >Price</label
                    >
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="product-price-addon"
                        >$</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="product-price-input"
                        placeholder="Enter price"
                        aria-label="Price"
                        aria-describedby="product-price-addon"
                        required=""
                      />
                      <div class="invalid-feedback">
                        Please Enter a product price.
                      </div>
                    </div>
                  </div>
                </BCol>
                <BCol lg="4">
                  <div>
                    <label class="form-label" for="product-discount-input"
                      >Discount</label
                    >
                    <div class="input-group">
                      <span class="input-group-text" id="product-discount-addon"
                        >%</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="product-discount-input"
                        placeholder="Enter discount"
                        aria-label="discount"
                        aria-describedby="product-discount-addon"
                      />
                    </div>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div>
                    <label for="choices-publish-status-input" class="form-label"
                      >Status</label
                    >
                    <select
                      class="form-select"
                      id="choices-publish-status-input"
                      data-choices
                      data-choices-search-false
                    >
                      <option value="Published" selected>Published</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div>
                    <label
                      for="choices-publish-visibility-input"
                      class="form-label"
                      >Visibility</label
                    >
                    <select
                      class="form-select"
                      id="choices-publish-visibility-input"
                      data-choices
                      data-choices-search-false
                    >
                      <option value="Public" selected>Public</option>
                      <option value="Hidden">Hidden</option>
                    </select>
                  </div>
                </BCol>
              </BRow>
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <div class="hstack gap-2 justify-content-end mb-3">
    <BButton variant="danger"><i class="ph-x align-middle"></i> Cancel</BButton>
    <BButton variant="primary">Submit</BButton>
  </div>
</template>

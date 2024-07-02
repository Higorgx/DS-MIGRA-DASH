<script>
import appConfig from "~/app.config";
import CKEditorComponent from "~/components/CKEditorComponent.vue";

export default {
  page: {
    title: "Editors",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      title: "Editors",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Editors",
          active: true
        }
      ],
      editorData: ""
    };
  },
  components: {
    CKEditorComponent
  },
  methods: {
    onCKEditorValueChange(newValue) {
      this.editorData = newValue;
    }
  }
};
</script>

<template>
  <PageHeader :title="title" :items="items" />

  <BRow>
    <BCol lg="12">
      <BCard no-body>
        <BCardHeader class="align-items-center d-flex">
          <BCardTitle class="mb-0">Ckeditor Classic Editor</BCardTitle>
        </BCardHeader>

        <BCardBody>
          <p class="text-muted">
            Use <code>ckeditor-classic</code> class to set ckeditor classic
            editor.
          </p>
          <div class="ckeditor-classic">
            <CKEditorComponent @onChange="onCKEditorValueChange" />
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>

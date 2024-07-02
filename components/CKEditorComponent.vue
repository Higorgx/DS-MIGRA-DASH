<script>
export default {
  data() {
    return {
      classicEditor: null,
      editorContent: "",
      interval: null
    };
  },
  mounted() {
    this.prepareCKEditor();
  },
  watch: {
    editorContent(newValue) {
      if (this.interval) {
        clearTimeout(this.interval);
      }

      this.interval = setTimeout(() => {
        this.$emit("onChange", newValue);
      }, 500);
    }
  },
  methods: {
    async prepareCKEditor() {
      if (typeof window !== "undefined") {
        const { default: ClassicEditor } = await import(
          "@ckeditor/ckeditor5-build-classic"
        );

        this.classicEditor = ClassicEditor.create(
          document.querySelector("#editor"),
          {
            /** NEEDED FEATURE WILL GO HERE  */
            // toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
            // heading: {
            //     options: [
            //         { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            //         { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            //         { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            //     ]
            // }
          }
        )
          .then((editor) => {
            editor.model.document.on("change:data", () => {
              if (editor) {
                this.editorContent = editor.getData();
              }
            });
            return editor;
          })
          .catch((error) => {
            console.error("[failed to load ckeditor at getCKEditor]", {
              error
            });
          });
      }
    }
  }
};
</script>
<template>
  <client-only>
    <div id="editor" />
  </client-only>
</template>

<template>
  <GoogleMap
    api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
    style="width: 100%; height: 300px"
    :center="center"
    :zoom="13"
  >
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap },
  setup() {
    const center = { lat: 42.3455, lng: -71.0983 };
    return { center };
  }
});
</script>

<!-- <GoogleMap api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE" :center="{ lat: 1.38, lng: 103.8 }"
                            :zoom="12" style="height: 300px">
                            <Polygons :paths="paths" :editable="true" @paths_changed="updateEdited($event)"></Polygons> -->

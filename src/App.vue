<template>
  <Nav :refreshCb="refreshApi"/>
  <ImageStage :images="images"/>
</template>

<script>
import Nav from './components/Nav.vue'
import ImageStage from './components/ImageStage.vue'
import { fetchImages } from './api/api.js'

export default {
  name: 'App',
  components: {
    Nav,
    ImageStage,
  },
  data() {
    return {
      images : []
    }
  },
  mounted() {
    this.refreshApi()
  },
  methods: {
    refreshApi : async function () {
        this.images = await fetchImages();
      }
  }
}

</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css";
html {
  background: lightgray;
}
</style>
<template>
<article>
  <div class="is-flex is-flex-wrap-wrap">
    <ImageTile v-for="image in images" :key="image.id" :image="image" v-on:setModalImage="populateModal"/>
    <ImageModal :image="currentModalImage" v-model="modalActive" @nextImage="nextModalImage" @previousImage="previousModalImage"/>
  </div>
</article>
</template>

<script>
import ImageTile from './ImageTile.vue'
import ImageModal from './ImageModal.vue'
import { IrisImage } from '../models/images'

export default {
  name: 'ImageStage',
  props: ['images'],
  components: {
    ImageTile,
    ImageModal
  },
  data() {
    return {
      currentModalImage: new IrisImage({}),
      modalActive: false,
    }
  },
  methods: {
    populateModal(modalImage) {
      this.currentModalImage = modalImage;
      this.modalActive = true;
    },
    nextModalImage() {
      // Set modal to next image in array or else back to start
      let currentIndex = this.images.indexOf(this.currentModalImage);
      if (currentIndex+1 < this.images.length) {
        currentIndex++;
        this.currentModalImage = this.images[currentIndex];
      } else {
        this.currentModalImage = this.images[0];
      }
    },
    previousModalImage() {
      // Set modal to previous image in array
      let currentIndex = this.images.indexOf(this.currentModalImage);
      if (currentIndex > 0) {
        currentIndex--;
        this.currentModalImage = this.images[currentIndex];
      } else {
        this.currentModalImage = this.images[this.images.length-1];
      }
    }
  } 
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

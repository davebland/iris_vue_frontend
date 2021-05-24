<template>
<div class="modal" :class="{ 'is-active': modelValue }">
  <div class="modal-background"></div>
  <div class="modal-content">
    <figure class="image">
      <img :src="image.originalUrl" :alt="image.name">
    </figure>
    <div class="is-flex is-justify-content-space-between is-align-items-center p-3">
      <p class="has-text-light">{{ image.name }}</p>
      <div class="buttons has-addons">
        <button class="button is-outlined is-rounded is-light" @click="$emit('nextImage')">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
        </button>
        <button class="button is-outlined is-rounded is-light" @click="$emit('previousImage')">P</button>
      </div>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="$emit('update:modelValue', false)"></button>
</div>
</template>

<script>
import { IrisImage } from '../models/images'

export default {
  name: 'ImageModal',
  props: {
    image: {
      type: IrisImage,
      default: new IrisImage({})
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

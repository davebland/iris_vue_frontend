<template>
  <div class="card m-5 is-flex-grow-1">
    <header class="card-header">
      <p class="card-header-title">
        {{ image.name }}
      </p>
    </header>
    <div class="card-image">        
      <figure class="image is-4by3">
        <img :src="image.thumbnailUrl" :alt="image.name" @click="$emit('setModalImage', image)">
      </figure>
    </div>
    <div class="card-content">
      {{ image.date }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageTile',
  props: {
    image: Image
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  min-width: 200px;
  max-width: 300px;
}

</style>

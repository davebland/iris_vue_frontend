<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="../assets/logo.png" class="pr-5">
        <strong>Iris</strong>
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="iris-navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="iris-navbar" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button" :onclick=refreshCb>
            R
          </button>
        </div>        
        <div class="navbar-item">
          <a class="button is-warning is-outlined">
            <strong>Logout</strong>
          </a>            
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Nav',
  props: [
    'refreshCb'
  ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

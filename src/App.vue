<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>
        1er Parcial NT2 - Abad Gonzalo
      </h1>
      <br>
      <Navbar />
      <router-view> 
        
      </router-view>
    </div>
  </div>
</template>

<script>

import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,

  }
}
</script>

<style>

</style>

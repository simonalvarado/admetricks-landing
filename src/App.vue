<template>
  <HeroSection/>
</template>

<script>
import HeroSection from './components/HeroSection.vue'

export default {
  name: 'App',
  components: {
    HeroSection
  }
}
</script>

<style>
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #0a2540;
  display: flex;
  justify-content: center;
}
</style>

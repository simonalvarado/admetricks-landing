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
  background-image: url("assets/logo.png");
  background-repeat: no-repeat;
  background-position: top -200px right -210px;
  background-size: auto 110%;
  background-color: #0a2540;
  display: flex;
  justify-content: center;
}
</style>

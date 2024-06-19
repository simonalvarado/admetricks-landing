<template>
  <HeroSection />
  <CardsSection />
  <DollarGraphic />
  <DownloadButton />
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import DollarGraphic from "./components/DollarGraphic.vue";
import DownloadButton from "./components/DownloadButton.vue";
import CardsSection from "./components/CardsSection.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    DollarGraphic,
    DownloadButton,
    CardsSection,
  },
};
</script>

<style>
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #0a2540;
}
</style>

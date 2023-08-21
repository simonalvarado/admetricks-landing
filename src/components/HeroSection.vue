<template>
  <div class="hero-section container-fluid d-flex align-items-center">
    <div class="row">
      <div class="hero-section__content col-md-6 d-flex flex-column justify-content-center">
        <p class="hero-section__description mb-2">Estamos para ayudarte</p>
        <h2 class="hero-section__title mb-4">
          ¿Tienes problemas para&nbsp;<span class="underlined-text">entender el mercado</span><br>de la publicidad digital?
        </h2>
        <p class="hero-section__paragraph mb-3">
          El Mercado de la publicidad online es incierto y complejo, Admetricks te <span class="highlighted-word">ayuda a visibilizar cómo desempeñan las campañas y contenidos</span> versus los de tu competencia en tiempo real con reportes y alertas automáticas
        </p>
        <div class="hero-section_buttons d-flex">
          <button class="btn primary-button">Solicitar demo</button>
          <a href="#" class="secondary-button d-flex align-items-center">Ver funcionalidades</a>
        </div>
      </div>

      <div class="hero-section__image col-md-6 d-flex flex-column justify-content-center">
        <img src="../assets/hero-section.png" alt="hero-section" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-section {
  min-height: 100vh;
  margin: 0px;
  max-width: 1500px;
}
.hero-section__content {
  padding: 37px 70px 30px 55px;
}
.hero-section__description {
  font-weight: 600;
  color: #3fc3ef;
}
.hero-section__title {
  font-weight: 600;
  line-height: 1.4;
}
.underlined-text {
  white-space: nowrap;
  background-image: url("../assets/underline.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 38%;
}
.hero-section__paragraph {
  color: #a9b9c7;
  line-height: 1.7;
}
.highlighted-word{
  color: #3fc3ef;
}
.primary-button {
  background-color: #3fc3ef;
  color: #091416;
  border-radius: 21px;
  padding: 7px 29px;
  font-size: 13px;
  font-weight: 800;
  margin-right: 15px;
}
.secondary-button {
  text-align: center;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
}
.hero-section__image img {
  width: 100%;
  padding: 0px 55px 0px 5px;
}
@media (max-width: 768px) {
  .row {
    height: 100%;
  }
  .hero-section__content {
    text-align: center;
    padding: 30px 20px 0px 20px;
  }
  .hero-section__title{
    font-size: 1.4rem;
  }
  .hero-section__image {
    align-items: center;
  }
  .hero-section__image img {
    padding: 20px 20px;
    width: 75%;
  }
  .hero-section_buttons {
    flex-direction: column;
    align-items: center;
  }
  .primary-button {
    margin-right: 0px;
    margin-bottom: 20px;
  }
}
</style>

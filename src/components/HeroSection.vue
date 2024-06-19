<template>
  <div class="hero-section">
    <div class="hero-section__content">
      <div class="hero-section__content__wrapper">
        <p class="hero-section__description mb-2">Estamos para ayudarte</p>
        <h2 class="hero-section__title mb-4">
          ¿Tienes problemas para&nbsp;<span class="underlined-text"
            >entender el mercado</span
          ><br />
          de la publicidad digital?
        </h2>
        <p class="hero-section__paragraph mb-4">
          El Mercado de la publicidad online es incierto y complejo, Admetricks
          te
          <span class="highlighted-word"
            >ayuda a visibilizar cómo desempeñan las campañas y contenidos</span
          >
          versus los de tu competencia en tiempo real con reportes y alertas
          automáticas
        </p>
        <div class="hero-section_buttons d-flex">
          <button class="btn primary-button">Solicitar demo</button>
          <a href="#" class="secondary-button d-flex align-items-center"
            >Ver funcionalidades</a
          >
        </div>
      </div>
    </div>

    <div class="hero-section__image__wrapper">
      <figure class="hero-section__image"></figure>
      <img
        class="hero-section__image__mobile"
        src="../assets/hero-section.png"
        alt="Hero Section Image Mobile"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 813px;
  background-image: url("../assets/logo.png");
  background-repeat: no-repeat;
  background-position: 217% 126%;
  background-size: 70%;
}
.hero-section__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px 20px 0px 20px;
  width: 50%;
}
.hero-section__content__wrapper {
  width: 100%;
  max-width: 575px;
}
.hero-section__description {
  font-size: 20px;
  font-weight: 600;
  color: #3fc3ef;
}
.hero-section__title {
  font-size: 42px;
  max-width: 572px;
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
  font-size: 20px;
  color: #a9b9c7;
  line-height: 1.7;
  max-width: 575px;
}
.highlighted-word {
  color: #3fc3ef;
}
.hero-section_buttons {
  margin-bottom: 15px;
}
.hero-section__image__wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  min-height: 457px;
  padding: 0px 0px 0px 60px;
}
.hero-section__image {
  background-image: url("../assets/hero-section.png");
  width: 708px;
  height: 532px;
  background-size: 708px 532px;
  background-repeat: no-repeat;
  right: auto;
  left: 0px;
  position: relative;
}
.hero-section__image__mobile {
  display: none;
}
@media screen and (min-width: 769px) and (max-width: 1068px) {
  .hero-section__description {
    font-size: 16px;
  }
  .hero-section__title {
    font-size: 28px;
  }
  .hero-section__paragraph {
    font-size: 16px;
  }
}
@media (max-width: 768px) {
  .hero-section {
    min-height: 0;
    background-position: 50% 50%;
    background-size: cover;
    flex-direction: column;
  }
  .hero-section__content {
    text-align: center;
    align-items: center;
    padding: 30px 20px 0px 20px;
    width: 100%;
  }
  .hero-section__content__wrapper {
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .hero-section__description {
    font-size: 1rem;
    line-height: 1.5;
  }
  .hero-section__title {
    font-size: 1.6rem;
    line-height: 1.2;
  }
  .hero-section__paragraph {
    font-size: 1rem;
    line-height: 1.5;
    padding: 0px 20px;
  }
  .hero-section_buttons {
    flex-direction: column;
    align-items: center;
    margin: 0px 0px 0px 0px;
  }
  .hero-section__image__wrapper {
    width: 100%;
    padding: 20px 0px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
  }
  .hero-section__image {
    display: none;
  }
  .hero-section__image__mobile {
    display: block;
    width: 80%;
    height: auto;
    margin: 0px 0px 20px 0px;
  }
  .hero-section_buttons {
    flex-direction: column;
    align-items: center;
  }
}
@media (min-width: 769px) and (max-width: 910px) {
  .hero-section img {
    padding: 0px 55px 0px 45px;
  }
}
</style>

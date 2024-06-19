<template>
  <div class="cards-section">
    <CustomCard
      v-for="(card, index) in cards"
      :key="index"
      :icon="card.icon"
      :title="card.title"
      :paragraph="card.paragraph"
    />
  </div>
</template>

<script>
import CustomCard from "./CustomCard.vue";
export default {
  name: "CardsSection",
  components: {
    CustomCard,
  },
  data() {
    return {
      cards: [
        {
          icon: require("../assets/agencias-icon.png"),
          title: "Agencias",
          paragraph:
            "Crea mejores estrategias de marketing digital, planes de medios y reportes de resultados para tus clientes. Muéstrale qué está haciendo su competencia en publicidad online.",
        },
        {
          icon: require("../assets/medios-icon.png"),
          title: "Medios",
          paragraph:
            "Mejora tus argumentos de ventas conociendo en detalle la inversión de tus clientes en otros medios y el alcance que les aporta.",
        },
        {
          icon: require("../assets/marcas-icon.png"),
          title: "Marcas",
          paragraph:
            "Descubre las ofertas y campañas que tu competencia está promocionando. Recibe alertas cuando tu competencia lanza una nueva campaña de publicidad online.",
        },
        {
          icon: require("../assets/verificacion-icon.png"),
          title: "Verificación",
          paragraph:
            "Como un agente tercero, transparente y sin conflictos de interés, Admetricks permite a los actores de la industria del marketing digital verificar que sus campañas exhiban en los sitios y formatos pautados.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.cards-section {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
}
@media screen and (min-width: 769px) and (max-width: 1068px) {
  .cards-section {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
@media (max-width: 768px) {
  .cards-section {
    flex-direction: column;
    align-items: center;
  }
}
</style>

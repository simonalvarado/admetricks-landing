<template>
  <div class="custom-card">
    <div class="custom-card__icon">
      <img :src="icon" :alt="`${title} icon`" />
    </div>
    <div class="custom-card__content">
      <h2>{{ title }}</h2>
      <p>{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.custom-card {
  padding: 16px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 304px;
}

.custom-card__icon {
  margin: 0 0 16px 0;
  min-height: 28px;
}

.custom-card__icon img {
  width: 40px;
}

.custom-card__content {
  flex: 1;
}
.custom-card__content h2 {
  border-left: 2px solid #3fc3ef;
}
.custom-card__content h2,
.custom-card__content p,
.custom-card__icon img {
  padding: 0 0 0 12px;
}

h2 {
  margin: 0;
  font-size: 18px;
}

p {
  margin: 8px 0;
  font-size: 14px;
}

@media screen and (min-width: 769px) and (max-width: 1068px) {
  .custom-card {
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  .custom-card {
    max-width: 100%;
  }
}
</style>

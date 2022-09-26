<template lang="pug">
v-app
  v-main.grey.lighten-4.pt-0
    component(:is="layout")
      router-view
</template>

<script defer>
export default {
  computed: {
    layout() {
      // Вернем имя шаблона из роута или дефолтное значение (шаблон для страниц, для которых мы не указали шаблон)
      return this.$route.meta.layout || "Default";
    },
  },
};
</script>

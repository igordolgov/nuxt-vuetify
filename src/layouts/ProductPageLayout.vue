<template lang="pug">
//- Шаблон разметки для страницы товара (без Меню)
v-app
  v-main.grey.lighten-4
    HeaderComponent
    v-container
      v-row
        v-col.sm-py-0(cols="12", lg="10")
          router-view.grey.lighten-4
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "ProductPageLayout",
  components: { HeaderComponent },
  data: () => ({}),
};
</script>

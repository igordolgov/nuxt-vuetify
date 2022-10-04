<template lang="pug">
//- Шаблон разметки для СТРАНИЦЫ ТОВАРА (без Меню)
v-app
  v-main.grey.lighten-4
    HeaderComponent
    v-container
      v-row.pt-3.pt-sm-0
        //- v-col.pl-0.pt-0.hidden-xs-only.white
        //-   SidebarComponent
        v-col.sm-py-0.white(
          cols="12",
          offset-xs="0",
          offset-sm="0",
          offset-md="0",
          sm="10",
          lg="10"
        )
          router-view.grey.lighten-4.py-0
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
export default {
  name: "ProductPageLayout",
  components: { HeaderComponent, SidebarComponent },
  data: () => ({
  }),
};
</script>

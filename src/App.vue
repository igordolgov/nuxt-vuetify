<template lang="pug">
v-app(top-fixed-navbar, left-fixed-sidebar)
  v-main.grey.lighten-4
    HeaderComponent
    v-container
      v-row
        v-col.pa-0(cols="12", sm="3", lg="2")
          SidebarComponent
        v-col(cols="12", sm="9", lg="10")
          router-view.grey.lighten-4.col-margin
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  name: "DefaultLayout",

  components: { HeaderComponent, SidebarComponent },

  data: () => ({
    tabs: [
      { title: "Моторы", route: "/motors" },
      { title: "Пропеллеры", route: "/propellers" },
      { title: "Стартеры", route: "/starters" },
    ],
  }),
};
</script>

<style>
@media (max-width: 414px) {
  .col-margin {
    padding-top: 100px;
  }
}
</style>

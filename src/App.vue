<template lang="pug">
v-app
  v-main.grey.lighten-4
    HeaderComponent
    v-container
      v-row
        v-col.pa-0(cols="12")
          SidebarComponent
        v-col(cols="12", offset-sm="4", offset-lg="2", lg="10").sm-py-0
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
      ]
    })
  }
  </script>

  <style>
  @media screen and (max-width: 414px) {
    .col-margin {
      /* margin-top: 96px; */
      padding-top: 96px;
    }
  }
  </style>
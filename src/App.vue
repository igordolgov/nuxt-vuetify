<template lang="pug">
v-app
  v-main.p-0.grey.lighten-4
    HeaderComponent
    v-container
      div.hidden-sm-and-up.text-center
        v-btn.btn-main.font-weight-bold.text-caption.text-sm-body-1.text-center.pa-2.pt-2.mt-0.mb-2.elevation-6(
          to="/" block, active-class="elevation-6")
          v-icon.grey--text.mr-1 mdi-home
          | Главная
        v-btn.product-btn.grey.lighten-3.black--text.font-weight-bold.text-caption.text-sm-body-2.elevation-6.p-2.pt-1.ma-1.mb-5(
          :to="tab.route", v-for="tab in tabs", :key="tab.route", xactive-class="primary darken-2 elevation-6")
          | {{ tab.title }}
      v-row.pa-0
        v-col.pa-0.hidden-xs-only
          SidebarComponent
        v-col.pa-0.mt-3.product-col(cols="12" lg="10" xl="11")
          router-view.grey.lighten-4
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import SidebarComponent from '@/components/SidebarComponent.vue';

  export default {
    name: "DefaultLayout",

    components: { HeaderComponent, SidebarComponent },

    data: () => ({
      tabs: [
        { title: "Моторы", route: "/motors" },
        { title: "Пропеллеры", route: "/propellers" },
        { title: "Стартеры", route: "/starters" }
      ]
    })
  }
</script>

<style>
  .product-col {
    margin-left: 246px;
  }

  @media screen and (max-width: 600px) {
    .product-col {
      margin-left: 0;
    }
  }
</style>

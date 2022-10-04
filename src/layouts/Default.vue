<template lang="pug">
//- Шаблон разметки по умолчанию (с Меню)
.default-component
  v-app
    v-main.grey.lighten-4
      HeaderComponent
      v-container
        v-row
          v-col(cols="12").pt-2.main-btn
            SidebarComponent.hidden-xs-only
            v-btn(to="/" block).hidden-sm-and-up.grey.lighten-2.elevation-7.mt-1
              b.black--text Главная
          v-col.mt-16.pt-10.pt-sm-0.mt-sm-0.pl-sm-1(cols="12", offset-xs="3" offset-sm="3" offset-lg="2" offset-xl="2" sm="10")
            router-view.grey.lighten-4
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import SidebarComponent from "@/components/SidebarComponent";
export default {
  name: "Default",
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
  .main-btn {
    position: fixed;
    top: 40px;
    z-index: 5;
  }
</style>

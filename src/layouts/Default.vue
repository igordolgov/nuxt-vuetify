<template lang="pug">
//- Шаблон разметки по умолчанию (с Меню)
v-app
  v-main.grey.lighten-4
    HeaderComponent
    v-container
      v-row.col-margin
        v-col.pa-0(cols="12")
          SidebarComponent
        v-col.sm-py-0(cols="12", offset-sm="4", offset-lg="2", lg="10")
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

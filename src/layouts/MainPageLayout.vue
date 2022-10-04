<template lang="pug">
//- Шаблон разметки для ГЛАВНОЙ СТРАНИЦЫ
v-app
  v-main.grey.lighten-4
    HeaderComponent
    v-container
      v-row.pt-3.pt-sm-0
        v-col.pl-0.pt-0.white.hidden-xs-only
          SidebarComponent
        v-col.pt-3.py-sm-0.py-lg-3.white(
          cols="12",
          offset-sm="3",
          offset-md="0",
          sm="10",
          lg="10"
        )
          router-view.grey.lighten-4.py-0
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import SidebarComponent from "@/components/SidebarComponent";
export default {
  name: "main-page-layout",
  components: { HeaderComponent, SidebarComponent },
  data: () => ({

  }),
};
</script>

<template lang="pug">
.sidebar.elevation-4
  v-list.px-3.py-0.pb-0.grey.lighten-2.sidebar-height
    v-list-item.px-0
      v-list-item-content.d-block.d-sm-flex.py-2.text-center
        v-btn.product-btn.font-weight-bold.text-caption.elevation-3.px-3.mb-2.rounded-lg(
          min-width="47.5%",
          @click="scrollToTop()",
          :to="tab.route",
          v-for="tab in tabs",
          :key="tab.route",
          active-class="primary darken-1"
        )
          v-icon.grey--text.text--lighten-1.pr-1 {{ tab.icon }}
          | {{ tab.title }}
</template>

<script>
export default {
  name: "sidebar-component",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  data: () => ({
    tabs: [
      { title: "Главная", icon: "mdi-home", route: "/" },
      { title: "Моторы", route: "/motors" },
      { title: "Пропеллеры", route: "/propellers" },
      { title: "Стартеры", route: "/starters" },
    ],
  }),
};
</script>

<style>
.product-btn {
  justify-content: left !important;
}
@media (max-width: 414px) {
  .sidebar {
    position: fixed;
    top: 47px;
    left: 0;
    width: 100%;
    height: 100px;
  }
  .sidebar-height {
    height: 99vh;
  }
}
@media (min-width: 415px) and (max-width: 959px) {
  .sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    width: 22%;
    height: 100%;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: auto;
    padding-left: 0;
    padding-right: 0;
  }
  .sidebar-height {
    height: 100%;
  }
}
@media (min-width: 960px) and (max-width: 1903px) {
  .sidebar {
    position: fixed;
    top: 48px;
    width: 190px;
    height: 100%;
    left: 85px;
  }
  .sidebar-height {
    height: 100%;
  }
}
@media (min-width: 1904px) {
  .sidebar {
    position: fixed;
    top: 48px;
    left: 100px;
    width: 248px;
    height: 100%;
  }
  .sidebar-height {
    height: 100%;
  }
  .sidebar .v-btn {
    max-width: 218px !important;
  }
}
</style>
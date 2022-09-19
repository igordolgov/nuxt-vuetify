<template lang="pug">
v-sidebar.sidebar.elevation-6
    v-list.px-3.py-0.pb-0.grey.lighten-2.sidebar-height
      v-list-item.px-0
        v-list-item-content.d-block.d-sm-flex.pb-1.text-center
          v-btn.product-btn.font-weight-bold.text-caption.elevation-3.px-3.mb-2.mx-1(min-width="47.6%" @click="scrollToTop()"
            :to="tab.route"
            v-for="tab in tabs" :key="tab.route",
            active-class="primary darken-1")
            v-icon.grey--text.text--lighten-1.pr-1 {{ tab.icon }}
            | {{ tab.title }}
</template>

<script>
export default {
  name: "SidebarComponent",

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },

  data: () => ({
    tabs: [
      { title: "Главная", icon: 'mdi-home', route: "/" },
      { title: "Моторы", icon: 'mdi-engine', route: "/motors" },
      { title: "Пропеллеры", icon: 'mdi-current-ac', route: "/propellers" },
      { title: "Стартеры", icon: 'mdi-cog-clockwise', route: "/starters" },
    ]
  })
}
</script>

<style>

  .product-btn {
    justify-content: left !important;
  }

  @media (max-width:414px) {
    .sidebar {
      position: fixed;
      border-radius: 0px;
      top: 43px;
      left: 0px;
      width: 100%;
      height: 100px;
      z-index: 1;
      overflow-x: hidden;
      overflow-y: hidden;
      padding-left: 0;
      padding-right: 0;
    }
    .sidebar-height {
      height: 99vh;
    }
  }

  @media (min-width:414px) {
    .sidebar {
      position: fixed;
      border-radius: 0px;
      top: 43px;
      left: 0px;
      width: 190px;
      height: 99vh;
      z-index: 1;
      overflow-x: hidden;
      overflow-y: auto;
      padding-left: 0;
      padding-right: 0;
    }
    .sidebar-height {
      height: 99vh;
    }
  }
</style>

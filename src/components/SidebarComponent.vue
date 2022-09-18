<template lang="pug">
.sidebar-component.fill-height
  v-list(app).pt-3.px-2.px-sm-3.grey.lighten-2.fill-height.fixed(width="230px")
    v-btn.font-weight-bold.text-caption.text-sm-body-2.elevation-3.pt-0.mb-2(
      to="/" width="100%", active-class="primary darken-1")
      v-icon.grey--text.text--lighten-1.mr-1 mdi-home
      | Главная
    .grey--text.mt-1.mb-n2.text-center.text-h6
      | Каталог:
    v-list-item.px-0
      v-list-item-content
        v-list-item-title
          v-btn.product-btn.font-weight-bold.text-caption.text-sm-body-2.elevation-3.pl-3.mb-2(
            :to="tab.route" block
            v-for="tab in tabs" :key="tab.route",
            active-class="primary darken-1")
            v-icon.grey--text.text--lighten-1.mr-1 {{ tab.icon }}
            | {{ tab.title }}
</template>

<script>
export default {
  name: "SidebarComponent",

  data: () => ({
    tabs: [
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

  .fixed {
    position: fixed !important;
  }
</style>

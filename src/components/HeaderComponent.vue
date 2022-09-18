<template lang="pug">
.header-component
  v-app-bar(app fixed dense dark color="primary")
    v-container.d-flex
      router-link(to="/")
        v-img.mr-2.mt-3.mt-sm-1(src="img/logo-sks-white.png"
          max-width="53px" max-height="42px" position="center")
          v-spacer
      v-toolbar-title.my-auto SKSAVIA.RU
      v-spacer
      v-app-bar-nav-icon.d-sm-none(@click="drawer = true" width="24px")
      v-btn.primary.lighten-1.hidden-xs-only.py-0.ml-2.elevation-2.rounded-xl(
        :href="item.adress" v-for="item in menuItems" :key="item.index")
        | {{ item.title }}
  v-navigation-drawer(v-model="drawer" absolute temporary fill-height dark)
    v-list(nav dense)
      v-list-item-group(v-model="group"
          active-class="primary--text text--accent-4")
        v-list-item(:href="item.adress" v-for="item in menuItems" :key="item.index")
          v-btn.secondary.lighten-3.white--text.my-1.rounded-lg(elevation="6" x-large)
            v-list-item-title {{ item.title }}
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null
    }),

    computed: {
      menuItems() {
        return [
          {
            index: '1',
            title: '+7 (903) 425-30-68',
            adress: 'tel:+79034253068',
          },
          {
            index: '2',
            title: 'sksavia@mail.ru',
            adress: 'mailto:sksavia@mail.ru',
          }
        ]
      }
    }
  }
</script>

<style>
</style>
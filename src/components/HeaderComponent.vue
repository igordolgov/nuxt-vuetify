<template lang="pug">
.header-component
  v-app-bar(app fixed dense dark style="background: #069")
    v-container.d-flex
      router-link(to="/").my-auto
        v-img.mr-2(src="img/logo-sks-white.png"
          max-width="53px" position="center")
          v-spacer
      v-toolbar-title.my-auto SKSAVIA.RU
      v-spacer
      v-app-bar-nav-icon.d-sm-none(@click="drawer = true" width="24px")
      v-btn.light-blue.accent-4.hidden-xs-only.py-0.ml-2.elevation-2.rounded-xl(
        :href="item.adress" v-for="item in menuItems" :key="item.index")
        | {{ item.title }}
  v-navigation-drawer.grey.lighten-2(v-model="drawer" fixed temporary width="auto")
    v-list(nav dense)
      v-list-item-group.list-position(v-model="group"
          active-class="primary--text text--accent-4")
        v-list-item(:href="item.adress" v-for="item in menuItems" :key="item.index")
          v-btn.white--text.my-1.rounded-lg(elevation="6" x-large style="background: #069")
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
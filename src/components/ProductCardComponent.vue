<template lang="pug">
v-col.pa-2(cols="12" sm="6" md="4" xl="3")
  router-link(:to="{ name: 'product', params: { id: product.id } }")
    v-card.pa-2(elevation="8", height="100%")
      v-row
        v-col(cols="6" sm="6" lg="8")
          v-img.mb-1.grey.lighten-3(
            :src="product.image",
            :alt="product.title",
            contain,
            aspect-ratio="1",
            height="100%"
          )
        v-col.pl-0.text-body-2.text-lg-caption(cols="6" sm="6" lg="4")
          p.title-height.mb-0.font-weight-bold
            | {{ product.title }}
          //- hr.mb-2
          p.pa-0.ma-0(v-if="product.quantity > 0")
            | Кол-во: {{ product.quantity }} шт.
          p.red--text.pb-0.mb-0(
            v-if="product.quantity === 0 || product.quantity === ''"
          )
            | Нет в наличии
          p.pb-0.mb-0
            | {{ product.condition }}
          p.pb-1.mb-0
            | Цена: {{ product.price | numberFormat }} ₽
          p.pb-1.mb-0
            | {{ product.description }}
</template>

<script>
import gotoPage from "@/helpers/gotoPage";
import numberFormat from "@/helpers/numberFormat";

export default {
  data() {
    return {
      color: "#73B6EA",
    };
  },
  filters: {
    // ФИЛЬТРЫ (Объект методов). Ключ - название фильтра, значение - функция, которая совершает полезную работу
    numberFormat,
  },
  methods: {
    gotoPage,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ["product"],
};
</script>

<style>
.title-height {
  min-height: 4em;
}
.link-style {
  text-decoration: none !important;
}
</style>

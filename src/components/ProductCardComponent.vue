<template lang="pug">
v-col.pa-1(cols="12" sm="6" md="4" xl="3")
  router-link.decor(:to="{ name: 'product', params: { id: product.id } }")
    v-card.pa-2.rounded-lg(elevation="4", height="100%")
      v-row
        v-col.pr-2(cols="6", lg="7")
          v-img.mb-1.grey.lighten-3(
            :src="product.image",
            :alt="product.title",
            contain,
            aspect-ratio="1",
            height="auto"
          )
        v-col.pl-0.fs.lh.text-lg-caption(cols="6", sm="6", lg="4")
          p.title-height.mb-0.font-weight-bold
            | {{ product.title }}
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
import numberFormat from "@/helpers/numberFormat";

export default {
  data() {
    return {
      color: "#73B6EA",
    };
  },
  filters: {
    // ФИЛЬТРЫ (Объект методов). Ключ - название фильтра, значение - функция, совершащая полезную работу
    numberFormat,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ["product"],
};
</script>

<style>
.title-height {
  min-height: 2.8em;
}
.fs {
  font-size: 14px;
}
.decor {
  text-decoration: none !important;
}
.lh {
  line-height: 1.3;
}
</style>

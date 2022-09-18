<template lang="pug">
//- В v-for лучше обращаться не к геттеру, а к вычисляемому свойству
.pa-0
  v-row.pb-0.d-flex(justify="center")
    v-col.col-style.pa-0.ml-2.mb-3
      img(
        :src="item.product.image",
        width="120",
        height="120",
        :alt="item.product.title"
      )
    h3.
      {{ item.product.title }}
    span.
      Артикул: {{ item.product.id.category }}
    ProductCounter.product__counter.form__counter(
      v-model="amount",
      :min-value="1"
    )
      b.product__price
        //- Стоимость товаров в корзине: цена товара умноженная на количество
        | {{ (item.amount * item.product.price || '') | numberFormat }} ₽
</template>

<script>
import numberFormat from "@/helpers/numberFormat"; // Форматирование цены
import { mapMutations } from "vuex";
import ProductCounter from "@/components/ProductCounter.vue";

export default {
  components: { ProductCounter },
  filters: { numberFormat }, // Форматирование цены (подключаем как фильтр)
  props: {
    item: {
      type: Array, // Тип параметра: Массив
      default: () => [], // Значение по умолчанию (пустой массив)
    },
  },
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        this.$store.commit("updateCartProductAmount", {
          productId: this.item.productId,
          amount: value,
        });
      },
    },
  },
  methods: {
    ...mapMutations({ deleteProduct: "deleteCartProduct" }),
  },
};
</script>

<style>
.col-style {
  width: 600px;
  max-width: 600px;
}
</style>

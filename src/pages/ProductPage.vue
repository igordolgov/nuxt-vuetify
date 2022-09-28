<template lang="pug">
//- СТРАНИЦА ТОВАРА
v-container
  v-row.pb-0.white
    v-col.pa-0.mr-3.mb-3(cols="12", sm="8")
      v-sheet.img-height.pa-0.d-flex.align-center.grey.lighten-3
        v-carousel.pa-0(
          v-model="model",
          :progress="false",
          :continuous="false",
          light,
          hide-delimiters,
          height="100%",
          :aspect-ratio="1"
        )
          v-carousel-item(
            :src="image.src",
            v-for="(image, i) in product.images",
            :key="i",
            contain,
            :aspect-ratio="1",
            height="auto"
          )
    v-col.font.text-sm-body-2.pt-0(cols="12", sm="3", lg="3")
      span.secondary--text.text--lighten-4 Артикул:
      | {{ product.category + '-' + product.id }}
      hr.secondary--text.mb-2
      h3 {{ product.title }}
      span.d-sm-flex.mr-2.pa-0.ma-0(v-if="product.quantity > 0").
        Кол-во: {{ product.quantity }} шт.
      span.d-sm-flex.mr-2.red--text.pb-0.mb-0(
        v-if="product.quantity === 0 || product.quantity === ''"
      )
        | Нет в наличии
      span.d-sm-flex.mr-2.pb-0.mb-0.
        {{ product.condition }}
      span.d-sm-flex.mr-1.pb-1.mb-0.
        Цена: {{ product.price | numberFormat }}₽
      span.d-sm-flex.mr-3.pb-1.mb-0.
        {{ product.description }}
</template>

<script defer>
import products from "@/data/products";
import categories from "@/data/categories";
import numberFormat from "@/helpers/numberFormat";

export default {
  data() {
    return {
      model: 0,
      layout: "ProductPageLayout",
    };
  },

  filters: {
    // ФИЛЬТРЫ (Объект методов). Ключ - название фильтра, значение - функция, которая совершает полезную работу.
    numberFormat, // здесь ключ и значение совпадают, используется сокращение
  },

  computed: {
    product() {
      // Информация о просматриваемом продукте
      return products.find((product) => product.id === +this.$route.params.id);
      // В списке товаров находим товар, у которого идентификатор совпадает с идентификатором, переданным через входные параметры
    },

    category() {
      return categories.find(
        (category) => category.id === this.product.categoryId
      ); // аналогично для категории (для отображения категории на карточке товара)
    },
  },
};
</script>

<style>
.v-icon__svg {
  fill: lightgrey;
}
.mdi-minus {
  color: #fff !important;
}
@media (min-width: 415px) {
  .v-carousel {
    height: 89vh !important;
  }
}
@media (max-width: 414px) {
  .font {
    font-size: 15px !important;
    line-height: 1.25;
  }
}
</style>

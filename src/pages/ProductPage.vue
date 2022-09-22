<template lang="pug">
//- Страница товара
v-container
  v-row.pb-0
    v-col.pa-0.mr-3.mb-3(cols="12", sm="7", lg="8")
      v-sheet.img-height.pa-0.d-flex.align-center.grey.lighten-2.elevation-1
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
            :show-arrows="arrows",
            v-for="(image, i) in product.images",
            :key="i",
            contain,
            :aspect-ratio="1",
            height="auto"
          )
    v-col.text-caption.text-sm-body-1.pt-0(cols="12", sm="4", lg="3")
      span.secondary--text.text--lighten-4 Артикул:
      | {{ product.category + '-' + product.id }}
      hr.secondary--text
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

<script>
import products from "@/data/products";
import categories from "@/data/categories";
import numberFormat from "@/helpers/numberFormat";

export default {
  data() {
    // СОСТОЯНИЕ
    return {
      model: 0,
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
      );
      // аналогично для категории (для отображения категории на карточке товара)
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
@media (min-width: 414px) {
  .v-carousel {
    height: 90vh !important;
  }
}
</style>

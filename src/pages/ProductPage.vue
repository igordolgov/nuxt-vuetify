<template lang="pug">
//- Страница товара
v-container
  v-row.pb-0
    v-col.pa-0.mr-3.mb-3(cols="12" sm="7" lg="8")
      v-sheet.img-height.pa-0.d-flex.align-center.grey.lighten-2.elevation-1
        v-carousel.pa-0(v-model="model" light hide-delimiters height="100%" :aspect-ratio="1")
          v-carousel-item(:src="image.src"
            v-for="(image, i) in product.images" :key="i"
              contain :aspect-ratio="1" height="auto")
    v-col(cols="12" sm="4" lg="3").text-body-2
      span.secondary--text.text--lighten-4 Артикул: {{ product.category + "-" + product.id }}
      hr.d-none.d-sm-flex.mb-2.secondary--text
      h3 {{ product.title }}
      span.d-sm-flex.mr-3.pa-0.ma-0(v-if="product.quantity > 0").
        Кол-во: {{ product.quantity }} шт.
      span.d-sm-flex.mr-3.red--text.pb-0.mb-0(
        v-if="product.quantity === 0 || product.quantity === ''")
        | Нет в наличии
      span.d-sm-flex.mr-3.pb-0.mb-0.
        {{ product.condition }}
      span.d-sm-flex.mr-1.pb-1.mb-0.
        Цена: {{ product.price | numberFormat }}&nbsp;₽
      span.d-sm-flex.mr-3.pb-1.mb-0.
        {{ product.description }}
</template>

<script>
import products from '@/data/products';
import categories from '@/data/categories';
import ProductCounter from '@/components/ProductCounter.vue';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  components: {
    ProductCounter
  },

  data() { // СОСТОЯНИЕ
    return {
      model: 0,
      productAmount: 1 // Свойство для хранения количества товаров в Корзине
    };
  },

  filters: { // ФИЛЬТРЫ (Объект методов). Ключ - название фильтра, значение - функция, которая совершает полезную работу.
    numberFormat // здесь ключ и значение совпадают, используется сокращение
  },

  computed: {
    product() { // Информация о просматриваемом продукте
      return products.find((product) => product.id === +this.$route.params.id)
      // В списке товаров находим товар, у которого идентификатор совпадает с идентификатором, переданным через входные параметры
    },

    category() {
      return categories.find((category) => category.id === this.product.categoryId);
      // аналогично для категории (для отображения категории на карточке товара)
    }
  },

  methods: {
    gotoPage,
    addToCart() { // Добавление товаров в Корзину.
    // Вызываем мутацию с помощью $store.commit
      this.$store.commit(
        'addProductToCart', // название мутации
        { productId: this.product.id, amount: this.productAmount } // и передаваемые данные
      )
    }
  }
}
</script>

<style>
  .v-icon__svg {
    fill: lightgrey;
  }
</style>

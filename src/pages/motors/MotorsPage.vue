<template lang="pug">
//-
  Подключаем компонент ProductListComponent и передаем ему параметр products,
  который равен массиву products, хранящемуся в состоянии data (в computed)
.motors-page
  ProductListComponent(:products="products").pt-12.pt-sm-4
</template>

<script defer>
import products from "@/data/products"; // импортируем товары в переменную products
import ProductListComponent from "@/components/ProductListComponent.vue";

export default {
  components: {
    ProductListComponent,
  },

  data() {
    return {
      filterCategory: "Моторы", // Категория отображаемая на странице
      filterColorsId: "",
      layout: "Default", // Разметка используемая на странице
    };
  },

  computed: {
    // Вычисляемые свойства - это свойства, значения которых получаются динамически, с помощью
    // функций, а результаты кэшируются до тех пор, пока зависимые свойства не будут изменены
    // (чтобы не пересчитывать значения каждый раз заново, если они не изменяются)
    // Внутри вычисляемых свойств могут быть другие вычисляемые свойства, пропсы...
    filteredProducts() {
      // Функция фильтрации товаров (отфильтрованный список товаров)
      let filteredProducts = products; // Создадим переменную равную списку товаров products

      if (this.filterCategory) {
        // Если в поле "Категории" выбрана категория,
        filteredProducts = filteredProducts.filter(
          (product) => product.category === this.filterCategory
        ); // Показать только те товары, у которых категория соответствует выбранной категории
      }
      return filteredProducts; // вычисляемые свойства возвращают переменную.
      // т.е. результат выполнения функции сохраняем в переменную filteredProducts
    },

    products() {
      // Список товаров на странице
      return this.filteredProducts;
    },
  },
};
</script>

<style>
@media screen and (max-width: 415px) {
  .motors-page {
    margin-top: -109px;
  }
}
</style>
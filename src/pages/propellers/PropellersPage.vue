<template lang="pug">
//-
  Подключаем компонент ProductListComponent и передаем ему параметр products,
  который равен массиву products, хранящемуся в состоянии data (в computed)
ProductListComponent(:products="products")
</template>

<script>
// СЕКЦИЯ СКРИПТОВ -------------------------------------------------------
// Импортируем файлы и компоненты, которые понадобятся в этом файле
// (чтобы можно было подключать эти компоненты):
// "@" означает "абсолютный путь до папки src"
import products from "@/data/products"; // импортируем товары в переменную products
import ProductListComponent from "@/components/ProductListComponent.vue";
import BasePagination from "@/components/BasePagination.vue";
import ProductFilter from "@/components/ProductFilter.vue";

export default {
  components: { ProductListComponent, BasePagination, ProductFilter },

  data() {
    return {
      // Создаём (придумываем) свойства для хранения значений из полей ввода и др.
      filterPriceFrom: 0, // Начальная цена в фильтре (по умолчанию: 0)
      filterPriceTo: 0, // Конечная цена в фильтре (по умолчанию: 0)
      filterCategory: "Пропеллеры", // Категория (по умолчанию: "Все категории")
      filterColorsId: "", // Фильтр по цвету (по умолчанию: "Без фильтра")
      page: 1, // Текущая страница (по умолчанию: первая)
      productsPerPage: 6, // Товаров на странице
    };
  },

  computed: {
    // ВЫЧИСЛЯЕМЫЕ СВОЙСТВА:
    // Вычисляемые свойства - это свойства, значения которых получаются динамически, с помощью
    // функций, а результаты кэшируются до тех пор, пока зависимые свойства не будут изменены
    // (чтобы не пересчитывать значения каждый раз заново, если они не изменяются)
    // Внутри вычисляемых свойств могут быть другие вычисляемые свойства, пропсы...
    filteredProducts() {
      // Функция фильтрации товаров (отфильтрованный список товаров)
      let filteredProducts = products; // Создадим переменную равную списку товаров products

      if (this.filterPriceFrom > 0) {
        // Если в поле "От" введена цена (т.е. больше нуля),
        filteredProducts = filteredProducts // Подменяем список товаров списком...
          .filter((product) => product.price > this.filterPriceFrom); // ...с фильтром,
        // который оставит товары с ценой большей, чем указанная в поле ввода цены "От"
      }

      if (this.filterPriceTo > 0) {
        // Если в поле "До" введена цена (т.е. больше нуля),
        filteredProducts = filteredProducts.filter(
          (product) => product.price < this.filterPriceTo
        ); // Показать только
        // те товары, цена которых меньше указанной в этом поле
      }

      if (this.filterCategory) {
        // Если в поле "Категории" выбрана категория,
        filteredProducts = filteredProducts.filter(
          (product) => product.category === this.filterCategory
        ); // Показать
        // только те товары, у которых категория соответствует выбранной категории
      }

      if (this.filterColorsId) {
        // Фильтруем товары по цвету
        filteredProducts = filteredProducts.filter((product) =>
          product.colors // показать только товары с цветами,
            .find((position) => position === this.filterColorsId)
        ); // выбранными в поле ввода
      }

      return filteredProducts; // вычисляемые свойства возвращают переменную.
      // т.е. результат выполнения функции сохраняем в переменную filteredProducts
    },

    products() {
      // Список товаров на странице (после настроек пагинации)
      const offset = (this.page - 1) * this.productsPerPage; // Начальный индекс
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },

    countProducts() {
      // Общее количество товаров
      return this.filteredProducts.length;
    },
  },
};
</script>
<template lang="pug">
v-row.product-list
  ProductCardComponent(
    v-for="product in products",
    :key="product.id",
    :product="product"
  )
</template>

<script>
import ProductCardComponent from "./ProductCardComponent.vue";

export default {
  components: { ProductCardComponent },
  props: {
    // Входные параметры:
    products: {
      // Назовём параметр "products"
      type: Array, // Тип параметра: Массив
      default: () => [], // Значение по умолчанию (пустой массив)
    },
  },
};
</script>

<template lang="pug">
ProductListComponent(:products="products")
</template>

<script defer>
import products from "@/data/products";
import ProductListComponent from "@/components/ProductListComponent.vue";

export default {
  components: {
    ProductListComponent
  },

  data() {
    return {
      filterCategory: "Пропеллеры" // Категория отображаемая на странице
    }
  },

  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterCategory) {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === this.filterCategory
        )
      } return filteredProducts
    },

    products() {
      return this.filteredProducts
    }
  }
}
</script>

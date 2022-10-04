<template lang="pug">
.starters-page
  ProductListComponent(:products="products").pt-0.pt-sm-0
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
      filterCategory: "Стартеры" // Категория отображаемая на странице
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

<style>
  .starters-page {
    margin-top: 16px;
  }
  @media screen and (max-width: 415px) {
    .starters-page {
      margin-top: -61px;
    }
  }
  </style>

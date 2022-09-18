<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link
            class="breadcrumbs__link"
            :to="{name: 'main'}"
          >
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Корзина
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">
        Товаров в корзине: {{ countProducts }}
      </span>
    </div>

    <section class="cart">
      <form
        class="cart__form form"
        action="#"
        method="POST"
      >
        <div class="cart__field">
          <ul class="cart__list">
            <CartItem
              v-for="item in products"
              :key="item.productId"
              :item="item"
            />
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{ totalPrice | numberFormat }}</span>
          </p>

          <button
            class="cart__button button button--primery"
            type="submit"
          >
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
// eslint-disable-next-line
import numberFormat from '@/helpers/numberFormat'; // Форматирование цены
import { mapGetters } from 'vuex';
// eslint-disable-next-line
import CartItem from '@/components/CartItem'; // Форматирование цены

export default {
  name: 'CartPage',
  filters: { numberFormat }, // Форматирование цены (подключаем как фильтр)
  components: { CartItem },
  computed: {
    ...mapGetters({ // Вспомогательная функция во Vuex для проксирования геттеров
    // в вычисляемые свойства компонента (сначала импортируем её)
      products: 'cartDetailProducts',
      totalPrice: 'cartTotalPrice',
      countProducts: 'cartCountProducts',
    }),
  },
};
</script>

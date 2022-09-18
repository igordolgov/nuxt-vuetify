<template lang="pug">
//- <router-link> — компонент предназначенный для навигации пользователя в приложении
//- с клиентской маршрутизацией. Путь назначения указывается входным параметром to
router-link.header__cart(aria-label="Корзина с товарами" :to="{name: 'cart'}")
  svg(width="30" height="21" fill="currentColor")
    use(href="#icon-cart")
  span.header__count(aria-label="Количество товаров")
    //- C помощью $store получаем доступ к хранилищу (в store/index.js)
    | {{ $store.state.cartProducts.length }}
</template>

<script>
  export default {};
</script>

<template lang="pug">
v-row
  v-col.py-0
    v-container.pa-0.pt-1
      h3.font-weight-bold.grey--text.text--darken-2.
        Приветствуем Вас на нашем сайте!
      v-divider.hidden-xs-only
      span.text-subtitle-2.font-italic.
        Надеемся, что Вы найдёте то, что искали
      v-img.mt-1(src="https://avavatar.ru/images/full/17/IpiNMnqesRApQ4Ud.jpg")
    //-
      Подключаем ProductFilter и передаём ему значения через пропсы (с помощью v-bind).
      * Про использование модификатора ".sync" см. в файле ProductFilter.vue
    //- ProductFilter(:price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo",
    //-               :category-id.sync="filterCategoryId" :colors-id.sync="filterColorsId")
    //- section.catalog
  //-
    Подключаем компонент BasePagination. Так как нам надо связать только одно
    свойство ("page"), мы можем использовать директиву v-model. Параметры ("per-page")
    вызываются в cebab-case, хотя в самом компоненте они записаны в camelCase.
  //- BaseBagination(v-model="page" :count="countProducts" :per-page="productsPerPage")
</template>

<script>
export default {
  loaded() {
    window.scrollTo(0, 0);
  },

  data() {
    return {
      layout: "Default",
    };
  },
};
</script>

<style>
@media screen and (max-width: 415px) {
  .col-margin {
    margin-top: 96px;
  }
}
</style>

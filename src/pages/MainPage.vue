<template lang="pug">
v-row
  v-col.py-0.py-sm-1
    v-container.pa-0
      h3.font-weight-bold.grey--text.text--darken-2.
        Приветствуем Вас на нашем сайте!
      v-divider.hidden-xs-only
      span.text-subtitle-2.font-italic.
        Надеемся, что Вы найдёте то, что искали
      .cloud
        v-img.mt-1(src="https://dopobr.tularegion.ru/images/events/cover/cacb10296dcb9d7101b8b9b3d7e62459_big.jpg")
        img.cloud1(src="cloud-01.png", alt)
        //- img.cloud2(src="cloud-02.png", alt)
        img.cloud3(src="cloud-03.png", alt)
        //- img.cloud4(src="cloud-04.png", alt)
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
      layout: "MainPageLayout",
    };
  },
};
</script>

<style>
.cloud {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  /* background: url(mountain.jpg); */
  background-size: cover;
}
.cloudcontent {
  position: relative;
  padding: 30px;
  color: #337ab7;
  font-size: 22px;
  font-weight: bold;
  z-index: 100;
}
.cloud img {
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
}
@-webkit-keyframes animCloud {
  from {
    -webkit-transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(-100%);
  }
}
@-moz-keyframes animCloud {
  from {
    -moz-transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
  }
}
@keyframes animCloud {
  from {
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
.cloud1 {
  -webkit-animation: animCloud 20s infinite linear;
  -moz-animation: animCloud 20s infinite linear;
  animation: animCloud 20s infinite linear;
}
.cloud2 {
  -webkit-animation: animCloud 40s infinite linear;
  -moz-animation: animCloud 40s infinite linear;
  animation: animCloud 40s infinite linear;
}
.cloud3 {
  -webkit-animation: animCloud 60s infinite linear;
  -moz-animation: animCloud 60s infinite linear;
  animation: animCloud 60s infinite linear;
}
.cloud4 {
  -webkit-animation: animCloud 80s infinite linear;
  -moz-animation: animCloud 80s infinite linear;
  animation: animCloud 80s infinite linear;
}
</style>

<template lang="pug">
aside
  h2 Фильтры
  fieldset
    legend Категория
    label
      select(name="category" v-model.number="currentCategoryId")
        option(value="0") Моторы
        option(:value="category.id" v-for="category in categories" :key="category.id").
          {{ category.title }}
</template>

<script>
// Импортируем данные из файлов в новые переменные
import categories from '@/data/categories';

export default {
  data() { // СОСТОЯНИЕ (В компоненте состояние должно быть функцией, а не объектом).
  // Если значения этих свойств изменятся, компонент перерисуется
    return {
      currentCategoryId: 0,
    };
  },
  props: { // ВХОДНЫЕ ПАРАМЕТРЫ (их нужно привязать с помощью v-model):
    categoryId: {
      type: Number,
      default: 0,
    },
  },
  computed: { // Методы, которые каждый раз пересчитываются
    categories() {
      return categories;
    },
  },
  watch: { // НАБЛЮДАТЕЛЬ (механизм, который следит за свойством или параметром, и как
  // только значение этого свойства меняется, вызывается определённая нами функция).
    categoryId(value) {
      this.currentCategoryId = value;
    },
  },
  methods: { // Методы, используемые только для действий (без пересчёта)
    submit() { // Функция обработки событий при нажатии на кнопку "Применить".
      // $emit - метод для отправки событий (для двунаправленной связи).
      // У него два агрумента: первый - название события (в "cebab-case")
      // и второй - любые данные, передаваемые вместе с событием
      // (чтобы их вывести, используется переменная $event),
      // например: @priceFrom="alert($event)"
      this.$emit('update:categoryId', this.currentCategoryId);
    },
  },
};
</script>

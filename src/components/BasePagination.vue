<template lang="pug">
ul.catalog__pagination.pagination
  li.pagination__item
    a.pagination__link.pagination__link--arrow(:class="{'pagination__link--disabled': page === 1}" aria-label="Предыдущая страница" href="#" @click.prevent="prevPage()" :disabled="page === 0")
      svg(width="8" height="14" fill="currentColor")
        use(href="#icon-arrow-left")
    //- Отобразим нумерацию на странице (с помощью перебора "v-for").
    //- Жирным шрифтом (класс 'pagination__link--current) отображается только
    //- текущая страница (т.е. при условии, что номер страницы совпадает с номером
    //- текущей страницы).
    //- Модификатор .prevent (для директивы v-on) используется чтобы предотвратить
    //- поведение при клике по умолчанию (переход наверх страницы и т.п.)
  li.pagination__item(v-for="pageNumber in pages" :key="pageNumber")
    a.pagination__link(href="#" :class="{'pagination__link--current': pageNumber === page}",
                      @click.prevent="paginate(pageNumber)").
      {{ pageNumber }}
  li.pagination__item
    a.pagination__link.pagination__link--arrow(:class="{'pagination__link--disabled': page === pages}" href="#" aria-label="Следующая страница" @click.prevent="nextPage()" :disabled="page >= pages -1")
      svg(width="8" height="14" fill="currentColor")
        use(href="#icon-arrow-right")
</template>

<script>
export default {
  // настроим директиву v-model (см. в App.vue|<BasePagination >)
  model: {
    prop: 'page', // свойство, которое передаётся, будет записываться в 'page'
    event: 'paginate' // событие, которое мы передадим, назовём 'paginate'
  },
  
  props: { // Входящие параметры компонента:
    page: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 0
    }
  },

  computed: { // Вычисляемые функции компонента:
    pages() { // Вычисляем количество страниц: общее количество товаров
    // разделим на количество элементов на странице (и округлим в большую сторону)
      return Math.ceil(this.count / this.perPage)
    }
  },

  methods: {
    paginate(page) { // Переключение на страницу по клику на одноимённом номере
    // Про $emit см. в файле ProductFilter.vue
      this.$emit('paginate', page) // см. настройки model выше
    },
    prevPage() { // Предыдущая страница
      if (this.page !== 1) { // Если мы на странице 1, при клике на стрелочку
        this.$emit('paginate', (this.page - 1))
      }
    },
    nextPage() { // Следующая страница
      if (this.page < (this.count / this.perPage)) {
        this.$emit('paginate', (this.page + 1))
      }
    }
  }
}
</script>

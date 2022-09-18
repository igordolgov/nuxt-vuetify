<template lang="pug">
.product-counter
  button(type="button", aria-label="Убрать один товар", @click.prevent="counterChange(value - 1)")
    svg(width="10", height="10", fill="currentColor")
      use(href="#icon-minus")
  input(type="text", v-model.number="value", name="count", readonly)
  button(type="button", aria-label="Добавить один товар", @click.prevent="counterChange(value + 1)")
    svg(width="10", height="10", fill="currentColor")
      use(href="#icon-plus")
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['value', 'minValue'],
  model: {
    prop: 'value',
    event: 'change',
  },
  methods: {
    counterChange(newCounter) {
      if (newCounter >= this.minValue) {
        this.$emit('change', newCounter);
      }
    },
  },
  watch: {
    value(newVal) {
      this.counterChange(newVal);
    },
  },
};
</script>

<style>
  button {
    cursor: pointer;
  }
</style>

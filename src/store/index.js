// Vuex - инструмент для организации централизованного хранилища
import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/data/products';

Vue.use(Vuex); // Сообщаем Vue, что будем использовать хранилище Vuex

// Создаём (и сразу экспортируем) хранилище
// Доступ к хранилищу можно получить из любого компонента с помощью $store
export default new Vuex.Store({
  state: { // Зададим состояние для хранения списка товаров
    cartProducts: [
      { productId: 1, amount: 1 }
    ]
  },
  mutations: { // Мутации - единственный способ изменения состояния хранилища во Vuex.
    // Чтобы вызвать мутацию, необходимо вызвать $store.commit
    addProductToCart(state, { productId, amount }) {
      // Проверяем, есть ли уже такой товар в Корзине (с таким же id)
      const item = state.cartProducts.find((item2) => item2.productId === productId);

      if (item) { // Если в Корзине уже есть такой же товар,
        item.amount += amount; // то увеличиваем значение его количества
      } else { // Если такого же товара в Корзине нет,
        state.cartProducts.push({ // то добавляем новый товар
          productId, // Сокращение вместо записи 'productId: productId'
          amount
        })
      }
    },
    updateCartProductAmount(state, { productId, amount }) {
      const item = state.cartProducts.find((item2) => item2.productId === productId);
      if (item) {
        item.amount = amount;
      }
    },
    deleteCartProduct(state, productId) {
      // Подменяем список товаров на отфильтрованный список, в котором нет товара,
      // который мы хотим удалить
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
    }
  },
  getters: { // вычисляемые свойства хранилища.Геттеры доступны в объекте
    // store.getters, их можно легко использовать внутри любого компонента
    cartDetailProducts(state) { // Первым аргументом получаем состояние хранилища
      return state.cartProducts.map((item) => ({
        ...item, // добавляем к каждому элементу информацию
        product: products.find((p) => p.id === item.productId),
      }));
    },
    cartTotalPrice(state, getters) { // вторым аргументом можем указать другие геттеры
      return getters.cartDetailProducts
        .reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
    },
    cartCountProducts(state, getters) {
      return getters.cartDetailProducts.length;
    }
  }
})

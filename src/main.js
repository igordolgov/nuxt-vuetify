import Vue from 'vue'; // Импортируем Vue (из папки node_modules)
import App from './App.vue'; // Импортируем приложение App.vue (с именем App)
import vuetify from '@/plugins/vuetify'; // path to vuetify export
import router from './router'; // Добавляем router к корневому экземпляру Vue
import store from './store'; // Импортируем хранилище

Vue.config.productionTip = false; // Отключаем предупреждение о сборках для разработки

// Инициализируем Vue instance и крепим его к div c id "App" (в public/index.html)
new Vue({
  router, // Подключаем маршрутизатор (роутер)
  store, // Подключаем хранилище
  render: (h) => h(App),
  vuetify,
}).$mount('#app');
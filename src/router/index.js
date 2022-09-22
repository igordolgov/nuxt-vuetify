import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import MotorsPage from '@/pages/motors/MotorsPage.vue';
import PropellersPage from '@/pages/propellers/PropellersPage.vue';
import StartersPage from '@/pages/starters/StartersPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import ProductPage from '@/pages/ProductPage.vue';

Vue.use(VueRouter); // Сообщаем Vue, что будем использовать VueRouter

const routes = [ // Добавляем маршруты
  { name: 'main', component: MainPage, path: '/' },
  { name: 'motors', component: MotorsPage, path: '/motors' },
  { name: 'motors-id', component: MotorsPage, path: '/motors/:id' },
  { name: 'propellers', component: PropellersPage, path: '/propellers' },
  { name: 'starters', component: StartersPage, path: '/starters' },
  { name: 'product', component: ProductPage, path: '/product/:id' },
  { name: 'notFound', component: NotFoundPage, path: '*' },
];

const router = new VueRouter({
  routes, // Подключаем массив маршрутов
}); // Создаём новый экземпляр VueRouter

export default router; // Экспортируем VueRouter

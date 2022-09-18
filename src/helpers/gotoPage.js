import eventBus from '@/eventBus';

export default function gotoPage(pageName, pageParams) {
  eventBus.$emit('gotoPage', pageName, pageParams); // с помощью $emit
  // отправляем события в глобальную шину
}

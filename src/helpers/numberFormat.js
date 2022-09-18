// Вспомогательная функция форматирования чисел (по разрядам).
// Функция Intl (из стандартной библиотеки) форматирует число
// согласно нашей текущей языковой локали
export default function numberFormat(value) {
  return new Intl.NumberFormat().format(value);
}

/**
 * Функція для формування повідомлення про вартість доставки.
 * @param {string} country - Країна доставки.
 * @param {number} price - Загальна вартість товару.
 * @param {number} deliveryFee - Вартість доставки.
 * @returns {string} - Повідомлення про повну вартість.
 */
function getShippingMessage(country, price, deliveryFee) {
  // 1. Обчислюємо загальну вартість
  const totalPrice = price + deliveryFee;

  // 2. Формуємо та повертаємо рядок результату
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Виклики для перевірки коректності роботи

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

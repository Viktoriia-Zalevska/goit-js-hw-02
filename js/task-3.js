/**
 * Функція для розрахунку загальної ширини елемента в режимі, подібному до border-box
 * (Загальна ширина = Content + 2 * Padding + 2 * Border).
 * @param {string} content - Ширина контенту ("Npx").
 * @param {string} padding - Горизонтальний падінг ("Npx").
 * @param {string} border - Товщина бордера ("Npx").
 * @returns {number} - Загальна ширина елемента.
 */
function getElementWidth(content, padding, border) {
  // 1. Перетворюємо рядки "Npx" на числа
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  // 2. Розраховуємо загальну ширину: Content + 2 * Padding + 2 * Border
  const totalWidth = contentWidth + paddingWidth * 2 + borderWidth * 2;

  // 3. Повертаємо число
  return totalWidth;
}

// Виклики для перевірки коректності роботи (згідно з вимогами)

// Виклик 1: getElementWidth("50px", "8px", "4px")
// Очікуваний результат: 50 + (8*2) + (4*2) = 50 + 16 + 8 = 74
console.log(getElementWidth("50px", "8px", "4px")); // 74

// Виклик 2: getElementWidth("60px", "12px", "8.5px")
// Очікуваний результат: 60 + (12*2) + (8.5*2) = 60 + 24 + 17 = 101
console.log(getElementWidth("60px", "12px", "8.5px")); // 101

// Виклик 3: getElementWidth("200px", "0px", "0px")
// Очікуваний результат: 200 + 0 + 0 = 200
console.log(getElementWidth("200px", "0px", "0px")); // 200

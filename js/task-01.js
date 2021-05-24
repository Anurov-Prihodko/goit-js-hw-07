/* 
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента (тега h2) и 
количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
*/

const itemEl = document.querySelectorAll('.item');
console.log(`В списке ${itemEl.length} категории`)

const productsValue = document.querySelectorAll('ul li h2');

for (let i = 0; i < productsValue.length; i += 1) {
    console.log(`Категория: ${productsValue[i].textContent}`);
    const listValue = document.querySelectorAll('ul li ul');
    console.log(`Количество элементов: ${listValue[i].children.length}`)
};

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

const amountOfElementsAnimals = document.querySelectorAll('#categories > li:nth-child(1) > ul');
const amountOfElementsProducts = document.querySelectorAll('#categories > li:nth-child(2) > ul');
const amountOfElementsTechnologies = document.querySelectorAll('#categories > li:nth-child(3) > ul');

const animalsValue = document.querySelectorAll('#categories > li:nth-child(1) > h2');
const productsValue = document.querySelectorAll('#categories > li:nth-child(2) > h2');
const technologiesValue = document.querySelectorAll('#categories > li:nth-child(3) > h2');

console.log(`В списке ${itemEl.length} категории`)

animalsValue.forEach(el => console.log(`Категория: ${el.textContent}`));
amountOfElementsAnimals.forEach(el => console.log(`Количество элементов: ${el.children.length}`));

productsValue.forEach(el => console.log(`Категория: ${el.textContent}`));
amountOfElementsProducts.forEach(el => console.log(`Количество элементов: ${el.children.length}`));

technologiesValue.forEach(el => console.log(`Категория: ${el.textContent}`));
amountOfElementsTechnologies.forEach(el => console.log(`Количество элементов: ${el.children.length}`));



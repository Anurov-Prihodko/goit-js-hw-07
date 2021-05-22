/*
Счетчик состоит из спана и кнопок, которые должны увеличивать
 и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится
 текущее значение счетчика.
Создай функции increment и decrement для увеличения
 и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций
 и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/

const decrementEl = document.querySelector('#counter > button:nth-child(1)');
const incrementEl = document.querySelector('#counter > button:nth-child(3)');
const valueEl = document.querySelector('#value');

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

incrementEl.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});

decrementEl.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});


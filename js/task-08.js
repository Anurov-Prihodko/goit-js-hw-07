/*
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и 
нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает
 1 параметр amount - число. Функция создает столько div, 
 сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
*/
const refs = {
  renderEl: document.querySelector('[data-action="render"]'),
  destroyEl: document.querySelector('[data-action="destroy"]'),
  boxEl: document.querySelector('#boxes'),
}

refs.renderEl.addEventListener('click', createBoxes);
refs.destroyEl.addEventListener('click', destroyBoxes);

let divSize = 20;

function createBoxes(amount) {
  divSize += 10;

  refs.boxEl.insertAdjacentHTML('afterbegin', `<div style = "width: ${divSize}px; height: ${divSize}px; display: block;
    background-color: rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)});">
  </div>`);
};

function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
};

function destroyBoxes() {
  refs.boxEl.innerHTML = '';
  startSize = 20;
};
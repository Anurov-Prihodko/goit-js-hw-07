/*
Напиши скрипт, который реагирует на изменение значения
 input#font-size-control (событие input) и изменяет
  инлайн-стиль span#text обновляя свойство font-size. 
 В результате при перетаскивании ползунка будет меняться
  размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
*/

const inputEl = document.querySelector('input#font-size-control');
const textOfInput = document.querySelector('span#text');

inputEl.addEventListener('input', onChangeSize)

function onChangeSize() {
    textOfInput.style = `font-size: ${inputEl.value}px`
};
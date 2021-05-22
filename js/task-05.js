/*
Напиши скрипт который, при наборе текста в инпуте
 input#name-input (событие input), подставляет его текущее
  значение в span#name-output. Если инпут пустой, 
  в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/

const refs = {
    inputEl: document.querySelector('input#name-input'),
    nameEl: document.querySelector('span#name-output'),
};

refs.inputEl.addEventListener('input', onInputChange);
refs.nameEl.addEventListener('input', onInputChange);

function onInputChange(text) {
    if (text.target.value === '') {
        refs.nameEl.textContent = 'незнакомец';
    } else {
        refs.nameEl.textContent = text.currentTarget.value;
    };   
};



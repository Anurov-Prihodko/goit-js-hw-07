/*
Напиши скрипт, который бы при потере фокуса на инпуте,
 проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте
 data-length.
Если введено подходящее количество, 
то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const inputEl = document.querySelector('input#validation-input');    
const lengthOfInput = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputValidation);

function onInputValidation() {    
    if (inputEl.value.length === Number(lengthOfInput)) {
        inputEl.classList.add('valid')
      return inputEl.classList.remove('invalid')          
    } if (inputEl.value.length === 0) {
      inputEl.classList.remove('valid')
      return inputEl.classList.remove('invalid')
  }        
      inputEl.classList.add('invalid')
     return inputEl.classList.remove('valid')      
};


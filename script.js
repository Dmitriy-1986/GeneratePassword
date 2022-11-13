'use strict';

function generatePassword() {
    let lengthPassword = 30,
        retVal = '',
        charsetPassword = 'abcdefghijklmnopqrstuvwxyz';
        charsetPassword += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        charsetPassword += '0123456789';
        //charsetPassword += '~`!@#$%^&*()_-+';

    for(let i = 0, n = charsetPassword.length; i < lengthPassword; ++i) {
        retVal += charsetPassword.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

const generatePasswordInput = document.querySelector('#generatePasswordInput');
        generatePasswordInput.value = generatePassword();

const btnCopyPassword = document.querySelector('#btnCopyPassword');

btnCopyPassword.addEventListener('click', () => {
    generatePasswordInput.select();
    generatePasswordInput.setSelectionRange(0, 99999); 
    /** Свойство Clipboard интерфейса writeText() 
        записывает указанную текстовую строку в системный буфер обмена.*/
    navigator.clipboard.writeText(generatePasswordInput.value);
})

const btnReloadPassword = document.querySelector('#btnReloadPassword');
btnReloadPassword.addEventListener('click', () => {
    window.location.reload();
})

const btnPastPassword = document.querySelector('#btnPastPassword');

btnPastPassword.addEventListener('click', (event) => {
    let textareaPassword = document.querySelector('#textareaPassword');
    if(navigator.clipboard){
        //Вставить текст из буфера обмена в поле ввода textarea
        navigator.clipboard.readText().then(function(copyText){
            textareaPassword.innerHTML += copyText+'\n';
        });
    } else alert('Ваш браузер не поддерживает Clipboard');
});

















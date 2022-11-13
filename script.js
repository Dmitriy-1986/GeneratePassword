'use strict';

function generatePassword() {
    let lengthPassword = 30,
        retVal = '',
        charsetPassword = 'abcdefghijklmnopqrstuvwxyz';
        charsetPassword += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        charsetPassword += '0123456789';
        charsetPassword += '~`!@#$%^&*()_-+';
        
    for(let i = 0, n = charsetPassword.length; i < lengthPassword; ++i) {
        retVal += charsetPassword.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

console.log(generatePassword());

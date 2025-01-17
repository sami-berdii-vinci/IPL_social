function isValid(password){
    if(!/[0-9]/.test(password)) return false;
    return checkPasswordLength(password) 
    && checkSpecialCharacters(password);
}

function checkPasswordLength(password){
    if(password.length < 8) return false;
    return true;
}

function checkSpecialCharacters(password){
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    return true;
}

export {isValid};
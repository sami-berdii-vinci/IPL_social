function isValid(password){
    
    return checkPasswordLength(password) 
    && checkSpecialCharacters(password)
    && checkNumbers;
}

function checkPasswordLength(password){
    if(password.length < 8) return false;
    return true;
}

function checkSpecialCharacters(password){
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    return true;
}

function checkNumbers(password){
    if(!/[0-9]/.test(password)) return false;
    return true;
}

export {isValid};
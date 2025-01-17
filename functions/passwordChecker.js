function isValid(password){
    
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
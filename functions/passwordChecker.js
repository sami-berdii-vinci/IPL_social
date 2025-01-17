function isValid(password){
    return checkPasswordLength(password);
}

function checkPasswordLength(password){
    if(password.length < 8) return false;
    return true;
}

export {isValid};
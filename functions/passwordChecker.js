function isValid(password){
    if(password.length < 8) return false;
    return true;
}

export {isValid};
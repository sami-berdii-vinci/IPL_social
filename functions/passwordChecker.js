function isValid(password){
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return false;
    }
    return checkPasswordLength(password);
}

function checkPasswordLength(password){
    if(password.length < 8) return false;
    return true;
}

export {isValid};
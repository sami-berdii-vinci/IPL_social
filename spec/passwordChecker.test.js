import {isValid} from "../functions/passwordChecker.js";

describe('isValid should return true if the password is valid', () => {


    it('isValid should return false if the password contains less than 8 characters', () => {
        const result = isValid("a");
        expect(result).toBe(false);
    });

    it('isValid should return true if the password contains at least 8 characters', () => {
        const result = isValid("azerty123.");
        expect(result).toBe(true);
    });

    it('isValid should return false if the password does not contain a special character', () => {
        const result = isValid("azertyuiop");
        expect(result).toBe(false);
    });

    it('isValid should return false if the password does not contain a number', () => {
        const result = isValid("azertyuiop");
        expect(result).toBe(false);
    });

    it('isValid should return false if the password contains IPL', () => {
        const result = isValid("azertyIPL");
        expect(result).toBe(false);
    });
    
})
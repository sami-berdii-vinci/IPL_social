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

    
})
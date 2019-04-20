
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const randomNumber = (min:number, max:number) : number => Math.floor(Math.random() * max) + min;

const randomLetter = ():string => alphabet[randomNumber(0, alphabet.length)];

const randomString = (length: number): string => {
    let str = '';
    for (let i = 0; i < length; i += 1) {
        str += randomLetter();
    }
    return str;
};


export default {
    randomNumber,
    randomLetter,
    randomString,
};

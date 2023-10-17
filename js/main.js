// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

function getRandomNumberInclude(max) {
    return Math.floor(Math.random() * max + 1);
}

function generateKey(length, characters) {
    const charStorage = characters.split('');
    const result = [];

    for (let i = 1; i <= length; i++) {
        let position = getRandomNumberInclude(charStorage.length - 1);

        result.push(charStorage[position]);
    }

    return result.join('');
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i

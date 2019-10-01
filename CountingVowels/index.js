/**
 * --Directons:
 * Write a function that returns the number of vowels found within a string.
 * Vowel characters are a, e, i , o , u.
 * Make sure the function is case insensitive.
 * --Examples:
 * vowels('what')-->1
 * vowels('aEiOu')-->5
 * vowels('I am a world-class developer using iterations') --> 16
 */

function vowels(str) {
    if (typeof str !== 'string') {
        throw new Error('The input is illegal!')
    }
    //1.match return an array or null
    const matchArray = str.match(/['aeiou']/ig)
    return matchArray === null ? 0 : matchArray.length

    //2.use es6 method
    //Array.form() -> Array[]
    //Array.filter(...) -> Array[...]
    //return Array.from(str.toLowerCase()).filter(char=>'aeiou'.includes(char)).length
}


/**
 * 在开发中经常会碰到这个问题，避免使用循环嵌套！！！
 */

mocha.setup("bdd");
const { assert } = chai;

describe("Vowels", () => {
    it("gets correct vowel count", () => {
        assert.equal(vowels("What"), 1);
        assert.equal(vowels("Why"), 0);
    });
    it("is case insensitive. vowels('aEiOu') should return 5", () => {
        assert.equal(vowels("aEiOu"), 5);
        assert.equal(vowels("I am a world-class developer using iterations"), 16);
    });
});

mocha.run();
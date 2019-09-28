/*
* --Directions:
* Given a string, return true or false if the string is a palindrome.
* Palindromes are words that read the same backwards and forwards.
* Make sure it is case insensitive(不区分大小写)!
* --Examples:
* palindrome("Madam") === true
* palindrome("love") === false
*/

function palindrome(str) {
    if(typeof str !== 'string'){
        return;
    }
    str = str.toLowerCase()
    return str === str.split("").reverse().join("")
}

mocha.setup("bdd")
const { assert } = chai;
describe("Palindrome", () => {
    it('"bcb" is a palindrome', () => {
        assert.equal(palindrome("bcb"), true)
    })
    it('"  bcb" is not a palindrome', () => {
        assert.equal(palindrome("  bcb"), false)
    })
    it('"love" is not a palindrome', () => {
        assert.equal(palindrome("love"), false)
    })
    it('"12321" is a palindrome', () => {
        assert.equal(palindrome("12321"), true)
    })
    it('is case insensitive.', () => {
        assert.equal(palindrome("Trunk knurt"), true)
    })
})
mocha.run();
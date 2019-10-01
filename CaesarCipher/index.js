/**
 * --Directions:
 * What is Caesar Cipher? For details,read this article(https://learncryptography.com/classical-encryption/caesar-cipher)
 * Given a phrase, substitute(替代) each character by Shifting it up
 * the alphabet by a given integer.
 * --Examples
 * caesarCipher("abcd",1) === "bcde"
 * caesarCipher("abcd",100) === "wxyz"
 * caesarCipher("gurer ner 9 qbtf!",13)
 */

function caesarCipher(str, shift) {
    let output = '';
    for(let i = 0; i< str.length;i++){
        let currentChar = str[i]
        if(currentChar.match(/[a-z]/i)){
            let code = str.charCodeAt(i)
            if(code>=65&&code<=90){
                currentChar = String.fromCharCode((code-65+shift)%26+65)
            }
            if(code>=97&&code<=122){
                currentChar = String.fromCharCode((code-97+shift)%26+97)
            }
        }
        output+=currentChar
    }
    return output;
}

/**
 * Complexity Analysis:
 * 1. Time Complexity: O(N)
 * 2. Space Complexity:O(1)
 * difficulty:🌟🌟
 * The key is two String functions:
 * string.charCodeAt(index)(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
 * string.fromCharCode(index)(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
 */

mocha.setup('bdd')
const { assert } = chai

describe('caesarCipher()', () => {
    it('shifts letters correctly.', () => {
        assert.equal(caesarCipher('abcd', 1), 'bcde')
    })
    it('does not shift digits or other characters such as ! .', () => {
        assert.equal(caesarCipher("gurer ner 9 qbtf!", 13), "there are 9 dogs!");
    })
})

mocha.run()
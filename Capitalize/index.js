/*
* --Directions:
* write a function that returns the provided string with the first letter
* of the word is in lower case.
* --Examples:
* capitalize("I'm a little tea pot")-->'I'm A Little Tea Pot'
*/

function capitalize(str) {
    const arrOfWords = str.split(' ')
    const arrOfWordsCased = []
    for (let i = 0; i < arrOfWords.length; i++) {
        const word = arrOfWords[i];
        arrOfWordsCased.push(word[0].toUpperCase() + word.splice(1).toLowerCase())
    }
    return arrOfWordsCased.join('')
}

/**
 * 这道题不多说了，其实处理该问题最简单的方法可以直接设置css
 * 即text-transform: capitalize(首字母大写) | uppercase（全大写） | lowercase（全小写）
 * 难度：🌟（送分题😊）
 */

mocha.setup('bdd')
const { assert } = chai;

describe('Capitalization', () => {
    it("capitalizes the first letter of each word", () => {
        assert.equal(capitalize("I'm a little tea pot"), "I'm A Little Tea Pot");
    })
})
mocha.run()
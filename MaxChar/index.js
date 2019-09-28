/*
* --Directions:
* Return the character most commonly used in the string
* --Examples:
* palindrome("I loveeeeeee noodles") === "e"
* palindrome("hello") === l
*/

function maxChar(str) {
    if (typeof str !== 'string') return;
    str = str.toLowerCase()
    // char count object
    const charObj = {}
    let maxCount = 0
    let maxChar = null
    const length = str.length
    //fill char count object
    //example:'hello'
    // {'h':1, 'e':1, 'l':2, o:1}
    for (let i = 0; i < length; i++) {
        let char = str[i]
        charObj[char] = charObj[char] + 1 || 1
        if (charObj[char] > maxCount) {
            maxCount = charObj[char]
            maxChar = char
        }
    }
    return maxChar;
}
/*
* -- macChar complexity analysis:
* time:O(n)
* space:O(1)
* 这道题非常常见，这里借助maxCount这个变量的赋值与当前值的大小判断避免了再写一个for循环来找出最大值
* 难度：🌟🌟
*/

mocha.setup('bdd')
const { assert } = chai

describe("Max Character", () => {
    it('maxChar() finds the most frequently used character', () => {
        assert.equal(maxChar('a'), 'a');
        assert.equal(maxChar('test'), 't')
        assert.equal(maxChar('iIiiIIttttt'), 'i')
    })
})
mocha.run()
/**
 * --Directions:
 * Check if two strings are anagrams of each other.
 * One string is an anagram of another if it uses exact same characters in exact same quantity.
 * Only consider word characters, and make sure the function is case insensitive.
 * --Examples
 * anagrams('heart', 'earth') --> True
 * anagrams('Heart!','EARTH') --> True
 * anagrams('lol', 'lolc') --> False
 */

function anagrams(wordA, wordB) {
  if (typeof wordA !== 'string' || typeof wordB !== 'string') {
    throw new Error('isAnagram requires two strings to be passed.')
  }
  //sanitize input strings
  const strA = wordA.replace(/[^A-Za-z]+/g, "").toLowerCase()
  const strB = wordB.replace(/[^A-Za-z]+/g, "").toLowerCase()

  if (strA.length !== strB.length) {
    return false
  }

  // use object,key is letter, value is the number of occurrences,like Map structure
  const countObject = {}

  for (let i = 0; i < strA.length; i++) {
    let aChar = strA[i]
    countObject[aChar] = countObject[aChar] + 1 || 1
  }
  for (let i = 0; i < strB.length; i++) {
    let bChar = strB[i]
    if (!countObject[bChar]) {
      return false;
    } else {
      // do not forget minus for the value
      countObject[bChar]--
    }
  }
  return true

  // Use Array,the index is Ascii code(charCodeAt()) to imporve the code performance
  // const countArr = []
  // for(let i=0;i<strA.length;i++){
  //   let index = strA.charCodeAt(i)-97
  //   countArr[index] = (countArr[index]||0)+1
  // }
  // for(let i=0;i<strB.length;i++){
  //   let index = strB.charCodeAt(i)-97;
  //   if(!countArr[index]){
  //     return false
  //   }else{
  //     countArr[index]--
  //   }
  // }

}
/**
 * (leetcode 242 难度：🌟🌟🌟）
 * --Pseudocode
 * 1. create a character count object for one of the input string
 *    Use replace() with a regular expressions so that only letter characters remain
 *    Use toLowercase() for case insensitivity
 * 2. two strings do not have same length,return false immediately
 * 3. loop through the other input string, decrementing character count object
 *    return false if number in character count is undefined or 0
 * 4. return true
 * 
 * --Complexity Analysis
 * 1. time complexity: O(n+m) - go over every character in both input string
 * 2. space complexity: O(1) character count object(Map) has at most 26 key-val pairs
 */

mocha.setup('bdd')
const { assert } = chai

describe('Anagrams', () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    assert.equal(anagrams("earth", "heart"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams("HEART", "earth"), true);
    assert.equal(anagrams("heart", "EARTH"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams("heart!", " earth"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
})

mocha.run();
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

function anagrams(stringA, stringB){
    //sanitize input strings
    const strA = stringA.toLowerCase().replace(/[\W_]+/g, "")
    const strB = stringB.toLowerCase().replace(/[\W_]+/g, "")

    if(strA.length !== strB.length) return false;

    const strASorted = strA.split("").sort().join("")
    const strBSorted = strB.split("").sort().join("")

    return strASorted === strBSorted;

    
 }
 /**
  * --Pseudocode
  * 1. Turn strings to array of characters, use sort(),turn sorted array back into string.
  *    Be sure to sanitize strings of non letter characters, and to account for casing
  * 2. Check if both of these newly sorted strings are equal to each other
  * 
  * --Complexity Analysis:
  * 1. time complexity: O(n*logn) js Sorting Algorithm
  * 2. space complexity: O(n) sorted strings as long as input strings
  */

 mocha.setup('bdd')
 const {assert} = chai

 describe('Anagrams',()=>{
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
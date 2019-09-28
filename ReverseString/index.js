/*
* Directions:
* Return a string with order of characters reversed
* Example:
* 'abcd' ===> 'dcba'
*/
function reverseString(str){
    if(typeof str !== 'string'){
        return false
    }
    return str.split("").reduce((frontStr,currentStr)=>{
        frontStr = currentStr+frontStr
        return frontStr
    },"")
    //return str.split("").reverse().join("")
}

mocha.setup('bdd');
const { assert } = chai

describe('String Reversal', ()=>{
    it('reverse() correctly reverses string', ()=>{
        assert.equal(reverseString('ffaa'), 'aaff')
        assert.equal(reverseString('  aaff'), 'ffaa  ')
    })
})

mocha.run();
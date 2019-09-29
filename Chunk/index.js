/**
 *  --Directions
 *  Write a function that splits an array(first argument)
 *  into groups the length of size(second argument) and
 *  return them as a two-dimensional（二维） array
 *  --Examples
 *  chunk(["a","b","c","d"], 2) -->[["a","b"],["c","d"]]
 *  chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]
 */

function chunk(array, size) {
    //step1 process the arguments-array and size
    size = Math.max(size, 0)
    if (array == null || !Array.isArray(array)) return false;
    const length = array.length;
    if (!length || size < 1) {
        return [];
    }
    //step2 
    //index used as original array
    //resIndex used as the newly generated array (math.ceil)
    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(length / size))

    //step3
    //while control the size of array
    //use splice(es6) 
    while (index < length) {
        result[resIndex++] = array.slice(index, (index += size))
    }
    return result

}

/**
 * 视频里面老师讲的方法不妥，这里我用的是lodash的chunk方法源码
 * 难度：🌟🌟🌟
 */
mocha.setup('bdd')
const { assert } = chai

describe('Array Chunking', () => {
    it('chunk() works', () => {
        let arr = ["a", "b", "c", "d", "e"]
        let chunked = chunk(arr, 2);
        console.log(chunked)
        assert.deepEqual(chunked, [["a", "b"], ["c", "d"], ["e"]])
    })
})

mocha.run()
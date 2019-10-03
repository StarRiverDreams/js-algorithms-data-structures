/**
 * --Direactions:
 * (二分查找)
 * Implement a binary search algorithm that searches a sorted array for the provided value.
 * The binary search algorithm will return the index of value found, or -1 if not found.
 */

const binarySearch = (sortedArray, value) => {
    let right = sortedArray.length - 1;
    let left = 0
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const midValue = sortedArray[mid]
        if (midValue === value) {
            return mid
        } else if (midValue < value) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1;

}

/**
 * complexity:O(logn)
 * 注意边界值的设定
 */

mocha.setup("bdd");
const { assert } = chai;

const sortedNumsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("binarySearch()", () => {
    it("returns correct index on sortedArray with just one number", () => {
        assert.equal(binarySearch([5], 5), 0);
        assert.equal(binarySearch([15], 5), -1);
    });
    it("works on sorted array with 10 numbers", () => {
        assert.equal(binarySearch(sortedNumsArray, 10), 10);
        assert.equal(binarySearch(sortedNumsArray, 0), 0);
        assert.equal(binarySearch(sortedNumsArray, 5), 5);
        assert.equal(binarySearch(sortedNumsArray, 7), 7);
        assert.equal(binarySearch(sortedNumsArray, 1337), -1);
    });
});

mocha.run();
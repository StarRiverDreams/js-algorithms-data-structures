// Implement a swap helper function that we will use in both BS and SS
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j]= temp
}

//bubbleSort works by having sorted data accumulate at end of array
function bubbleSort(arr) {
    let length = arr.length
    for(let i = 0; i<length;i++){
        for(let j = 0; j<length-i;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
}




mocha.setup("bdd");
const { assert } = chai;

describe("swap()", () => {
  it("swaps values in an array when provided with 2 indexes.", () => {
    const arr = [13, 2, 4];
    swap(arr, 0, 1);
    assert.deepEqual(arr, [2, 13, 4]);
  });
});

describe.skip("Bubble Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(bubbleSort([5, 1, 3, 7, 6, 2, 4]), [1, 2, 3, 4, 5, 6, 7]);
  });
});
mocha.run();
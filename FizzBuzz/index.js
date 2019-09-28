/*
* --Directions:
* Write a program that console logs the numbers from 1 to n.
* But for multiples of these print 'fizz' instead of the number
* and for the multiples of five print 'buzz'.
* For numbers which are multiples of both three and five print 'fizzbuzz'.
* (按顺序打印一组从1到n的正整数，如果是3的倍数则打印‘fizz’，如果是5的倍数打印‘buzz'，如果既是3的倍数又是5的倍数则打印’fizzbuzz‘)
*/

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){
        let str = ''
        if(i%3 === 0){
            str += 'fizz'
        }
        if(i%5 === 0){
            str += 'buzz'
        }
        if(str === ''){
            str = i
        }
        console.log(str)
    }
}

/*
* 借助变量累加实现第三种既是3的倍数又是5的倍数的情况
* 且需要注意打印顺序
* 难度：🌟
* Complexity Analysis
* time: O(n)
*/

mocha.setup('bdd')

const { assert } = chai;

console.log = sinon.spy()

describe('Fizz Buzz', () => {
    it('fizzbuzz(30) should console log 30 times', () => {
        fizzBuzz(30)
        assert.equal(console.log.callCount, 30);
    })
    it("fizzbuzz(30) console logs correct value", () => {
        fizzBuzz(30)
        assert.equal(console.log.getCall(0).args[0], 1);
        assert.equal(console.log.getCall(1).args[0], 2);
        assert.equal(console.log.getCall(2).args[0], "fizz");
        assert.equal(console.log.getCall(3).args[0], 4);
        assert.equal(console.log.getCall(4).args[0], "buzz");
        assert.equal(console.log.getCall(5).args[0], "fizz");
        assert.equal(console.log.getCall(6).args[0], 7);
        assert.equal(console.log.getCall(7).args[0], 8);
        assert.equal(console.log.getCall(8).args[0], "fizz");
        assert.equal(console.log.getCall(9).args[0], "buzz");
        assert.equal(console.log.getCall(10).args[0], 11);
        assert.equal(console.log.getCall(11).args[0], "fizz");
        assert.equal(console.log.getCall(12).args[0], 13);
        assert.equal(console.log.getCall(13).args[0], 14);
        assert.equal(console.log.getCall(14).args[0], "fizzbuzz");
    })
})

mocha.run()
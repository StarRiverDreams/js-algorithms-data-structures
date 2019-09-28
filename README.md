
# Javascript Algorithms+ Data Structures
## how do we measure code performance(代码性能)？
fast time
Use less memory
ps: Stronger emphasis on the former(更测试fast time)
---

### Time Complexity

#### Counting Operations
example:
```
	const sumUpTo = n =>{
		return (n*(n+1)) /2 
	}
```
3 operations, no matter how large N is.
O(3)

```
	const sumUpTo = n =>{
		let total = 0;
		for(let i = 1; i <= n; i++){
			total += i;
		}
		return total;
	}
```
Take 1*N operations.
O(n)

#### nested for loop
The for loops iterate over the same array of length N. For each N words, do N pairing operations…
O(n^2)
The outer loop iterates over array of length N,the inner loop iterates over array of length M.
O(n*m)

#### ::Identifying runtime complexity (rules of thumb)::

Iterating over a collection OR using N as a pointer with a for loop  O(n)
---
Iterating over the same collection with nested for loops. O(n^2)
---
Iterating over different  with nested for loops. O(n*m)

---
#### Simplifying
* Constants do not matter:
O(12)->O(1)
O(n/2)->O(n)
O(13n^2)->O(n^2)
[image:90C85954-58A2-4509-A326-709E4C588EE8-298-0004D5E543D247EC/2B7D9C54-A2D7-45B5-82AB-B310048747C7.png]


* Smaller Terms do not matter
O(n+10)=>O(n)
O(n^2+13n+8)->O(n^2)

### Space Complexity
Memory
Most primitives , such as Boolean,Number, take up O(1)  constant space
String,Array, Object take up O(n) Linear Space.
Time Complexity prioritized over space complexity

---
使用：替换index.html中的script，勿动使用test插件的部分（测试工具mocha和chai）

1. Reverse String
2. Palindrome
3. MaxChar-find the most frequently used character in a string and comliexity analysis

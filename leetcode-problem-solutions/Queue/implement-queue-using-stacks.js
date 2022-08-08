/* 
https://leetcode.com/problems/implement-queue-using-stacks/submissions/

Runtime: 66 ms, faster than 86.01% of JavaScript online submissions for Implement Queue using Stacks.
Memory Usage: 41.5 MB, less than 93.09% of JavaScript online submissions for Implement Queue using Stacks.


 */
var MyQueue = function() {
    this.queue = [];
    this.rear = -1;
    this.front = -1
    this.length = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
    this.rear = this.rear + 1
    if(this.empty()){
        this.front = this.rear
    }
    this.length++
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const item = this.queue[this.front];
    delete this.queue[this.front]
    this.front = this.front + 1;
    this.length--
    return item;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[this.front]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
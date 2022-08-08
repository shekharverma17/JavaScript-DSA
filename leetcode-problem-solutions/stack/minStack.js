
var MinStack = function() {
    this.items = [];
    this.minVal = [];
 };
 
 MinStack.prototype.push = function(val) {
     (val < this.minVal[0]) ?   this.minVal.unshift(val) : this.minVal.push(val)
     this.items.push(val)
   
 };
 MinStack.prototype.pop = function() {
     (this.items[this.items.length-1] == this.minVal[0]) &&  this.minVal.shift()
      this.items.pop()
 };
 
 MinStack.prototype.top = function() {
      return this.items[this.items.length-1]
 };
 
 MinStack.prototype.getMin = function() {
   return this.minVal[0]
 };
 
 const minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 console.log(minStack.getMin());
 minStack.push(-3);
 console.log(minStack.getMin()); // return -3
 minStack.pop();
 console.log(minStack.top());
 console.log(minStack.getMin());
 


 Runtime: 135 ms, faster than 77.01% of JavaScript online submissions for Min Stack.
Memory Usage: 49.7 MB, less than 62.36% of JavaScript online submissions for Min Stack.



var MinStack = function() {
    this.items = [];
 };
 
 MinStack.prototype.push = function(val) {
     this.items.push({value: val, min: this.items.length === 0 ? val : Math.min(val, this.getMin())})
   
 };
 MinStack.prototype.pop = function() {
      this.items.pop()
 };
 
 MinStack.prototype.top = function() {
      return this.items[this.items.length-1].value
 };
 
 MinStack.prototype.getMin = function() {
   return this.items[this.items.length-1].min
 };
 
//other
Runtime: 189 ms, faster than 37.13% of JavaScript online submissions for Min Stack.
Memory Usage: 50.2 MB, less than 26.27% of JavaScript online submissions for Min Stack.
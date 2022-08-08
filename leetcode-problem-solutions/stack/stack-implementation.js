/*
Stack: LIFO - Last In First Out
Complexity: Array has liniear 0(n) but stack is constant complexity O(1)
Stack methods:
push(element): add element to the top
pop(): remove ele from the top
peek(): get value of top ele without removing
size(): get size
isEmpty(): check if empty
print(): print the stack // console.log()
*/

class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }

    size(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length > 0;
    }
    print(){
        console.log(this.items);
    }
}

const stack = new Stack();
console.log(stack.isEmpty())
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.peek())
stack.pop()
console.log(stack.peek())
stack.print()

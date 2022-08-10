class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
    //empty, 0,1,2
    prepend(value) {
      let node = new Node(value);
      if(this.isEmpty()){
        this.head = node
        this.tail = node
      }else{
        let prev = this.head;
        this.head = node;
        this.head.next = prev
      }
      this.size++;
    }
  
    append(value) {
      let node = new Node(value);
      if(this.isEmpty()){
        this.head = node
        this.tail = node
      }else{
        this.tail.next = node;
        this.tail = node;
      }
      //console.log(this.tail)
      this.size++;
    }
  
    removeFromFront() {
      if(this.isEmpty()){
        return null;
      }else if(this.size === 1){
          this.head = null
          this.tail = null;
      }else{
        let curr = this.head.next
        this.head = curr;
      }
      this.size--;
    }
  
    removeFromEnd() {
      if(this.isEmpty()){
        return null;
      }else if(this.size === 1){
          this.head = null
          this.tail = null;
      }else{
      //  console.log(this.head)
        let prev = this.head;
        while(prev.next !== this.tail){
          prev = prev.next
        }
        prev.next = null;
        this.tail = prev
      }
      this.size--;
    }
  
    reverse() {
      let current = this.head;
      let prev = null;
      let next = null;
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.tail = this.head;
      this.head = prev;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value}->`;
          curr = curr.next;
        }
        console.log(list);
      }
    }
  }
  
  
  class LinkedListStack {
    constructor(){
      this.list = new LinkedList();
    }
    
    push(x){
        this.list.prepend(x)
    }
    
    pop(){
        this.list.removeFromEnd();  
    }
    
    peek(){
      return this.list.head.value;
    }
    
    getSize(){
      return this.list.size;
    }
    
    isEmpty(){
      return this.list.isEmpty();
    }
    
     print(){
      this.list.print();
    }
    
  }
  
  /** Uncomment when testing only this file */
  const stack = new LinkedListStack();
  console.log(stack.isEmpty());
  stack.push(20);
  stack.push(10);
  stack.push(30);
  console.log(stack.getSize());
  stack.print();
  console.log(stack.pop());
  stack.print();
  console.log(stack.peek());
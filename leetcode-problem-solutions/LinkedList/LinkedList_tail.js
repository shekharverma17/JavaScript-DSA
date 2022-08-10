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
  
  //module.exports = LinkedList;
  
  /** Uncomment when testing only this file */
  
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  console.log(list.getSize());
  list.print();
  //console.log(list.getSize());
  list.removeFromFront();
  list.print();
  list.removeFromEnd();
  list.print();
  
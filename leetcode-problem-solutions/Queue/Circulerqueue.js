class CirculerQueue {
    constructor(capecity){
      this.capecity = capecity;
      this.queue = new Array(capecity);
      this.length = 0
      this.rear = -1;
      this.front = -1;
     
    }
    
    isFull(){
      return this.length === this.capecity
    }
    
    isEmpty(){
      this.length === 0
    }
    
    
    enqueue(x){
      if(!this.isFull()){
        console.log((this.rear + 1) % this.capecity)
       this.rear = (this.rear + 1) % this.capecity
       this.queue[this.rear] = x
  
       this.length++;  
        if(this.front === -1){
          this.front =  this.rear;
        }
      }
     
    }
    
    dequeue(){
     const item = this.queue[this.front]
     delete this.queue[this.front];
      this.length--;
      this.front = (this.front + 1) % this.capecity;
      if(this.isEmpty()){
      this.rear = -1;
      this.front = -1;
      }
     
      return item;
    }
    print(){
     console.log(this.queue)
    }
  }
  
  const queue = new CirculerQueue(5);
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.enqueue(50);
  queue.print();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.print();
  //queue.dequeue();
  queue.enqueue(10);
  queue.print();
  queue.dequeue();
  queue.print();


  class CirculerQueue {
  constructor(capecity){
    this.capecity = capecity;
    this.queue = new Array(capecity);
    this.length = 0
    this.rear = -1;
    this.front = -1;
   
  }
  
  isFull(){
    return this.length === this.capecity
  }
  
  isEmpty(){
    this.length === 0
  }
  
  
  enqueue(x){
    if(!this.isFull()){
      console.log((this.rear + 1) % this.capecity)
     this.rear = (this.rear + 1) % this.capecity
     this.queue[this.rear] = x

     this.length++;  
      if(this.front === -1){
        this.front =  this.rear;
      }
    }
   
  }
  
  dequeue(){
   const item = this.queue[this.front]
   delete this.queue[this.front];
    this.length--;
    this.front = (this.front + 1) % this.capecity;
    if(this.isEmpty()){
    this.rear = -1;
    this.front = -1;
    }
   
    return item;
  }
  print(){
   console.log(this.queue)
  }
}

const queue = new CirculerQueue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
//queue.dequeue();
queue.enqueue(10);
queue.print();
queue.dequeue();
queue.print();

[10, 20, 30, 40, 50]
[undefined, undefined, undefined, 40, 50]
[10, undefined, undefined, 40, 50]
[10, undefined, undefined, undefined, 50]
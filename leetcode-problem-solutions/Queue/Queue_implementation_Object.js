class Queue {
    constructor(){
      this.queue = {};
      this.rear = 0;
      this.front = 0;
    }
    
    
    enqueue(x){
      this.queue[this.rear] = x;
      this.rear++;  
    }
    
    dequeue(){
     const item = this.queue[this.front]
     delete this.queue[this.front];
      this.front++;
      return item;
    }
    print(){
     console.log(this.queue)
    }
  }
  
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.dequeue();
  
  queue.print();
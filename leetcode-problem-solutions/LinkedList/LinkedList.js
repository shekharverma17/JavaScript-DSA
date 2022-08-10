class Node{
    constructor(val){
      this.value = val;
      this.next = null;
    }
  }
  
  
  class LinkedList{
    constructor(){
      this.head = 0;
      this.size = 0;
    }
    
    isEmpty(){
      return this.size === 0;
    }
    
    getSize(){
      return this.size;
    }
    
    //O(1)
    prepend(v){
      let node = new Node(v);
      if(this.isEmpty()){
        this.head = node;
      }else{
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
    
    //O(n)
      append(v){
      let node = new Node(v);
      if(this.isEmpty()){
        this.head = node;
      }else{
        let lastNode = this.head
        
        while(lastNode.next){
          lastNode = lastNode.next
        }
        lastNode.next = node;
      }
      this.size++;
    }
    
     insert(v, index){
      if(index < 0 || index > this.size){
        return;
      }else if(index == 0){
        this.prepend(v);
      }else{
        let prevNode = this.head;
        for(let i=0;i<index-1;i++){
          prevNode = prevNode.next
        }
        let node = new Node(v);
        node.next = prevNode.next;
        prevNode.next = node
        this.size++;
      }
      
    }
    
      remove(index){
      let removedNode
      if(index < 0 || index > this.size){
        return null;
      }else if(index == 0){
        removedNode = this.head;
        this.head = this.head.next
      }else{
        let prevNode = this.head;
        for(let i=0;i<index-1;i++){
          prevNode = prevNode.next
        }
        removedNode = prevNode.next;
        prevNode.next = removedNode.next
        this.size--;
        return removedNode.value
      }
      
    }
    
     removeValue(value){
      let removedNode
      if(this.isEmpty()){
        return null;
      }else if(this.head.value === value){
        this.head = this.head.next
        this.size--;
        return value
      }else{
        let prevNode = this.head;
        while(prevNode.next && prevNode.next.value !== value){
          prevNode = prevNode.next;
        }
        if(prevNode.next){
          removedNode = prevNode.next;
          prevNode.next = removedNode.next;
          this.size--;
          return value;
        }
        
        return null
      }
      
    }
    
      search(x){
      if(this.isEmpty()){
        return null;
      }
       let i = 0;
        let curr = this.head;
        while(curr){
          if(curr.value === x){
            return i;
          }
          i++;
          curr = curr.next
        }
       return -1;
    }
    
     reverse(){
        let prev = null
        let curr = this.head
        while(curr){
          let next = curr.next //next = 2 //next =3 //next = 4 // next =5 //null
          curr.next = prev // curr.next(1.next) = null // 2.next = 1 //3.next = 2 //4.next = 3 //5.next =4
          prev = curr //prev= 1 // prev = 2 // prev =3 // prev = 4 //prev =5
          curr = next //2>1 //3>2>1 //4>3>2>1>null //5>4>3>2>1 //curr = null break
        }
       this.head = prev
    }
  
    print(){
      if(this.isEmpty()){
       console.log("list is empty");
        return;
      }
      let curr = this.head;
      let list = ""
      while(curr){
        list += `${curr.value} : `
        curr = curr.next
        
      }
      console.log(list)
    }
    
    
    
  }
  
  
  const LinkList = new LinkedList();
  //LinkList.print();
  LinkList.prepend(10);
  //console.log(LinkList.getSize());
  //LinkList.print();
  LinkList.prepend(20);
  LinkList.prepend(30);
  console.log(LinkList.getSize());
  LinkList.print();
  
  LinkList.append(50);
  LinkList.insert(8, 3);
  LinkList.remove(4);
  LinkList.removeValue(8);
  LinkList.print();
  console.log(LinkList.search(5));
  console.log(LinkList.reverse());
  LinkList.print();
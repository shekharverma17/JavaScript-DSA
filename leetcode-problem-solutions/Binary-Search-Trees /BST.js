class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
  
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  
  isEmpty(){
    return this.root === null;
  }
  
  insert(value){
    let newNode = new Node(value);
    if(this.isEmpty()){
      this.root = newNode;
    }else{
      this.insertNode(this.root, newNode);
    }
    
  }
  
  insertNode(root, node){
    
    if(root.value > node.value){
      if(root.left === null){
        root.left = node;
      }else{
        this.insertNode(root.left, node)
      }
    }else{
       if(root.right === null){
        root.right = node;
      }else{
        this.insertNode(root.right, node)
      }
    }
  }
  
  searchValue(root, value){
    if(!root) return false
    if(root.value === value) return true;
      if(root.value > value){
        return this.searchValue(root.left, value);
      }else{
        return this.searchValue(root.right, value);
      }
  }
  
   search(value){
    if(this.isEmpty()) return false;
    if(this.root === value) return true;
    return this.searchValue(this.root, value);
  }
  
  preOrder(root){
    //console.log(root)
    if(root){
     console.log(root.value)
     this.preOrder(root.left);
     this.preOrder(root.right)
    
    }
  }
    inOrder(root){
    //console.log(root)
    if(root){
     this.inOrder(root.left);
     console.log(root.value)
     this.inOrder(root.right)
    
    }


  }
  
  postOrder(root){
    //console.log(root)
    if(root){
     this.postOrder(root.left);
   //   console.log(root.value)
     this.postOrder(root.right)
      console.log(root.value)
    
    }


  }
  
  levelOrder(){
    const queue = []
    queue.push(this.root);
   while(queue.length){
     const curr = queue.shift()
      console.log(curr.value)
     if(curr.left){
       queue.push(curr.left)
     }
     if(curr.right){
       queue.push(curr.right)
     }
    
   }
    
  }
  
   min(root){
    if(root && !root.left){
      return root.value
    }else{
      return this.min(root.left)
    }
    
  }
  
  max(root){
    if(root && !root.right){
      return root.value
    }else{
      return this.min(root.right)
    }
    
  }
  
  delete(value){
    this.root = this.deleteNode(this.root, value)
  }
  
  deleteNode(root, value){
    if(root === null){
      return root;
    }
    
    if(value < root.value){
      root.left = this.deleteNode(root.left, value)
    }else if(value > root.value){
     root.right = this.deleteNode(root.right, value)
    }else{
      if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left
      }
      root.value = this.min(root.right)
      root.right = this.deleteNode(root.right, root.value)
    }
    
   return root
    
  }
  
}

const bst = new BinarySearchTree();
//console.log(bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
// bst.insert(7)
//console.log(bst.isEmpty())
//console.log(bst.search(5))
//bst.levelOrder();
//console.log(bst.min(bst.root))
//console.log(bst.max(bst.root))

bst.delete(15)
bst.levelOrder();


class Node{
    constructor(value){
      this.value = value
      this.left = null
      this.right = null
    }
    
  }
  
  class BinarySearchTree{
    constructor(){
      this.root = null;
    }
    
    isEmpty(){
      return this.root === null;
    }
    
    insert(value){
      let newNode = new Node(value);
      if(this.isEmpty()){
        this.root = newNode;
      }else{
        this.insertNode(this.root, newNode);
      }
      
    }
    
    insertNode(root, node){
      
      if(root.value > node.value){
        if(root.left === null){
          root.left = node;
        }else{
          this.insertNode(root.left, node)
        }
      }else{
         if(root.right === null){
          root.right = node;
        }else{
          this.insertNode(root.right, node)
        }
      }
    }
    
    searchValue(root, value){
      if(!root) return false
      if(root.value === value) return true;
        if(root.value > value){
          return this.searchValue(root.left, value);
        }else{
          return this.searchValue(root.right, value);
        }
    }
    
     search(value){
      if(this.isEmpty()) return false;
      if(this.root === value) return true;
      return this.searchValue(this.root, value);
    }
    
  }
  
  const bst = new BinarySearchTree();
  //console.log(bst.isEmpty())
  bst.insert(10)
  bst.insert(15)
  bst.insert(12)
  bst.insert(18)
  bst.insert(20)
  //console.log(bst.isEmpty())
  console.log(bst.search(20))
  
  
  class Node{
    constructor(value){
      this.value = value
      this.left = null
      this.right = null
    }
    
  }
  
  class BinarySearchTree{
    constructor(){
      this.root = null;
    }
    
    isEmpty(){
      return this.root === null;
    }
    
    insert(value){
      let newNode = new Node(value);
      if(this.isEmpty()){
        this.root = newNode;
      }else{
        this.insertNode(this.root, newNode);
      }
      
    }
    
    insertNode(root, node){
      
      if(root.value > node.value){
        if(root.left === null){
          root.left = node;
        }else{
          this.insertNode(root.left, node)
        }
      }else{
         if(root.right === null){
          root.right = node;
        }else{
          this.insertNode(root.right, node)
        }
      }
    }
    
    searchValue(root, value){
      if(!root) return false
      if(root.value === value) return true;
        if(root.value > value){
          return this.searchValue(root.left, value);
        }else{
          return this.searchValue(root.right, value);
        }
    }
    
     search(value){
      if(this.isEmpty()) return false;
      if(this.root === value) return true;
      return this.searchValue(this.root, value);
    }
    
    preOrder(root){
      //console.log(root)
      if(root){
       console.log(root.value)
       this.preOrder(root.left);
       this.preOrder(root.right)
      
      }
    }
      inOrder(root){
      //console.log(root)
      if(root){
       this.inOrder(root.left);
       console.log(root.value)
       this.inOrder(root.right)
      
      }
  
  
    }
    
    postOrder(root){
      //console.log(root)
      if(root){
       this.postOrder(root.left);
     //   console.log(root.value)
       this.postOrder(root.right)
        console.log(root.value)
      
      }
  
  
    }
    
    levelOrder(){
      const queue = []
      queue.push(this.root);
     while(queue.length){
       const curr = queue.shift()
        console.log(curr.value)
       if(curr.left){
         queue.push(curr.left)
       }
       if(curr.right){
         queue.push(curr.right)
       }
      
     }
      
    }
    
  }
  
  const bst = new BinarySearchTree();
  //console.log(bst.isEmpty())
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  //console.log(bst.isEmpty())
  //console.log(bst.search(5))
  bst.levelOrder();
  
  
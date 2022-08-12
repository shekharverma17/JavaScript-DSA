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
  
  
  
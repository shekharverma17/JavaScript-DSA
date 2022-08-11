class HashTable{
    constructor(length){
      this.table = new Array(length)
      this.size = length;
    }
    
    hashStringtoHash(key){
      let total = 0
      for(let i=0; i<=key.length;i++){
        total += key.charCodeAt(key[i]);
      }
     // console.log(total)
      return total % this.size;
    }
    
    set(key, value){
      let index = this.hashStringtoHash(key);
      let bucket = this.table[index];
      if(!bucket){
         this.table[index] = [[key, value]];
      }else{
        let sameKeyitem = bucket.find(item => item[0] === key
        )
        if(sameKeyitem){
          sameKeyitem[1] = value;
        }else{
           bucket.push([key, value])
        }
      }
    }
    
    get(key) {
    const index = this.hashStringtoHash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }
  
    remove(key){
      
      let index = this.hashStringtoHash(key);
      let bucket = this.table[index];
      if(bucket){
        const sameKeyItem = bucket.find((item)=> item[0] === key)
        if(sameKeyItem){
           bucket.splice(bucket.indexOf(sameKeyItem), 1);
          
        }
      }
    }
    display(){
      
        for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`index: ${i} value: ${this.table[i]}`);
      }
    }
    }
    
  }
  
  const hash = new HashTable(5);
  hash.set('shekhar', '30');
 // hash.set('ram', '56')
    console.log(hash.get('ram'))
   hash.set('ram', '22')
   hash.set('EEW', '3')
  console.log(hash.get('EEW'))
    hash.display();
  hash.remove('EEW')
  console.log(hash.get('EEW'))
  console.log(hash.get('ram'))
  hash.display();



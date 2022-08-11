/* 
https://leetcode.com/problems/design-hashmap/submissions/

 */
var MyHashMap = function() {
    this.map = new Array(10);
};

MyHashMap.prototype.hash = function(key) {
    let total = 0; 
    for(let i=0;i<=key.length;i++){
        total += key.charCodeAt(key[i])
    }
    return total % this.map.length
};
MyHashMap.prototype.put = function(key, value) {
    let index = this.hash(key)
    let bucket = this.map[index];
  
  if(bucket){
    let sameKeyIndex = bucket.find((item)=> item[0] === key)
    if(sameKeyIndex){
      sameKeyIndex[1] = value
    }else{
      this.map[index].push([key, value])
    }
  }else{
    this.map[index] = [[key,value]]
  }
};
MyHashMap.prototype.get = function(key) {
    let index = this.hash(key)
    let bucket = this.map[index];
    if(bucket){
      const sameKeyIndex = bucket.find((item)=> item[0] === key)
      if(sameKeyIndex){
        return sameKeyIndex[1]
      }
    }
    return -1;
};
MyHashMap.prototype.remove = function(key) {
    let index = this.hash(key);
    let bucket = this.map[index];
    if(bucket){
        const sameKeyItem = bucket.find((item)=> item[0] === key)
        if(sameKeyItem){
             bucket.splice(bucket.indexOf(sameKeyItem), 1);
        }
     }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var MyHashSet = function() {
    this.map = new Array(781)
    this.size = 781
};

MyHashSet.prototype.hash = function(key) {
    let total = 0
    for(i=0; i<=key.length; i++){
        total += key.charCodeAt(key[i])
    }
    return total % this.size
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let index = this.hash(key);
    let bucket = this.map[index]
    if(bucket){
       let similarKeyItem = bucket.find((item)=> item[0]===key)
       if(similarKeyItem){
           similarKeyItem[1] = [key]
       }else{
           this.map[index].push([key])
       }
    }else{
        this.map[index] = [[key]]
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let index = this.hash(key);
    let bucket = this.map[index]
    if(bucket){
       let similarKeyItem = bucket.findIndex((item)=>item[0] === key)
       bucket.splice(similarKeyItem, 1)
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let index = this.hash(key);
    let bucket = this.map[index]
    if(bucket){
       let similarKeyItem = bucket.find((item)=> item[0]===key)
       if(similarKeyItem){
           return similarKeyItem[0] === key
       }
    }
    return false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
Your input
["MyHashSet","add","contains","add","contains","remove","add","contains","add","add",
"add","add","add","add","contains","add","add","add","contains","remove",
"contains","contains","add","remove","add","remove","add","remove","add","contains",
"add","add","contains","add","add","add","add","remove","contains","add",
"contains","add","add","add","remove","remove","add","contains","add","add",
"contains","remove","add","contains","add","remove","remove","add","contains","add", 6
"contains","contains","add","add","remove","remove","add","remove","add","add",
"add","add","add","add","remove","remove","add","remove","add","add",
"add","add","contains","add","remove","remove","remove","remove","add","add","add","add","contains","add","add","add","add","add","add","add","add"]
[[],[58],[0],[14],[58],[91],[6],[58],[66],[51],
[16],[40],[52],[48],[40],[42],[85],[36],[16],[0],
[43],[6],[3],[25],[99],[66],[60],[58],[97],[3],
[35],[65],[40],[41],[10],[37],[65],[37],[40],[28],
[60],[30],[63],[76],[90],[3],[43],[81],[61],[39],
[75],[10],[55],[92],[71],[2],[20],[7],[55],[88], =>6
[39],[97],[44],[1],[51],[89],[37],[19],[3],[13],
[11],[68],[18],[17],[41],[87],[48],[43],[68],[80],
[35],[2],[17],[71],[90],[83],[42],[88],[16],[37],
[33],[66],[59],[6],[79],[77],[14],[69],[36],[21],[40]]
Output
[null,null,false,null,true,null,null,true,null,null,
    null,null,null,null,true,null,null,null,true,null,
    false,true,null,null,null,null,null,null,null,false,
    null,null,true,null,null,null,null,null,true,null,
    true,null,null,null,null,null,null,false,null,null,
    false,null,null,false,null,null,null,null,false,null,
    true,true,null,null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,null,null,null,
    null,null,false,null,null,null,null,null,null,null,
    null,null,false,null,null,null,null,null,null,null,null]
Expected
[null,null,false,null,true,null,null,true,null,null
    ,null,null,null,null,true,null,null,null,true,null,
    false,true,null,null,null,null,null,null,null,true,
    null,null,true,null,null,null,null,null,true,null,
    true,null,null,null,null,null,null,false,null,null,
    false,null,null,false,null,null,null,null,true,null,
    true,true,null,null,null,null,null,null,null,null,
    null,null,null,null,null,null,null,null,null,null,
    null,null,true,null,null,null,null,null,null,null,
    null,null,false,null,null,null,null,null,null,null,null]
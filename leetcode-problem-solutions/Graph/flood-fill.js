/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    let n = image.length
    let m = image[0].length
    let oldColor = image[sr][sc]
    
    const isValid = (i, j) => (i>=0 && i<n && j>=0 && j<m && image[i][j] === oldColor)
    
    function floodfillRec(i, j){
        image[i][j] = color
        if(isValid(i-1, j)) floodfillRec(i-1, j);
        if(isValid(i+1, j)) floodfillRec(i+1, j);
        if(isValid(i, j-1)) floodfillRec(i, j-1);
        if(isValid(i, j+1)) floodfillRec(i, j+1);
        
    }
    
    if(image[sr][sc] !== color) floodfillRec( sr, sc)
    return image;
};
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    let n = image.length
    let m = image[0].length
    let oldColor = image[sr][sc]
    function isValid(i, j){
        if(i>=0 && i<n && j>=0 && j<m && image[i][j] === oldColor){
            return true
        }
        return false;
    }
    function floodfillRec(i, j){
        image[i][j] = color
        
          if(isValid(i-1, j)){
               floodfillRec(i-1, j);
           }
          if(isValid(i+1, j)){
               floodfillRec(i+1, j);
           }
          if(isValid(i, j-1)){
               floodfillRec(i, j-1);
           }
          if(isValid(i, j+1)){
               floodfillRec(i, j+1);
           }
        
    }
    
    if(image[sr][sc] !== color){
         floodfillRec( sr, sc)
    }
   
    return image;
};


[[0,0,0],[0,0,0]]
1
0
2
[[0,0,0],[0,0,0]]
1
1
2

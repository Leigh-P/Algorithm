// My

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var premix = "";
    if(strs.length < 2){
        return strs[0] ? strs[0] : "";
    }
    var minlen = strs[0].length;
    for(var i=0;i<strs.length;i++){
        if(strs[i].length <= strs[0].length) minlen = strs[i].length;
    }
    if(minlen === 0) return "";
    for(var j=0;j<minlen;j++){
        for(var k=0;k<strs.length-1;k++){
            if(strs[k][j] != strs[k+1][j]){
                if(j>0){
                    premix+=strs[0].substr(0,j);
                }
                return premix;
            }
        }
    }
    return strs[0].substr(0,minlen);
    
}




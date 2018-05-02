//my answer
var isPalindrome = function(x) {
    if(x >Number.MIN_SAFE_INTEGER && x < Number.MAX_SAFE_INTEGER ){
        if(x<0){
            return false;
        }
        var arrnum = [].concat(x.toString().split(""));
        if(arrnum.join() == arrnum.reverse().join()){
          return true;
        }else{
          return false;
      }
        
    }else{
      return false;
    } 
};
//others' examples
var isPalindrome = function (x){
    var INT_MAX = Math.pow(2,31) - 1;

    if(x < 0 && x > INT_MAX) return false;
    
    var palindrome = 0;
    var origin = x;

    while(x>0){
        //运用数学方法实现reverse（）；避免类型转换耗时
        palindrome = palindrome * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return palindrome == origin;// 判断回文数表达式
}

//notes:数据类型转换比数学方法耗时更长
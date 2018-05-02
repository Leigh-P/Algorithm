// My

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	// 排序
    nums.sort((a, b) => a - b);
    let count = 0,start = 0;
    for (let i = 0; i < nums.length; i++) {
    	// 计数元素出现的次数
        if(nums[i] == val) {
            count++
        }
    }
    for (let i = 0; i < nums.length; i++) {
    	// 储存元素出现的第一个位置
    	if (nums[i] == val) {
    		start = i;
    		break;
    	}
    }
    // 一次性删除
    nums.splice(start,count);
    return nums.length;
};

// Others

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var length = nums.length;
    for(var i=0;i<nums.length;i++){
        if(nums[i] == val){
            nums.splice(i,1);
            // 防止 val 连续出现
            i--
        }
    }
};
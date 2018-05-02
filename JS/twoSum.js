// others' example
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        // 减少目标数量，从两个到一个
        var tempNums = target - nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] == tempNums) {
                return [i, j];
            }
        }
    }
}
// my answer
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};
// update
var twoSum = function (nums, target) {
    //判断数组长度
    if (nums.length < 8) {
        for (var i = 0; i < nums.length; i++) {
            for (var j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return [i, j];
                }
            }
        }
    }
    else {
        var clone = nums.slice(0);
        clone.sort();
        for (i = 0; i < clone.length; i++) {
            for (j = i + 1; j < clone.length; j++) {
                if (clone[i] + clone[j] == target) {
                    return [nums.indexOf(clone[i]), nums.lastIndexOf(clone[j])]
                }
            }
        }
    }
}
//notes：方法优化：sort（）；减少操作对象

function getMaxValue(arr) {
    let max = arr[0];
    
    for (const element of arr) {
        if (element > max) {
            max = element;   
        }
    }
    return max;
}

const myArr = [-30, 90, 3, 49, 0, 3.5, 234, 939];
console.log(getMaxValue(myArr));
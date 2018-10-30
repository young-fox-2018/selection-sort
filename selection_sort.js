function selectionSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        let k = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[k])
                k = j;
        }
        temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
    return arr
};

console.log(selectionSort([7,6]))
console.log(selectionSort([7,2,1]))
console.log(selectionSort([9,5,8,3]))
console.log(selectionSort([4,3,7,3,9]))
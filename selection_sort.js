function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let small = arr[i]
        let smallIndex = i
        let temp

        // mencari minimum
        for(var j = i; j < arr.length; j++) {
            if(arr[j] < small) {
                small = arr[j]
                smallIndex = j          
            }
        }
    
        temp = arr[i]
        arr[smallIndex] = arr[i]
        arr[i] = small
    }
    return arr
}

console.log(selectionSort([33, 2, 52, 106, 73])) //[12, 33, 52, 73, 106]
console.log(selectionSort([13, 5, 22, 99, 11])) //[5, 11, 13, 22, 99]

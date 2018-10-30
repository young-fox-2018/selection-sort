function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr)
        let valueMin = arr[i]
        // console.log(valueMin)
        let index = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < valueMin) {
                valueMin = arr[j]
                index = j
            }
        }
        debugger
        let bucket = arr[i]
        arr[i] = valueMin
        arr[index] = bucket 
    }
    return arr
}

console.log(selectionSort([11,13,16,4,5,1]))
console.log(selectionSort([3,2,1,5,6,7,9]))
function selectionSort(arr) {
    let sort
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i
        for (let j = 0; j < arr.length; j++) {
            if (i < j && arr[j] < arr[indexMin]) {
                indexMin = j
            }
        }
        sort = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = sort
    }
    return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))
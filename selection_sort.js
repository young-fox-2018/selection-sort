function selectionSort(input) {
    for (let i = 0; i < input.length; i++) {
        let min = input[i]
        let temp = 0
        for (let j = 0; j < input.length; j++) {
            if (input[j] < min) {
                min = input[j]
                temp = j
            }
        }
        if (temp > 0) {
            input[temp] = input[i]
            input[i] = min
        }
    }
    return input
}

// Test Cases
console.log(selectionSort([33, 2, 52, 106, 73])) // [2, 33, 52, 73, 106]
console.log(selectionSort([13, 5, 22, 99, 11])) // [5, 11, 13, 22, 99]
function selectionSort(input) {
    for (let i = 0; i < input.length; i++) {
        let tmp = input[i]
        for (let j = 0; j < input.length; j++) {
            if (tmp <= input[j]) {
                tmp = input[j]
                input[j] = input[i]
                input[i] = tmp
            }
        }
    }
    return input
}

console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))
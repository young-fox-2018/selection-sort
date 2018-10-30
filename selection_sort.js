var selectionSort = (input) => {
    let temp
    for (let i = 0; i < input.length; i++) {
        let idxMin = i
        for (let j = 0; j < input.length; j++) {
            if (i < j && input[j] < input[idxMin]) indexMin = j
        }
        temp = input[i]
        input[i] = input[idxMin]
        input[idxMin] = temp
    }
    return input
}

console.log(selectionSort([33, 2, 52, 106, 73]))
// Output [2,33,52,73,106]
console.log(selectionSort([13, 5, 22, 99, 11]))
// Output [5,11,13,22,99]
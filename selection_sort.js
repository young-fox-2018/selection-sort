function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        debugger
        var currentMin = array[i]
        var indexCurrentMin = i
        var temp = 0
        for (let j = i+1; j < array.length; j++) {
            if(array[j] <  currentMin){
                currentMin = array[j]
                indexCurrentMin = j
            }
        }
        if(array[i] > currentMin) {
            temp = array[i]
            array[i] = array[indexCurrentMin]
            array[indexCurrentMin] = temp
        }
        // console.log(array)
    }
    return array
}

console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))
function selectionSort(param){
    for(let i = 0; i < param.length; i++){
        let smallest = param[i]
        for(let j = i+1; j < param.length; j++){
            if(param[j] < smallest){
                smallest = param[j]
                param[j] = param[i]
                param[i] = smallest
            }
        }
    }
    return param
}

console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))
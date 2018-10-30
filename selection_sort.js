function selectionSort(input){

    for(let i = 0; i < input.length; i++){
        var initial = input[i]
        var temp = input[i+1] 
        var indextemp = i+1
        for(let j = i+1; j < input.length; j++){
            if(temp > input[j]){
                temp = input[j]
                indextemp = j   
            }
        }
        if(initial > temp){
            input[i] = temp
            input[indextemp] = initial
        }
    }
    return input
}
console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))
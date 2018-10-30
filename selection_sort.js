function selSort(input){
    
    for (var i = 0; i < input.length; i++){
        var min = input[i];
        var index 
        for(var j = i; j < input.length; j++){
            if(input[j] < min){
                min = input[j];
                index = j;
            }
        }
        var temp = input[i];
        input[i] = input[index];
        input[index] = temp
        
    }
    return input
}

console.log(selSort([33,2,52,106,73]))
console.log(selSort([13,5,22,99,11]))
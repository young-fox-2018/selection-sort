function selectingSort(input){
    for ( var i = 0 ; i < input.length ; i++ ) {
        var terkecil = input[i];
        var index ;
    
           for ( var j = i ; j < input.length ; j++ ) {
             if( input[j] < terkecil ) {
               terkecil = input[j]
               index = j
             }
           }
       
        var temp  =  input[i]
    
        input[i]  =  input[index]
    
        input[index] = temp
       }

     return input
}

console.log(selectingSort([33,2,52,106,73]))
console.log(selectingSort([13,5,22,99,11]))


function selection_sort(input){
    for(var i = 0; i < input.length; i++){
        // mencari nilaiterkecil
        var indexTerkecil = i;
        var temp = input[indexTerkecil]
        for(var j = i + 1; j < input.length; j++){
            // console.log(input[i], input[j], 'bandingin', input[i] > input[j])
            if (temp > input[j]) {
                indexTerkecil = j
                temp = input[j]
            }
        }
        // console.log(i, indexTerkecil)
        
        var tempValue = input[i];
        input[i] = input[indexTerkecil]
        input[indexTerkecil] = tempValue
        // proses swab
        // console.log(input[i], input[indexTerkecil])
        // if (input[i] > input[indexTerkecil]) {
        // }
        // console.log(input)
    }
    return input
}
console.log(selection_sort([33, 2, 52, 106, 73]))
console.log(selection_sort([13, 5, 22, 99, 11]))
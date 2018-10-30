function selectionSort(array){
    var temp, swap, idxmin, idxnow;
    for(var i=0 ; i<array.length-1 ; i++){
        idxnow = i
        temp = array[i+1]
        idxmin = i+1
        // console.log("now",idxnow)
        for(var j=i+1 ; j<array.length ; j++){
            if(temp > array[j]){
                temp = array[j]
                // console.log("changeTemp",temp)
                idxmin = j
                // console.log("idxmin",idxmin)
            }
        }

        if(array[idxnow] > temp){
            swap = array[idxnow]
            // console.log("swap",swap)
            array[idxnow] = temp
            array[idxmin] = swap
            // console.log("afterSwap", array)
        }
    }
    return array
}

console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))

function selectionSort(arr){
    // var min = Math.min.apply(Math,arr)
    // var res =  []

    // while(arr.length > 0){
    //     min = Math.min.apply(Math,arr)
    //     res.push(min)
    //     arr.splice(arr.indexOf(min),1)
    // }
    // return res

    var min = 0

    for(var i = 0 ; i < arr.length ; i++){
        var iMin = i
        for(var j = i+1 ; j < arr.length ; j++){
            if(arr[j] < arr[iMin]){
                iMin = j
            }
        }
        min = arr[i]
        arr[i] = arr[iMin]
        arr[iMin] = min
    }
    return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]))

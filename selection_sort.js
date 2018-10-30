function selectionSort(arr){
    var arrTemp = arr
    var temp
    var idxMin
    

    for(i=0;i<arrTemp.length;i++){
        idxMin = undefined // refresh temp & idx
        temp = undefined
        for(j=i+1;j<arrTemp.length;j++){
            if(temp == undefined){
                temp = arrTemp[j]
                idxMin = j
                // first insert temp & idx
            }else if(temp > arrTemp[j]){
                temp = arrTemp[j]
                idxMin = j
                // insert temp & idx if less than it's before
            }
        }

        if(arrTemp[i]>temp){
            // swap if current number is greater than temp
            arrTemp[idxMin] = arrTemp[i]
            arrTemp[i] = temp
        }
    }
    


    return arrTemp
}

console.log(selectionSort([3,8,2,5,1,5,2,2,6]))
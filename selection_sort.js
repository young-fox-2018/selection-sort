function selectionSort(arr) {
    let tempIndex = 0;
    let tempValue = 0;

    for (let i = 0; i < arr.length; i++) {
        tempValue = arr[i];
        for (let j = i + 1 ; j < arr.length; j++) {
            if (tempValue > arr[j]) {
                tempValue = arr[j];
                tempIndex = j;
            }
        }

        if (arr[i] > tempValue) {
            arr[tempIndex] = arr[i];
            arr[i] = tempValue;
        }
        console.log(arr)
    }

    return arr;
}

console.log(selectionSort([3,10,2000,10,1]));
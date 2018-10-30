function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var patokan = arr[i];
        var indexPatokan = i;
        var minTmp = arr[i+1];
        var indexMin = i+1;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < minTmp) {
                minTmp = arr[j];
                indexMin = j;
            }
        }
        if (minTmp < patokan) {
            arr[indexPatokan] = minTmp;
            arr[indexMin] = patokan;
        }
    }
    return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
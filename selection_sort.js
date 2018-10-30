function selectionSort(numbers) {
    // var indexPatokan = 0;
    
    for (var i = 0; i < numbers.length - 1; i++){
        var valuePatokan = numbers[i];

        // cari terkecil dari sisi kanan
        var indexMinTemp = i + 1;
        var minTemp = numbers[i + 1];
        
        for ( var j = indexMinTemp; j < numbers.length; j++ ) {
            if ( numbers[j] < minTemp ) {
                indexMinTemp = j;
                minTemp = numbers[j];
            }
        }

        // compare terkecil di kanan dengan patokan, jika ya, swap
        if (minTemp < valuePatokan) {            
            numbers[i] = minTemp;
            numbers[indexMinTemp] = valuePatokan;
        }
    }    

    return numbers;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
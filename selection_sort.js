function selectionSort(arr) {
    var result = []
    var low = arr[0]
    var lastIndex = 0
    var b = 1
    var i = 1
    var counter = 0
    var change = false
    while (counter < arr.length) {
        for (i ; i < arr.length; i++) {

            if (arr[i] < low) {
                lastIndex = i
                low = arr[i]
                change = true
            }
        }   
        
        if (change == true) {
            var a = arr[lastIndex]
            arr[lastIndex] = arr[b-1]
            arr[b-1] = a    
        }

        low = arr[b]
        change = false
        
        
        counter++
        b++
        i = b
        
    }
    return arr
}

console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,99,22,11,12]));


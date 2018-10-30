// code

function selectionSort(arr){ 
    let output = []
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) { // change > value to change sorting direction
                let temp_i = arr[i]; 
                let temp_j = arr[j]; 
                arr[i] = temp_j;
                arr[j] = temp_i;
            }
        }
    } 
    return arr
}



// test case 

test1 = [33,2,52,106,73]
test2 = [13,5,2,99,11]

console.log(selectionSort(test1))
console.log(selectionSort(test2))
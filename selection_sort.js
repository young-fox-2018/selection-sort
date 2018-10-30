function selectionSort(arr) {
  var temp = 0
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i]
    var indexmin = i
    for (var j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j]
        indexmin = j
      }
    }
    //Swap array
    temp = arr[i]
    arr[i] = min
    arr[indexmin] = temp
  }
  return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));

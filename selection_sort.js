function selectionSort(input){
  // KEDUA DARI ERAKHIR G BISA
  // var result = []
  // var tampung = 99999

  // for(var i = 0 ; i < input.length ; i++){
  //   if(input[i] < tampung){
  //     result.unshift(input[i])
  //     tampung = input[i]
  //   }else{
  //     result.push(input[i])
  //   }
  // }
  // return result

  for(var i = 0 ; i < input.length ; i++){
    var tampung = 999999;
    var index ;

    for(var j = i ; j < input.length ; j++){
      if(input[j] < tampung){
        tampung = input[j];
        index = j
      }
    }

    var temp = input[i];
    input[i] = input[index]
    input[index] = temp
  }
  return input
}

console.log(selectionSort([33, 2 ,52 , 106 , 73 ]));
console.log(selectionSort([13, 5 , 22 , 99 , 11 ]));
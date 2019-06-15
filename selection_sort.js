function selectionSort(input){

  for(var i = 0; i < input.length; i++){
    var initial = input[i];
    var temp = input[i+1] ;
    var indextemp = i+1;

    for(var j = i+1; j < input.length; j++){
      if(temp > input[j]){
          temp = input[j]
          indextemp = j   
      }
    }
    // console.log(temp)
    if(initial > temp){
        input[i] = temp
        input[indextemp] = initial
    }
}
return input



}

console.log(selectionSort([33, 2 ,52 , 106 , 73 ]));
console.log(selectionSort([13, 5 , 22 , 99 , 11 ]));
  // for(var i = 0 ; i < input.length ; i++){
  //   tampung = input[i];
  //   var index ;
  
  //   for(var j = i ; j < input.length ; j++){
      
  //     if(input[j] < tampung){
  //       tampung = input[j];
  //       index = j
  //     }
  //   }
  
  //   var temp = input[i];
  //   input[i] = input[index]
  //   input[index] = temp
  // }
  // return input
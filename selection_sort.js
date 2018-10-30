var arr1=[33,2,52,106,73]
var arr2=[13,5,22,99,11]
function Sort(array){
  for(var i = 0 ; i < array.length ; i ++){
    const min = [array[i],i]
    var temp = 0
    for( var j = i ; j < array.length ; j ++ ){
      if(array[j]<min[0]){
        min[0] = array[j]
        min[1] = j
      }
    }
    temp = min[0]
    array[min[1]]=array[i]
    array[i]=temp
    }
  console.log(array)
}
Sort(arr1)
Sort(arr2)

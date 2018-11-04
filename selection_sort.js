function selectingSort(input) { 
        let num = input.length; 
  
         
        for (let i = 0; i < num-1; i++) { 
            
            let minIndex = i; 
            for (let j = i+1 ; j < num ; j++) {

              if (input[j] < input[minIndex]) 
                  minIndex = j; 

            }
            
            let temp = input[minIndex]; 
            input[minIndex] = input[i]; 
            input[i] = temp; 
        } 
        return input
    } 

console.log(selectingSort([33,2,52,106,73]))
console.log(selectingSort([13,5,22,99,11]))

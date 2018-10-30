function selectionSort(params) {
    for (let i = 0; i < params.length; i++) {
        var temp = params[i]
        for (let j = i; j < params.length; j++) {
            if (temp > params[j]) {
                temp = params[j]
                params[j] = params[i]
                params[i] = temp
            }
        }
    }
    return params
}
console.log(selectionSort([8, 5, 7, 1, 9, 3]));

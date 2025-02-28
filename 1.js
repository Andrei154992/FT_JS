function array_1(array){
    let sum = 0;
    let count = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i]
        if (array[i] == 0){
            sum = 0
            count++;
        }
    }
    if (count == 0) sum = 0
    return sum;
}

function array_2(matrix){
    let sum = 0;
    for (let row of matrix){
        if (row.some(element => element < 0))
            sum += row.reduce((acc, val) => acc + val, 0);        
    }
    
    return sum;
}

let array = [10, 6, 0, 3, 7, 0, 8, 44, 9]
let matrix = [[10, 11,0], [3, -7, 98], [99, 3, 5]]

alert(`1 задание: ${array_1(array)}`)
alert(`2 задание: ${array_2(matrix)}`)
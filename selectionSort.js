// JS program approach to selection sort algorithm

function selectionSort(array){
    let n=array.length;
    let min;
    let temp = 0;
    for(let i=0;i<n-1;i++){
        min = i;
        for(let j=i+1;j<n;j++){
            if(array[j]<array[min]){
                min = j;
            }
        }
        if(min != i){
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

console.log(selectionSort([2,3,5,1,4]));

// OUTPUT : [1,2,3,4,5]
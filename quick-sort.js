//Simple program approach to quick sort algorithm.
function quickSort(a){
    let left = [];
    let right = [];
    let result =[];
    let pivot = 0;
    if(a.length < 2){
        return a;
    }else{
        pivot = a.pop() // selecting pivot(last element is my pivot);
        for(i=0;i<a.length;i++){
            if(a[i]<=pivot){
                left.push(a[i]);
            }else{
                right.push(a[i]);
            }
        }
    }
    return result.concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([9, 7, 5, 11, 12, 2, 14, 3, 10, 6]));

// OUTPUT: [ 2, 3, 5, 6, 7, 9, 10, 11, 12, 14 ]
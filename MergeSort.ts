function merge(arr: number[], start:number, mid:number, end:number) {
    let i = start, j = mid, resultant = [];
    while (i < mid && j < end) {
        if (arr[i] <= arr[j]) {
            resultant.push(arr[i]);
            i++;
        } else {
            resultant.push(arr[j]);
            j++;
        }
    }
    arr = [
        ...arr.slice(0, start), 
        ...resultant, 
        ...arr.slice(i, mid), 
        ...arr.slice(j, end),
        ...arr.slice(end)
    ]
    console.log(arr);
}

function MergeSort(arr: number[], start: number, end: number) {
    if (end - start <= 1) {
        return;
    }
    let mid = start + Math.floor((end - start) / 2);
    console.log(start, end)
    MergeSort(arr, start, mid);
    MergeSort(arr, mid, end);
    merge(arr, start, mid, end);
}

let x = [5, 4, 3, 2, 1]
MergeSort(x, 0, 5);
console.log(x)
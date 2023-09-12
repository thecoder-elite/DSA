function swap(arr: number[], i: number, j: number): void {
    let swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
}

function pivot(arr: number[], start: number, end: number): number {
    let i = -1, j = 0;
    while (j < end) {
        if (arr[j] <= arr[end]) {
            swap(arr, ++i, j++);
        }
        else {
            j++;
        }
    }
    swap(arr, ++i, end);
    return i;
}

function quickSort(arr: number[], start: number, end: number): void {
    if (start < end) {
        let pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
}

const x = [2,1,4,5,3]
quickSort(x, 0, x.length - 1);
console.log(x);
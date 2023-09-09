function BinarySearch(arr:number[], target: number):number{
    let start=0, end=arr.length-1, mid=-1;
    while(start <= end){
        mid = start + Math.floor((end-start)/2);
        if(arr[mid] === target){
            return `Target found at index ${mid}`;
        }
        else if(target < arr[mid]){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    return `Target not found`;
}

console.log(BinarySearch([1,2,3,4,5], 0))
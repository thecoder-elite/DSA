class Heap {
    heap: number[] = [];
    heapSize = 0;

    swap(a: number, b: number): void {
        let swap = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = swap;
    }

    heapify(index: number): void {
        let largest = index;
        let parent = Math.floor(largest / 2);
        if (this.heap[parent] < this.heap[largest]) {
            largest = parent;
        }
        if (largest !== index) {
            this.swap(largest, index)
            this.heapify(parent);
        }
    }

    add(value: number): void {
        this.heap.push(value);
        this.heapSize += 1;
        this.heapify(this.heapSize - 1)
    }

    getLargest(): number {
        let poppedElem = this.heap[0];
        this.heap[0] = this.heap[this.heapSize - 1];
        this.heapSize -= 1;
        this.heap = this.heap.slice(0, this.heapSize);
        for (let i = 0; i <= Math.floor(this.heapSize / 2); i++) {
            let largest = i;
            let l = (2 * i) + 1;
            let r = (2 * i) + 2;
            if (l < this.heapSize && this.heap[largest] < this.heap[l]) {
                largest = l;
            }
            if (r < this.heapSize && this.heap[largest] < this.heap[r]) {
                largest = r;
            }
            if (largest !== i) {
                this.swap(largest, i)
            }
        }
        return poppedElem;
    }


    getSortedList(): number[] {
        let sortedArray: number[] = [];
        let originalSize = this.heapSize;
        for (let i = 0; i < originalSize; i++) {
            sortedArray.push(this.getLargest())
        }
        return sortedArray;
    }
}

let heap = new Heap();
heap.add(1);
heap.add(2);
heap.add(3);
heap.add(4);
heap.add(10);
heap.add(20);
heap.getLargest();
heap.add(0);
heap.add(1000);
console.log(heap.getSortedList());
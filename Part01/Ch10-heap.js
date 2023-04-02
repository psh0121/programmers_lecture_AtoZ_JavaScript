class MaxHeap {
    constructor(){
        this.heap = [null];
    }

    push(value){
        this.heap.push(value);

        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while(parentIndex !== 0 && this.heap[parentIndex] < value){
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop(){
        if(this.heap.length === 2) return this.heap.pop();

        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop(); // 힙의 가장 뒤에 있는 값을 떼어서 앞에 붙인다.

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        while(this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]
        ){
            if(this.heap[leftIndex] < this.heap[rightIndex]){
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = temp;

                currentIndex = rightIndex;
            }
            else{
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;

                currentIndex = leftIndex;
            }

            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }

        return returnValue;
    }
}
  
function solution(no, works) {

    // 기한내에 선박을 완성할 수 있는 경우 ==> return 0
    if(works.reduce((acc, cur) => acc + cur, 0) <= no) return 0;

    // 데이터 힙에 입력
    const worksHeap = new MaxHeap();
    for(let work of works) worksHeap.push(work);

    // 데이터를 돌려가면서 -1씩 빼고 힙의 가장자리에 넣는 행위를 no만큼 반복한다.
    for(let i = 0; i < no; i++) worksHeap.push(worksHeap.pop() - 1);

    // 결과값 리턴
    return worksHeap.heap.reduce((acc, cur) => acc + cur ** 2, 0);
}

console.log(solution(4, [4, 3, 3]));    // 12
console.log(solution(2, [3, 3, 3]));    // 17
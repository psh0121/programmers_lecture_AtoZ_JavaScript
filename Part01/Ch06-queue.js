class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    enqueue(newValue){
        const newNode = new Node(newValue);
        if(this.head === null) this.head = this.tail = newNode;
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    
    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    
    peek(){
        return this.head.value;
    }
}

function solution(priorities, location) {
    // 큐 생성 및 노드 연결
    const queue = new Queue();
    
    for(let i = 0; i < priorities.length; i++){
        queue.enqueue([priorities[i], i]);  // [값, 인덱스]
    }
    
    // 우선순위 설정을 위해 priorities 내림차순 정렬
    priorities.sort((a, b) => b - a);
    
    // 우선순위를 기준으로 큐를 정렬하기 위해 반복문 돌림
    let cnt = 0;
    while(true){
        const currentValue = queue.peek();
        
        // 큐의 앞쪽에 있는 값 중요도가 priorities에 있는 중요도 보다 높지 않다면 ==> 뒤로 보내기
        if(currentValue[0] < priorities[cnt]){
            queue.enqueue(queue.dequeue());
        }
        
        // 큐의 앞쪽에 있는 값 중요도가 priorities에 있는 중요도 보다 높다면 => 데이터 추출후 원하는 값인지 확인 후 리턴 결정
        else {
            const value = queue.dequeue();
            cnt += 1;
            if(location === value[1]) return cnt;
        }
    }
    return cnt;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
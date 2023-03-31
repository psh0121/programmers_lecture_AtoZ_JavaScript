// Linked List 연결리스트 구현 연습

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    find(value){
        let currNode = this.head;
        while(currNode.value !== value){
            currNode = currNode.next;
        }
        return currNode;
    }

    append(newValue){
        const newNode = new Node(newValue);
        if(this.head === null) this.head = this.tail = newNode;
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insert(node, newValue){
        const newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode;
    }

    remove(value){
        let prevNode = this.head;
        while(prevNode.next.value !== value){
            prevNode = prevNode.next;
        }

        if(prevNode.next !== null){
            prevNode.next = prevNode.next.next;
        }
    }

    display(){
        let result = [];

        let currNode = this.head;
        while(currNode !== null){
            result.push(currNode.value);
            currNode = currNode.next;
        }
        return result;
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);

console.log(linkedList.display());   // [1, 2, 3, 5]

console.log(linkedList.find(3));    // Node {value: 3, next: Node {value: 5, next: null}}

linkedList.remove(3);

console.log(linkedList.display());   // [1, 2, 5]

linkedList.insert(linkedList.find(2), 10);

console.log(linkedList.display());   // [1, 2, 10, 5]

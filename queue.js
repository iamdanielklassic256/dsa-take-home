
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(value) {
		const newNode = new Node(value)
		this.first = newNode;
		this.last = newNode
		this.length = 1
	}
	enqueue(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.first = newNode
			this.last = newNode
		}
		else {
			this.last.next = newNode;
			this.last = newNode
		}
		this.length++
		return this
	}
	dequeue() {
		if (!this.first) return undefined;
		let temp = this.first;
		this.first = this.first.next
		temp.next = null
		this.length--
		if (this.length === 0) {
			this.first = null;
			this.last = null;
		}
		return temp;
	}
}

let myQueue = new Queue(2);
myQueue.enqueue(4)
myQueue.enqueue(11)
myQueue.dequeue()
console.log(myQueue)
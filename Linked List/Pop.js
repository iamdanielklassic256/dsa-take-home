class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}

	

	

}




/*
	EXPECTED OUTPUT:
	----------------
	Head: 1
	Tail: 2
	Length: 2

	Linked List:
	1
	2

*/
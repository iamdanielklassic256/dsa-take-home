class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let temp = this.root
		while (true) {
			if (newNode.value === temp.value) return undefined
			if (newNode.value < temp.value) {
				if (temp.left === null) {
					temp.left = newNode;
					return this
				}
				temp = temp.left;
			}
			else {
				if (temp.right === null) {
					temp.right = newNode;
					return this
				}
				temp = temp.right;
			}
		}
	}
	contain(value) {
		if (this.root === null) return false;
		let temp = this.root;
		while (temp) {
			if (value < temp.value) {
				temp = temp.left;
			}
			else if(value > temp.value){
				temp = temp.right;
			}
			else{
				return true;
			}
		}
		return false;
	}
	minValueNode(currentNode){
		while(currentNode.left != null){
			currentNode = currentNode.left;
		}
		return currentNode;
	}
}


function testTree(value) {
	let myTree = new BST()
	// if (myTree.root === null) {
	// 	console.log('My Tree has no root :-)')
	// }
	// else {
	// 	console.log('Root: ', myTree.root.value)
	// }
	myTree.insert(30)
	myTree.insert(20)
	myTree.insert(40)


	console.log(myTree)
}
testTree()


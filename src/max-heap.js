const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.sizeOfHeap = 0;
	}

	push(data, priority) {
		let node = new Node(data,priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.sizeOfHeap++;
	}

	pop() {
		this.sizeOfHeap--;
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		this.root = detached;
	}

	size() {
		return this.sizeOfHeap;
	}

	isEmpty() {
		if (!this.sizeOfHeap) {
			return true;
		} else{
			return false;
		}
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;

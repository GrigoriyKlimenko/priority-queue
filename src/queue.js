const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if (!maxSize){
			this.maxSize = 30;
		} else {
			this.maxSize = maxSize;
		}
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.heap.size() < this.maxSize){
			this.heap.push(data, priority);			
		} else {
			throw new Error;
		} 
	}

	shift() {
		this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;

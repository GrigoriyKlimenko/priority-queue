class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
			this.left.parent = this;
		} else if (!this.right) {
			this.right = node;
			this.right.parent = this;
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left.parent = null;
			this.left = null;
		} else if (this.right == node) {
			this.right.parent = null;
			this.right = null;
		} else {
			throw new Error;
		}
	}

	remove() {
		if (!this.parent) {
			return;
		} else {
			this.parent.removeChild(this);
		}

	}
	swapWithParent() {
		if (this.parent) {
			let bufferParentOfParent = null;
			let bufferParent = this.parent;
			let bufferChild = null;
			let bufferParentChild = null;


			if (this.parent.parent) {
				bufferParentOfParent = this.parent.parent;
			}


			// console.log(swapBuffer1);
			// console.log(swapBuffer2);
			this.remove();
			bufferParent.remove();
			if (bufferParentOfParent){
				bufferParentOfParent.appendChild(this);
			}
			
			if (bufferParent.left) {
				bufferParentChild = bufferParent.left;
				bufferParent.left.remove();
			} else if (bufferParent.right) {
				bufferParentChild = bufferParent.right;
				bufferParent.right.remove();
			}

			if (this.left) {
				bufferChild = this.left;
				this.left.remove();
				bufferParent.appendChild(bufferChild);
			}
			if (this.right) {
				bufferChild = this.right;
				this.right.remove();
				bufferParent.appendChild(bufferChild);
			}
			
			this.appendChild(bufferParent);
			if (bufferParentChild) {
				this.appendChild(bufferParentChild);
			}
		}

	}
	// console.log(this);
	// console.log(this.parent)


}

module.exports = Node;

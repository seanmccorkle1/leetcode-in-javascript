const validateBinaryTreeNodes = (n, leftChild, rightChild) => {
	// tree nodes starts from 0 to n - 1
	// if node is not a child(not in LC or RC), then it's a root node
	const findRootNode = (LC, RC) => {
		let root = 0;
		const children = new Set([...LC, ...RC]);

		for (let i = 0; i < n; i++) {
			if (!children.has(i)) root = i;
		}

		return root;
	};

	const root = findRootNode(leftChild, rightChild);
	const visited = new Set();
	const queue = [root];

	while (queue.length) {
		const len = queue.length;

		for (let i = 0; i < len; i++) {
			const node = queue.shift();

			if (visited.has(node)) return false;

			visited.add(node);
			
			// add nodes to queue to visit later
			if (leftChild[node] !== -1) queue.push(leftChild[node]);
			if (rightChild[node] !== -1) queue.push(rightChild[node]);
		}
	}

	// if valid tree: visited = number of node
	// all nodes are visited exactly once from 0 to n - 1 nodes
	return visited.size === n;
};

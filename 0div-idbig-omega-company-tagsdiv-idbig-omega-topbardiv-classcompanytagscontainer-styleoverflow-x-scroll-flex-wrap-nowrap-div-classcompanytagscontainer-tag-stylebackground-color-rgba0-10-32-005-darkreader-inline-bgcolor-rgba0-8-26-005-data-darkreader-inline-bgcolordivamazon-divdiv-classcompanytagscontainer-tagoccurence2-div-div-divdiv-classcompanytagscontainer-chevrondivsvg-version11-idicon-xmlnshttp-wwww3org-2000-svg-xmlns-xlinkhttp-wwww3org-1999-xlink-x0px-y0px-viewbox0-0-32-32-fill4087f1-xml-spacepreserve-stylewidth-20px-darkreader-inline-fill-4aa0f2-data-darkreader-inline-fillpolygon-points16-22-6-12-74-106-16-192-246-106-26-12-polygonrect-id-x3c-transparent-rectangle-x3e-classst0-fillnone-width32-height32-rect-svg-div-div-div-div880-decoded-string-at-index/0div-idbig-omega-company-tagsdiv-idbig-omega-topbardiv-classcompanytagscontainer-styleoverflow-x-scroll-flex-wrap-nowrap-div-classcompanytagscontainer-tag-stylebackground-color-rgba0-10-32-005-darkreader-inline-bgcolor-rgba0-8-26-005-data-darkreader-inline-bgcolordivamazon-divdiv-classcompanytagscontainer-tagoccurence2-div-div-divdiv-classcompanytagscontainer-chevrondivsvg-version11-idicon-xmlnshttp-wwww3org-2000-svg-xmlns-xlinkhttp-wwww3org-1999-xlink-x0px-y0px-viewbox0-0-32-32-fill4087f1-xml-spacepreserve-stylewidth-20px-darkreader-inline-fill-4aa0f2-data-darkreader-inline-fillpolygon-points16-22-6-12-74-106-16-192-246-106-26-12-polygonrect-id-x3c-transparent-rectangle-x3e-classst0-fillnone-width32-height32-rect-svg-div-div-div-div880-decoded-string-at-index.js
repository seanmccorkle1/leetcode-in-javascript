var decodeAtIndex = function(s, k) {
	let size = BigInt(0);

	for (let index = 0; index < s.length; index++) {
		const str = s[index];

		size = isNaN(str) ? size + BigInt(1) : size * BigInt(str);
	}

	for (let index = s.length - 1; index >= 0; index--) {
		const str = s[index];
		const isNumber = !isNaN(str);

		k = BigInt(k) % size;
		if (k === 0n && !isNumber) return str;

		size = isNumber ? size / BigInt(str) : size - BigInt(1);
	}
	return '';
};


var successfulPairs = function(spells, potions, success) {
	let res = [];
	potions.sort((a, b) => a - b);
	for (let i = 0; i < spells.length; i++) {
		let h = potions.length-1, l = 0, mid;
		while (l <= h) {
			mid = ~~(l + (h-l)/2);
			if (spells[i] * potions[mid] >= success) h = mid-1;
			else l = mid+1;
		}
		res[i] = potions.length-1 - h;
	}
	return res;
};

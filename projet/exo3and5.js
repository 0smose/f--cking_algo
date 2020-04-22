const exo3and5 = (k, arr) => {
	let pos = 0;

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] + arr[pos] === k && arr[i] && i != 0)  {
			 console.log(arr[i], arr[pos]);
			return true
		}


		if (i === arr.length - 1) {
			i = pos;
			pos++;
		}

	}
	return false
}

console.log(exo3and5(28, [14,12,  3, 6, 3, 2, 6, 7, 4, 16, 1]));
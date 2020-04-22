const algo = (arr) => {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		let tmp = 1;
		for (let j = i +1; j < arr.length; j++) {
			console.log(arr[i], arr[j])
			if (arr[i] <= arr[j]) {
				tmp = 0;
				console.log("bad condtion met")
				console.log(tmp + " temp")
			}			
		}

		count += tmp
		console.log("------------------")
	}
	console.log(count)

}

algo([10, 4, 7, 11, 13, 13,  12]);
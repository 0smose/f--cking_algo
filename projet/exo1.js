const algo = (k, arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if ((arr[i] + arr[j] == k) && arr[i] != arr[j]) {
				console.log("yep" + arr[i], arr[j])
				return true
			}			
		}

	}
	console.log("nothing met the condition")
}

algo(11, [10, 14, 3, 7, 20, 7, 6, 5])

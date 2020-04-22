
let fs = require('fs');


fs.readFile(process.argv[2], 'utf8', (error, data) => {
  if (error) {
    console.log(error);
    return;
}



console.log(" data set is : " + data);


const myArray = data.split(' ').map(function(item) {
    return parseInt(item, 10);
});


    var countMergeSort=0
    mergeSort=(unsortedArray)=> {
        countMergeSort++
        if (unsortedArray.length <= 1) {
          return unsortedArray;
      }
      const middle = Math.floor(unsortedArray.length / 2);
      const left = unsortedArray.slice(0, middle);
      const right = unsortedArray.slice(middle);
      return merge(
          mergeSort(left), mergeSort(right)
          );
    }
    const merge = (left, right)=> {
        let resultArray = [], leftIndex = 0, rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }
    return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
    }
    // // console.log(mergeSort(myArray));



    const oddEven = (arr) => {
       function swap(arr, x, j) {
      var temp = arr[x];
      arr[x] = arr[j];
      arr[j] = temp;
    }
      sorted = false;

      while (!sorted) {
        sorted = true;
        for (let x = 1; x < arr.length - 1; x+=2) {
          if (arr[x] > arr[x + 1]) {
            swap(arr, x, x + 1)
            sorted = false;
          }
        }

        for (let x = 0; x < arr.length -1; x += 2) {
          if (arr[x] > arr[x + 1]) {
           swap(arr, x, x + 1)
            sorted = false;
          }
          console.log(arr[x])
        } 
      }
      return arr;
      
    }

//    console.log(oddEven(myArray));

   
const combSort = (array) => {
  let interval = Math.floor(array.length/1.3);
      while (interval > 0) {
        for(let i = 0; i+interval<array.length; i+=1) {
          if (array[i] > array[i+interval]) {
            let small = array[i+interval];
            array[i+interval] = array[i];
            array[i] = small;
          }
        }
        interval = Math.floor(interval/1.3);
      }
    return array;
    };

    console.log(combSort(myArray))
});
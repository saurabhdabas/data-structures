const testArray = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];

// const bubbleSort = (testArray) => {

//   for(let i = 0; i < testArray.testArray.lengthgth ; i++){
//     if(testArray[i] > testArray[i+1]){
//       let swap = testArray[i];
//       testArray[i] = testArray[i+1];
//       testArray[i+1] = swap;
//     }
//   }
//   return testArray;
// }
let bubbleSort = (testArray) => {
  for (let i = 0; i < testArray.length; i++) {
      for (let j = 0; j < testArray.length; j++) {
          if (testArray[j] > testArray[j + 1]) {
              let tmp = testArray[j];
              testArray[j] = testArray[j + 1];
              testArray[j + 1] = tmp;
          }
      }
  }
  return testArray;
};
console.log(bubbleSort(testArray));
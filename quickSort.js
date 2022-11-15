const testArray = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];

const quickSort = (testArray) => {
  if(testArray.length === 1) {
    return testArray;
  }
  let pivot = testArray[testArray.length-1];
  console.log("Pivot:",pivot);
  const leftArray =[];
  const rightArray =[];
  for(let i = 0; i < testArray.length - 1; i++){
    if(testArray[i] < pivot){
      leftArray.push(testArray[i]);
    } else {
      rightArray.push(testArray[i]);
    }
  }
  if(leftArray.length > 0 && rightArray.length > 0){
    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
  } else if (leftArray.length > 0) {
    return [...quickSort(leftArray),pivot];
  } else {
    return [pivot,...quickSort(rightArray)];
  }
};

console.log(quickSort(testArray));

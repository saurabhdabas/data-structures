const sortedArray = [2,5,7,10,10,10,18,22,25,30,39];

// Returns the First Occurence

const binarySearchFirstOccurence = (sortedArray,element) => {
  let result;
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  if(startIndex > endIndex) return -1;
  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(element === sortedArray[middleIndex]) {
      result = middleIndex
      endIndex = middleIndex - 1;
    } else {
    if(element < sortedArray[middleIndex]){
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
    }
  }
  return result;
};

console.log(binarySearchFirstOccurence(sortedArray,10));
// Returns the Last Occurence

const binarySearchLastOccurence = (sortedArray,element) => {
  let result;
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  if(startIndex > endIndex) return -1;
  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(element === sortedArray[middleIndex]) {
      result = middleIndex
      startIndex = middleIndex + 1;
    } else {
    if(element < sortedArray[middleIndex]){
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
    }
  }
  return result;
};

console.log(binarySearchLastOccurence(sortedArray,10));
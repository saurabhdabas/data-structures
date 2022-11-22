const array = [2,5,7,10,18,22,25,30,39];
// Search if 22 exists in the array

const binarySearch = (array,target) => {
  return binarySearchHelper(array,target,0,array.length - 1);
};

const binarySearchHelper = (array, target, startIndex, endIndex) => {
  if(startIndex > endIndex){ // Base Case
    return false;
  }
  let mid = Math.floor((startIndex+endIndex)/2);
  if(target === array[mid]){
    return mid;
  } else if (target < array[mid]){
    return binarySearchHelper(array,target,startIndex,mid-1);
  } else {
    return binarySearchHelper(array,target,mid+1,endIndex,);
  }
}

console.log(binarySearch(array,22));
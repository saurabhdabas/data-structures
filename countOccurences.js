const array = [1,1,3,3,5,5,5,5,5,9,11];

// Count Occurences for every element
const countOccurences = (array) => {
  let object = {};
  for(let i = 0; i < array.length; i++){
    if(!object[array[i]]){
      object[array[i]] = 1;
    } else {
      object[array[i]] += 1;
    }
  }
  return object;
};

console.log(countOccurences(array));

// Count Occurences for target element

const countTargetOccurences = (array,target) => {
  let count = 0;
  array.forEach((element)=>{
    if(element === target){
      count += 1;
    }
  });
  return count;
};

console.log(countTargetOccurences(array,3));

// Better Approach is using Binary Search

// PseudoCode
// 1. Find the first Occurence of the element.
// 2. Find the last Occurence of the element.
// 3. Count is calculated as Last Index - First Index + 1.
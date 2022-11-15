const sortedArray = [2,5,7,10,18,22,25,30,39];
// Search if 22 exists in the array

// Naive Approach

const findElement = (sortedArray,element) => {
  for(let i = 0; i < sortedArray.length; i++) {
    if(sortedArray[i] === element) {
      return i;
    }
  }
  return -1; // When not found the element
};
// console.log(findElement(sortedArray,22));

// Binary Search through a sorted Array

const binarySearch = (sortedArray,element) => {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(element === sortedArray[middleIndex]) {
      return middleIndex;
    } else {
    if(element < sortedArray[middleIndex]){
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
    }
  }
  return -1;
};

// Binary Search through an array of Objects 

const people = [
  {
      firstName: 'Leanna',
      lastName: 'Kent',
      occupation: 'activist',
      age: 24
  },
  {
      firstName: 'Zayan',
      lastName: 'Goodman',
      occupation: 'cook',
      age: 30
  },
  {
      firstName: 'Leana',
      lastName: 'Malone',
      occupation: 'programmer',
      age: 18
  },
  {
      firstName: 'Piper',
      lastName: 'Gallagher',
      occupation: 'businessman',
      age: 35
  }
]

// Your task is to find Leana Malone who is a programmer.

const compareFunction = (currentObject) => {
  if(currentObject.firstName === 'Leana' && currentObject.lastName === 'Malone'){
    return 0;
  } 
  if(currentObject.firstName > 'Leana'){
    return 1;
  } else if (currentObject.firstName < 'Leana') {
    return -1;
  } else {
    if(currentObject.lastName > 'Malone'){
      return 1;
    } else {
      return -1;
    }
  }
};

const binarySearchArrayOfObjects = (people, compareFunction) => {
  let startIndex = 0;
  let endIndex = people.length - 1;
  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    let result = compareFunction(people[middleIndex]);
    if(result === 0) {
      return middleIndex;
    } else {
    if(result < 0){
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
    }
  }
  return -1;
}
console.log(binarySearchArrayOfObjects(people,compareFunction));



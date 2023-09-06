const filterOutOdds = (...nums) => {
  return nums.filter((num) => num % 2 === 0 );
}

const findMin = (...nums) => Math.min(...nums);

const doubleAndReturnArgs = (arr, ...rest) => { 
  const doubles = rest.map((num) => num * 2);
  return [...arr, ...doubles]
}


/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {
  const randomItem = Math.round(items.length * Math.random())
  const newArr = [...items];

  console.log(newArr);
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  obj[key] = val;
  return { ...obj };
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  const deletedKeyObj = {...obj};
  delete deletedKeyObj[key];
  return deletedKeyObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return {...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  return { ...obj, [key]: val }
}
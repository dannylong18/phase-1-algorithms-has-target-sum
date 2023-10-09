function hasTargetSum(array, target) {
  // Write your algorithm here
  for ( i=0; i < array.length; i++) {
    let remainder = target - array[i];
    for (j=i+1; j < array.length; j++){
      if (array[j] === remainder)
      return true
    }
  }
  return false 
}

/* 
  O(n^2)
*/

/* 
  loop through initial array starting at the first position and subtract that number from the target;
  the remainder should be one of the remaining numbers in the array; if so return true; else false
*/

/*
  write function that loops through array and subtract first number from target number; 
  then we will loop through remainder of array to find that subtracted number; if found, we will return true; else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log ('expecting: true');
  console.log ('=>', hasTargetSum([1, 4, 9, 10, 15], 13))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

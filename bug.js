function foo(x){
  if (x === null || x === undefined){
    return 0; // Handle null or undefined
  }
  return x.length; // Error if x is not an object with length property
}
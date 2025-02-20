function foo(x){
  if (x === null || x === undefined || typeof x !== 'object' || !('length' in x)){
    return 0; // Handle null, undefined, non-objects, or objects without length
  }
  return x.length; 
}
//Additional handling for other types of x can be added here as needed
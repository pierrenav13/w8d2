function range(start, end) {
  if (start === end) {
    return [end];
  }
  let arr = [start];
  return arr.concat(range(start+1, end));
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1))
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base*exponent(base, exp-1);
}

function fibonacci(n) {
  if (n<3) {
    return [1,1].slice(2-n);
  }

  let prevs = fibonacci(n-1)
  return prevs.concat(prevs[prevs.length-1] + prevs[prevs.length-2]);
}

function deepDup(arr) {
  let copy = [];

  arr.forEach( el => {
    if ( el instanceof Array ) {
      copy.push(deepDup(el));
    } else {
      copy.push(el);
    }
  });
  return copy;
}

function bsearch(arr, target) {
  let mid = Math.floor(arr.length/2);

  if (target < arr[mid]) {
    return bsearch(arr.slice(0, mid), target)
  } else if (target > arr[mid]) {
    result = bsearch(arr.slice(mid+1), target)
    if (result !== -1) {
      return mid+1+result;
    } else {
      return -1;
    }
  } else if (target === arr[mid]) {
    return mid;
  } else {
    return -1;
  }
}

function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let left = mergesort(arr.slice(0, mid));
  let right = mergesort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let merged = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  return merged.concat(arr1).concat(arr2);
}

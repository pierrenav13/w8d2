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

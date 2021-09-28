Array.prototype.myEach = function(callback) {
  for (let i=0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myMap = function(callback) {
  let results = [];

  this.myEach( el => {
    results.push(callback(el));
  });

  return results;
}

Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator;
  let start;
  if (initialValue) {
    accumulator = initialValue;
    start = 0;
  } else {
    accumulator = this[0];
    start = 1;
  }

  this.slice(start).myEach( el => {
    accumulator = callback(accumulator, el);
  });

  return accumulator;
}

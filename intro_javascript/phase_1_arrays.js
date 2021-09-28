Array.prototype.uniq = function () {
  let uniques = [];
  this.forEach( el => {
    if (!uniques.includes(el)) {
      uniques.push(el);
    }
  });
  return uniques;
};

Array.prototype.twoSum = function () {
  let pairs = [];

  for (let i=0; i < this.length; i++) {
    for (let j=i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j])
      }
    }
  }
  return pairs;
}

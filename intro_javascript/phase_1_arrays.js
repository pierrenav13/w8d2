Array.prototype.uniq = function() {
  let uniques = [];
  this.forEach( el => {
    if (!uniques.includes(el)) {
      uniques.push(el);
    }
  });
  return uniques;
};

Array.prototype.twoSum = function() {
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

Array.prototype.transpose = function() {
  let transpose = [];
  for (let i=0; i < this[0].length; i++) {
    let new_col = [];
    for (let j=0; j < this.length; j++) {
      new_col.push(this[j][i])
    }
    transpose.push(new_col);
  }
  return transpose;
}

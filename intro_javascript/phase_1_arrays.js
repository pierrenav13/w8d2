Array.prototype.uniq = function () {
  let uniques = [];
  this.forEach( el => {
    if (!uniques.includes(el)) {
      uniques.push(el);
    }
  });
  return uniques;
};

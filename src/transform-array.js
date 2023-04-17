const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");

  let res = [...arr];

  if(res[0] == '--discard-prev' || res[0] == '--double-prev') {
      return res.splice(1);
  } else if(res[res.length - 1] == '--discard-next' || res[res.length - 1] == '--double-next') {
      return res.splice(0, res.length - 1);
  }

  for(let i = 0; i < res.length; i++) {
      if(res[i] == '--discard-next') {
          res.splice(i + 1, i + 1);
      } else if(res[i] == '--discard-prev') {
          res.splice(i - 1, i - 1);
      } else if(res[i] == '--double-next') {
          res.splice(i, 1);
          res.splice(i + 1, 0, res[i]);
      } else if(res[i] == '--double-prev') {
          res.splice(i, 1);
          res.splice(i - 1, 0, res[i]);
      }
  }
  return res;
}

module.exports = {
  transform
};

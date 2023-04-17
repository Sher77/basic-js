const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    if(arr.length == 0) return 1;
    let count = 1;
    arr.forEach(item => {
        if(Array.isArray(item)) {
            count += this.calculateDepth(item);
        } else {
          count += 0;
        }
    })
    return count;
  }
}

module.exports = {
  DepthCalculator
};

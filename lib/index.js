'use strict';

// // @see https://github.com/stylelint/stylelint/blob/master/docs/developer-guide/processors.md
const getSyntaxBlocks = require('../util/getSyntaxBlocks');
const isFileProcessable = require('../util/isFileProcessable');
const transformCode = require('../util/transformCode');

const transformer = (options) => {
  options = options || {};
  options.target = options.target || ['hoge'];

  const transformedCode = (input, filepath) => {
    if(!isFileProcessable(filepath, options)) return;

    let extractedCode = '';

    const inputs = getSyntaxBlocks(input);
    
    return inputs.map(input => extractedCode += transformCode(input)).join('');
  };

  return transformedCode;
}

const transformedResult = (stylelintResult, filepath) => {};

module.exports = function (options) {
  return {
    code: transformer(options),
    result: transformedResult,
  };
};
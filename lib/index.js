'use strict';

// // @see https://github.com/stylelint/stylelint/blob/master/docs/developer-guide/processors.md

const getSyntaxBlocks = require('../util/getSyntaxBlocks');
const isFileProcessable = require('../util/isFileProcessable');

module.exports = (options) => {
  options = options || {};
  options.target = options.target || ['hoge'];

  const transformedCode = (input, filepath) => {
    if(!isFileProcessable(filepath, options)) return;

    const inputs = getSyntaxBlocks(input);


  };
  const transformedResult = (stylelintResult, filepath) => {
    if(!isFileProcessable(filepath, options)) return;
  };

  return {
    code: transformedCode,
    result: transformedResult,
  }
}

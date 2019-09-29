'use strict';

// // @see https://github.com/stylelint/stylelint/blob/master/docs/developer-guide/processors.md

const getSyntaxBlocks = require('./getSyntaxBlocks');

module.exports = (options) => {

  const isFileProcessable = (extensionName) => options.target.includes(extensionName);
  

  const transformedCode = (input, filepath) => {
    const extensionName = filepath.split('.').slice(-1)[0];
    if(!isFileProcessable(extensionName)) return;

    console.log(getSyntaxBlocks(input));
  };
  const transformedResult = (stylelintResult, filepath) => {
  };

  return {
    code: transformedCode,
    result: transformedResult,
  }
}

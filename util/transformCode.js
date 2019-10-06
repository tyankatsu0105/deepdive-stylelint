'use strict';

const changeCase = require('change-case');

const replacer = (match, p1, p2, p3, offset, string) => {  
  return changeCase.paramCase(p1)
}

module.exports = (input) => {
  return input.replace(/(\w+)\s/gm, replacer).replace(/=>/gm, ':').replace(/,/gm, ';')
};
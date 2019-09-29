'use strict';

module.exports = (source) => {
  const blocks = source.match(/^{{[^}}]*}}/gm);
  return blocks.map(block => block.replace(/^{{/, '').replace(/}}$/, ''))
};
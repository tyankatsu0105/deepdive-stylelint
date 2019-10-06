module.exports = {
  // processors: [
  //   '@mapbox/stylelint-processor-markdown'
  // ],
  processors: [
    ["../lib/index.js", {target: ['hoge']}]
  ],
  extends: "stylelint-config-standard",
  rules: {
    "color-named": "never",
    "indentation": 2,
  }
};
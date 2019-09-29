module.exports = {
  processors: [
    ["../lib/index.js", {target: ['hoge']}]
  ],
  extends: "stylelint-config-standard",
};
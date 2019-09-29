module.exports = (filepath, options) => {
  const extensionName = filepath.split('.').slice(-1)[0];
  return options.target.includes(extensionName);
}
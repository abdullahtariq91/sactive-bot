const fs = require('fs');
const mkp = require('mkdirp');

function mkdirp(dirpath, options) {
  if (!fs.existsSync(dirpath)) {
    mkp.sync(dirpath);
  }
}

function eval2(string) {
  let Func = Function;
  return new Func('return ' + string)();
}

module.exports = {
  mkdirp,
  eval2
};
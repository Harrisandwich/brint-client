'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./utils/index');

exports.default = function (input) {
  var ret = {};
  var strings = input.split(' ');

  if ((0, _index.isCommand)(strings[0])) {
    ret.command = strings[0].substr(1, strings[0].length);
    ret.options = [];
    strings.shift();
    strings.forEach(function (str) {
      if ((0, _index.isOption)(str)) {
        var option = str.substr(1, str.length);
        ret.options.push({
          option: option,
          values: []
        });
      } else {
        var recentOption = ret.options[ret.options.length - 1];
        var value = str;
        if (parseFloat(str)) {
          // if it's a number, convert it
          value = parseFloat(str);
        }
        recentOption.values.push(value);
      }
    });
    return ret;
  }
  // if not a command, send as a message
  ret.command = 'message';
  ret.options = [{
    option: 'txt',
    values: [input]
  }];
  return ret;
};
//# sourceMappingURL=parse-command.js.map
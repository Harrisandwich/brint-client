'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isCommandStr = require('./is-command-str');

Object.defineProperty(exports, 'isCommand', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isCommandStr).default;
  }
});

var _isOptionStr = require('./is-option-str');

Object.defineProperty(exports, 'isOption', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isOptionStr).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map
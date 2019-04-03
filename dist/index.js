#!/usr/bin/env node
'use strict';

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _parseCommand = require('./parse-command');

var _parseCommand2 = _interopRequireDefault(_parseCommand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.load();

/*
*
* Using readline for user input
* See docs here:
* https://nodejs.org/api/readline.html
*
*/

/*
*
* Using Socket.io for web socket communication
* See docs here:
* https://socket.io/docs/
*
*/
var connected = false;
var socketUrl = false ? process.env.HEROKU_SERVER_URL : process.env.LOCAL_SERVER_URL;
var socket = (0, _socket2.default)(socketUrl);

var rl = _readline2.default.createInterface({
  input: process.stdin,
  output: process.stdout
});

socket.on('connect', function () {
  console.log('Connected to server');
  connected = true;
});

rl.on('line', function (input) {
  if (connected) {
    var command = (0, _parseCommand2.default)(input);
    if (command) {
      socket.emit('command', { command: command });
    }
  }
});

socket.on('command-response', function (resp) {
  console.log(resp.output);
  rl.prompt();
});

socket.on('set-appstate', function (resp) {
  console.log('Remember: You can use "/help" to see a list of available commands!');
  switch (resp.state) {
    case 'menu':
      rl.setPrompt('Main Menu: ');
      break;
    case 'playing':
      rl.setPrompt(resp.name + ': ');
      break;
    default:
      rl.setPrompt('Main Menu: ');
  }
  rl.prompt();
});

var secondsWaited = 0;
var connectionInterval = setInterval(function () {
  if (!connected) {
    console.log('Trying to connect...');
    if (secondsWaited > 10) {
      clearInterval(connectionInterval);
      console.log('Could not connect. Try again later');
    } else {
      secondsWaited += 1;
    }
  } else {
    clearInterval(connectionInterval);
    rl.prompt();
  }
}, 1000);
//# sourceMappingURL=index.js.map
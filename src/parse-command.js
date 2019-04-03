import {
  isCommand,
  isOption,
} from './utils/index'


export default (input) => {
  const ret = {}
  const strings = input.split(' ')

  if (isCommand(strings[0])) {
    ret.command = strings[0].substr(1, strings[0].length)
    ret.options = []
    strings.shift()
    strings.forEach((str) => {
      if (isOption(str)) {
        const option = str.substr(1, str.length)
        ret.options.push({
          option,
          values: [],
        })
      } else {
        const recentOption = ret.options[ret.options.length - 1]
        let value = str
        if (parseFloat(str)) {
          // if it's a number, convert it
          value = parseFloat(str)
        }
        recentOption.values.push(value)
      }
    })
    return ret
  }
  // if not a command, send as a message
  ret.command = 'message'
  ret.options = [{
    option: 'txt',
    values: [input],
  }]
  return ret
}

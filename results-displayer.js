const chalk = require('chalk')

const displayResult = (result, options = {}) => {
  const { name, group, link } = result
  const groupName = group.name
  const info = [name, groupName, link]

  if (process.env.NODE_ENV === 'test' && !options.unstub) {
    return info.join(' ')
  }

  console.log(chalk.bgWhite('-------------'))
  console.log('')
  console.log(chalk.magenta(name))
  console.log(chalk.blue(groupName))
  console.log(chalk.yellow.underline(link))
  console.log('')

  return result
}

const displayResults = results => results.map(displayResult)

const limitResults = (results, sliceTo = 9) => results.slice(0, sliceTo)

module.exports = {limitResults, displayResults, displayResult}

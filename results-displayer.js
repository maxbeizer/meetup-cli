const displayResult = (result, options = {}) => {
  const { name, group, link } = result
  const groupName = group.name
  const info = [name, groupName, link]

  if (process.env.NODE_ENV === 'test' && !options.unstub) {
    return info.join(' ')
  }

  console.log('-------------')
  console.log(name)
  console.log(groupName)
  console.log(link)
  console.log('')

  return result
}

const displayResults = results => results.map(displayResult)

const limitResults = (results, sliceTo = 9) => results.slice(0, sliceTo)

module.exports = {limitResults, displayResults, displayResult}

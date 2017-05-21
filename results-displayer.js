const displayResult = (result) => {
  console.log('-------------')
  console.log(result.name)
  console.log(result.group.name)
  console.log(result.link)
  console.log('')
}

const displayResults = (results) => {
  results
    .slice(0, 9)
    .map(result => displayResult(result))
}

module.exports = {displayResults}

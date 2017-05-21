const Netrc = require('netrc-parser')
const netrc = new Netrc()
const password = netrc.machines['api.meetup.com'].password

const NO_PASSWORD_ERROR_MSG = `
No password found in netrc file.
Please obtain an API from meetup.com and set it in your netrc
under the api.meeup.com machine.
`
module.exports = {password, NO_PASSWORD_ERROR_MSG}

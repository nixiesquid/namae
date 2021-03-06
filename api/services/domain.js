import whois from 'whois-json'
const { send, sendError } = require('../util/http')

module.exports = async (req, res) => {
  const name = req.query.name

  if (!name) {
    return res.status(400).json({ error: 'no query given' })
  }

  try {
    const response = await whois(name, { follow: 3, verbose: true })
    const availability = response[0].data.domainName ? false : true
    send(res, availability)
  } catch (err) {
    sendError(res, err)
  }
}

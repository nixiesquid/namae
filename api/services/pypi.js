const fetch = require('isomorphic-unfetch')
const { send, sendError } = require('../util/http')

async function getAvailability(name) {
  const response = await fetch(
    `https://pypi.org/pypi/${encodeURIComponent(name)}/json`
  )
  return response.status !== 200
}

module.exports = async (req, res) => {
  const name = req.query.name

  if (!name) {
    return res.status(400).json({ error: 'no query given' })
  }

  try {
    const availability = await getAvailability(name)
    send(res, availability)
  } catch (err) {
    sendError(res, err)
  }
}

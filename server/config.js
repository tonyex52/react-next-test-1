const host = process.env.host || 'localhost'
const port = parseInt(process.env.PORT, 10) || 3000
const redisHost = process.env.redisHost || 'localhost'
const redisPort = process.env.redisPort || 6379
const redisPassword = process.env.redisPassword || ''

module.exports = {
  host,
  port,
  redisHost,
  redisPort,
  redisPassword,
}

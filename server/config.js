const redisHost = process.env.redisHost || 'localhost'
const redisPort = process.env.redisPort || 6379
const redisPassword = process.env.redisPassword || ''

module.exports = {
  redisHost,
  redisPort,
  redisPassword,
}
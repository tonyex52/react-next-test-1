const express = require('express')()
const Next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const redis = require('redis')
const passport = require('passport')

const config = require('./config')
const strategy = require('./passport/strategy')
const strategyUtils = require('./passport/utilities')
const responseStatus = require('../constants/responseStatus')
const responseFormatter = require('../utils/responseFormatter')

passport.use(strategy)
passport.serializeUser(strategyUtils.serializer)
passport.deserializeUser(strategyUtils.deserializer)

const redisConfig = {
  host: config.redisHost,
  port: config.redisPort,
}
if (config.redisPassword) {
  Object.assign(redisConfig, { password: config.redisPassword })
}
const redisClient = redis.createClient(redisConfig)

redisClient.on('error', (error) => {
  console.log(error)
})

const sessionOptions = {
  secret: 'test secret',
  store: new RedisStore({
    client: redisClient,
  }),
  cookieName: 'next react test',
  cookie: {
    expires: 1000 * 3600,
  },
  resave: false,
  saveUninitialized: false,
}

express.use(require('body-parser').urlencoded({ extended: true }))
express.use(session(sessionOptions))

express.use(passport.initialize())
express.use(passport.session())

express.post('/login-action', (req, res, done) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      return res.send(error)
    }
    if (!user) {
      return res.redirect('/login')
    }
    return req.logIn(user, (err) => {
      if (err) {
        return res.send(err, info)
      }
      return res.redirect('/')
    })
  })(req, res, done)
})

express.get('/login', (req, res, done) => {
  if (req.user) {
    res.redirect('/')
  }
  done()
})

express.get('/', (req, res, done) => {
  if (!req.user) {
    res.redirect('/login')
  }
  done()
})

express.use('/api/*', (req, res, done) => {
  if (!req.user) {
    res.json(responseFormatter(null, responseStatus.USER_NOT_LOGIN))
  }
  done()
})

/* NextJS handler START */

const app = Next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    if (dev) {
      express.get('/_next/*', (req, res) =>
        handle(req, res).then(() => {
          res.sent = true
        })
      )
    }

    express.all('/api/*', (req, res) =>
      handle(req, res).then(() => {
        res.sent = true
      })
    )

    express.all('/*', (req, res) => {
      return handle(req, res).then(() => {
        res.sent = true
      })
    })
  })
  .catch((err) => console.log(err))

/* NextJS handler END */

express.listen(port, (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})

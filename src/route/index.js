const Router = require('koa-router')
const router = new Router()

// router.use(require('./api'))
router.use('/api', require('./api'))
router.use(require('./chatbot'))
router.use(require('./liff'))

module.exports = router.routes()
const Router = require('koa-router')
const router = new Router()

router.use(require('./chatbot'))

module.exports = router.routes()
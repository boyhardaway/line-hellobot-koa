const Router = require('koa-router')

const webhooks = require('./webhooks') 

const router = new Router()

// router.get('/webhooks', webhooks.getHandler)
router.post('/webhooks', webhooks.postHandler) 


module.exports = router.routes()
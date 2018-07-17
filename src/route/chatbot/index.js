const Router = require('koa-router')
const webhooks = require('./webhooks') 
const SendMessageAuction = require('./SendMessageAuction')
const router = new Router()

// router.get('/webhooks', webhooks.getHandler)
router.post('/webhooks', webhooks.postHandler) 
router.get('/SendMessageAuction', SendMessageAuction.AutoSendMsg)

module.exports = router.routes()
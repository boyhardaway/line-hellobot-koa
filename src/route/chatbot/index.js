const Router = require('koa-router')
const webhooks = require('./webhooks') 
const SendMessageAuction = require('./SendMessageAuction')
const router = new Router()
 
console.log("==============Index router===============")
//Post 
router.post('/webhooks', webhooks.postHandler)  

//Get
// router.get('/webhooks', webhooks.getHandler)  
router.get('/SendMessageAuction', SendMessageAuction.AutoSendMsg)

module.exports = router.routes()
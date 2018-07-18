const Router = require('koa-router')
const middlewareLine = require('@line/bot-sdk').middleware
const config = require('../../config/config')
const webhooks = require('./webhooks') 
const SendMessageAuction = require('./SendMessageAuction')
const router = new Router()
 
console.log("==============Index router===============")

const configAccess = {
    channelAccessToken: config.channelAccessToken,
    channelSecret: config.channelSecret
  }

//Post 
router.post('/webhooks', middlewareLine(configAccess), webhooks.postHandler)  

//Get
// router.get('/webhooks', webhooks.getHandler)  
router.get('/SendMessageAuction', SendMessageAuction.AutoSendMsg)

module.exports = router.routes()
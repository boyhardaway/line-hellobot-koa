const schedule = require('node-schedule')
const message = require('../route/chatbot/messagingApi')
const flexMessage = require('../route/chatbot/flexMessage') 
 
const scheduleJobSendMessage = schedule.scheduleJob('* 10 * * * *', function(){
 
  message.pushMessage('U82d78fbd0a435be08b2b5b22f122da30', flexMessage.messageAuction)
  // scheduleJobSendMessage.cancel() 
})


module.exports = scheduleJobSendMessage

//apiaws-dev.cpf.co.th/ifarmchatbot/v0/aqua/chatbot
const schedule = require('node-schedule')
const message = require('../route/chatbot/messagingApi')
const flexMessage = require('../route/chatbot/flexMessage') 
// var rule = new schedule.RecurrenceRule();
// rule.second = 20
const scheduleJobSendMessage = schedule.scheduleJob('*/5 * * * * *', function(){
  
  //message.multicastMessage(['U82d78fbd0a435be08b2b5b22f122da30'], flexMessage.messageAuction)
  
  message.pushMessage('U82d78fbd0a435be08b2b5b22f122da30', flexMessage.messageAuction)
  message.pushMessage('U60db7ce1175f33efdcd717037724715c', flexMessage.messageAuction)
  scheduleJobSendMessage.cancel()


  //dome Ub2ced7a7b935f98c5fa5b8a97dc56af4
  //wak U60db7ce1175f33efdcd717037724715c
  // boy U82d78fbd0a435be08b2b5b22f122da30  ,  U475d48c1c3381f8f380d3b74e1753a80

  
})


module.exports = scheduleJobSendMessage

//apiaws-dev.cpf.co.th/ifarmchatbot/v0/aqua/chatbot
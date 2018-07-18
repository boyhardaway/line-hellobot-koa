const message = require('./messagingApi')
const flexMessage = require('./flexMessage') 

const AutoSendMsg = () => {
     
  message.pushMessage('U82d78fbd0a435be08b2b5b22f122da30', flexMessage.messageAuction)
  // message.pushMessage('Ub2ced7a7b935f98c5fa5b8a97dc56af4', flexMessage.messageAuction)
  
}

module.exports = {
  AutoSendMsg
}
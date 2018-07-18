const message = require('./messagingApi')
const flexMessage = require('./flexMessage') 

const AutoSendMsg = () => {
     
  message.pushMessage('U82d78fbd0a435be08b2b5b22f122da30', flexMessage.messageAuction)
  message.pushMessage('U60db7ce1175f33efdcd717037724715c', flexMessage.messageAuction)
  
}

module.exports = {
  AutoSendMsg
}
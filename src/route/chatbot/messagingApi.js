const line = require('@line/bot-sdk'); 
const config = require('../../config/config')
const client = new line.Client({
  channelAccessToken: '{' + config.channelAccessToken + '}'
}) 

const pushMessage = (toUserId, pMessage) => {
  const message = pMessage
  client.pushMessage(toUserId, message)
  .then((res) => {
    console.log('.then : pushMessage')
  })
  .catch((err) => {
    console.log(err)
  }) 
}
 
const replyMessage = (replyToken, pMessage) => {
  const message = pMessage
  client.replyMessage(replyToken, message)
  .then(() => {
    console.log('.then : replyMessage')
  })
  .catch((err) => {
    console.log(err)
  }) 
}

const multicastMessage = (toUserIdArry, pMessage) => {
  const message = pMessage
  client.multicast(toUserIdArry, message)
  .then((res) => {
    console.log('.then : multicastMessage')
  })
  .catch((err) => {
    console.log(err)
  }) 
}

module.exports = {
  replyMessage,  
  pushMessage, 
  multicastMessage
}
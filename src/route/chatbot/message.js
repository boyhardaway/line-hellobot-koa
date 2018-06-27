const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: 'Bearer {M9MipC2I8aSvbYB65LR56z5IScjq4U+ZU4uigiwhEx7D9zImwJw7doAlRmcMj6F7jFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1BuZ4hDoAbL12H3cdv5Y3/BmnClCZrzYKsEXgv3dcLifQdB04t89/1O/w1cDnyilFU=}'
})

const replyMessage = async (replyToken) => { 
  const message = {
    type: 'text',
    text: 'Hello World!'
  };
  
  client.replyMessage(replyToken, message)
    .then(() => {
      
    })
    .catch((err) => {
      // error handling
    })
  }

module.exports = {
    replyMessage
  }
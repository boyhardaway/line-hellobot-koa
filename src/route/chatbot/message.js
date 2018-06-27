const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: '{M9MipC2I8aSvbYB65LR56z5IScjq4U+ZU4uigiwhEx7D9zImwJw7doAlRmcMj6F7jFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1BuZ4hDoAbL12H3cdv5Y3/BmnClCZrzYKsEXgv3dcLifQdB04t89/1O/w1cDnyilFU=}'
})

const replyMessage = (replyToken) => { 
  const message = {
    type: 'uri',
    label:"View details",
    uri: 'https://www.google.co.th'
  }
  //https://line.me/R/app/1586994800-WboBOnRK
  client.replyMessage(replyToken, message)
    .then(() => {
      console.log('.then') 
    })
    .catch((err) => {
      console.log(err) 
    })  
}

module.exports = {
    replyMessage
  }
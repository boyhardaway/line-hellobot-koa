const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: '{M9MipC2I8aSvbYB65LR56z5IScjq4U+ZU4uigiwhEx7D9zImwJw7doAlRmcMj6F7jFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1BuZ4hDoAbL12H3cdv5Y3/BmnClCZrzYKsEXgv3dcLifQdB04t89/1O/w1cDnyilFU=}'
})

const replyMessage = (replyToken) => { 
//   const message = {
//     type: 'uri',
//     label:"View details",
//     uri: 'https://www.google.co.th'
//   }

  client.replyButtonTemplate(replyToken, 'this is a template', { 
    title: 'Menu',
    text: 'Please select',
    actions: [
      {
        type: 'postback',
        label: 'Buy',
        data: 'action=buy&itemid=123',
      },
      {
        type: 'postback',
        label: 'Add to cart',
        data: 'action=add&itemid=123',
      },
      {
        type: 'uri',
        label: 'View detail',
        uri: 'https://line.me/R/app/1586994800-WboBOnRK',
      },
    ],
  })
  //https://line.me/R/app/1586994800-WboBOnRK
  // client.replyMessage(replyToken, message)
  //   .then(() => {
  //     console.log('.then') 
  //   })
  //   .catch((err) => {
  //     console.log(err) 
  //   })  
}



const replyLiffId =  async (replyToken, liffId) => { 
  let headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer {M9MipC2I8aSvbYB65LR56z5IScjq4U+ZU4uigiwhEx7D9zImwJw7doAlRmcMj6F7jFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1BuZ4hDoAbL12H3cdv5Y3/BmnClCZrzYKsEXgv3dcLifQdB04t89/1O/w1cDnyilFU=}"
  }
  let body = JSON.stringify({
    replyToken: replyToken,
    messages: [
      {
        type: "text",
        text: "https://line.me/R/app/" + liffId   
      }
    ]
  })

  request.post(
    {
      url: "https://api.line.me/v2/bot/message/reply",
      headers: headers,
      body: body
    },
    (err, ctx) => {
      // console.log('status = ' + ctx.status)
    }
  )
}

module.exports = {
    replyMessage,
    replyLiffId
  }
const line = require('@line/bot-sdk');
// const { LineClient } = require('messaging-api-line');
const client = new line.Client({
  channelAccessToken: '{M9MipC2I8aSvbYB65LR56z5IScjq4U+ZU4uigiwhEx7D9zImwJw7doAlRmcMj6F7jFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1BuZ4hDoAbL12H3cdv5Y3/BmnClCZrzYKsEXgv3dcLifQdB04t89/1O/w1cDnyilFU=}'
})

// const clientv2 = LineClient.connect({
//   accessToken: '{M9MipC2I8aSvbYB65LR56z5IScjq4U+ZU4uigiwhEx7D9zImwJw7doAlRmcMj6F7jFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1BuZ4hDoAbL12H3cdv5Y3/BmnClCZrzYKsEXgv3dcLifQdB04t89/1O/w1cDnyilFU=}',
//   channelSecret: '6a38ce8a1610100c07534812b9e042b9',
// })

const replyMessage = (replyToken) => {
  const message = {
    type: 'text',
    text: 'https: //line.me/R/app/1586994800-WboBOnRK'
  }  
  client.replyMessage(replyToken, message)
  .then(() => {
    console.log('.then')
  })
  .catch((err) => {
    console.log(err)
  }) 
}

const replyFlexMessage = (replyToken) => {
  const message = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "FIFA World Cup 2018",
            "size": "xl",
            "weight": "bold"
          }
        ]
      },
      "hero": {
        "type": "image",
        "url": "https://sitthi.me:3807/static/fifa.jpg",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "LIVE !",
                "size": "lg",
                "color": "#555555",
                "weight": "bold",
                "align": "center"
              }
            ]
          },
          {
            "type": "button",
            "style": "primary",
            "action": {
              "type": "postback",
              "label": "Portugal  1 : 0  Morocco",
              "displayText": "Live Report !!",
              "data": "LIVE"
            }
          },
          {
            "type": "separator",
            "margin": "lg"
          },
          {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "horizontal",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "style": "primary",
                    "action": {
                      "type": "postback",
                      "label": "Last Match",
                      "displayText": "Last Match",
                      "data": "LAST"
                    }
                  },
                  {
                    "type": "button",
                    "style": "primary",
                    "action": {
                      "type": "postback",
                      "label": "Next Match",
                      "displayText": "Next Match",
                      "data": "NEXT"
                    }
                  }
                ]
              },
              {
                "type": "box",
                "layout": "horizontal",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "style": "primary",
                    "action": {
                      "type": "postback",
                      "label": "Schedule",
                      "displayText": "Schedule",
                      "data": "SCHEDULE"
                    }
                  },
                  {
                    "type": "button",
                    "style": "primary",
                    "action": {
                      "type": "postback",
                      "label": "Table",
                      "displayText": "Table",
                      "data": "TABLE"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "button",
            "margin": "sm",
            "action": {
              "type": "uri",
              "label": "View Source",
              "uri": "https: //line.me/R/app/1586994800-WboBOnRK"
            },
            "style": "secondary"
          }
        ]
      }
    }
  }

  //https://sitthi.me:3807/downloaded/ba5f784d837540dfb40df2d531d7519c.json
  client.replyMessage(replyToken, message)
  .then(() => {
    console.log('then FlexMessage')
  })
  .catch((err) => {
    console.log(err)
  }) 
}

const replyLiffId = async (replyToken, liffId) => {
  let headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer {M9MipC2I8aSvbYB65LR56z5IScjq4U+ZU4uigiwhEx7D9zImwJw7doAlRmcMj6F7jFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1BuZ4hDoAbL12H3cdv5Y3/BmnClCZrzYKsEXgv3dcLifQdB04t89/1O/w1cDnyilFU=}'
  }
  let body = JSON.stringify({
    replyToken: replyToken,
    messages: [{
      type: 'text',
      text: 'https://line.me/R/app/' + liffId
    }]
  })

  request.post({
      url: 'https://api.line.me/v2/bot/message/reply',
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
  replyLiffId,
  replyFlexMessage
}
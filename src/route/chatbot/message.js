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
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "action": {
        "type": "uri",
        "uri": "https://linecorp.com"
      }
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "action": {
        "type": "uri",
        "uri": "https://linecorp.com"
      },
      "contents": [
        {
          "type": "text",
          "text": "Brown's Burger",
          "size": "xl",
          "weight": "bold"
        },
        {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "icon",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png"
                },
                {
                  "type": "text",
                  "text": "$10.5",
                  "weight": "bold",
                  "margin": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": "400kcl",
                  "size": "sm",
                  "align": "end",
                  "color": "#aaaaaa"
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "icon",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png"
                },
                {
                  "type": "text",
                  "text": "$15.5",
                  "weight": "bold",
                  "margin": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": "550kcl",
                  "size": "sm",
                  "align": "end",
                  "color": "#aaaaaa"
                }
              ]
            }
          ]
        },
        {
          "type": "text",
          "text": "Sauce, Onions, Pickles, Lettuce & Cheese",
          "wrap": true,
          "color": "#aaaaaa",
          "size": "xxs"
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "spacer",
          "size": "xxl"
        },
        {
          "type": "button",
          "style": "primary",
          "color": "#905c44",
          "action": {
            "type": "uri",
            "label": "Add to Cart",
            "uri": "https://linecorp.com"
          }
        }
      ]
    }
  }
  // client.replyMessage(replyToken, JSON.parse(message))
  // .then(() => {
  //   console.log('then FlexMessage')
  // })
  // .catch((err) => {
  //   console.log(err)
  // }) 

  let headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer {M9MipC2I8aSvbYB65LR56z5IScjq4U+ZU4uigiwhEx7D9zImwJw7doAlRmcMj6F7jFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1BuZ4hDoAbL12H3cdv5Y3/BmnClCZrzYKsEXgv3dcLifQdB04t89/1O/w1cDnyilFU=}'
  }
  let body = JSON.stringify({
    replyToken: replyToken,
    messages: [message]
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
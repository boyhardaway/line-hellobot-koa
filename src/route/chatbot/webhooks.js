const request = require("request-promise")

// const getHandler = async (ctx) => {
//       ctx.body = 'Hello Get'
// }

const postHandler = async ctx => {
  console.log("==============ctx.request.body===============")
  console.log(ctx.request.body.events[0].message)

  let msg = ctx.request.body.events[0].message
  if (msg.text.match("^add=")) {    
    let urlMsg = msg.text.split("=", 2) 
    let liffId = await liff(urlMsg[1]) 

    let replyToken = ctx.request.body.events[0].replyToken
    replyLiffId(replyToken, liffId)
  }else if (msg.text.match("^del=")) {
    let liffId = msg.text.split("=", 2) 
    await delLiff(liffId[1]) 
  }
  ctx.status = 200
}

async function liff(urlMsg) {
  let headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer {M9MipC2I8aSvbYB65LR56z5IScjq4U+ZU4uigiwhEx7D9zImwJw7doAlRmcMj6F7jFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1BuZ4hDoAbL12H3cdv5Y3/BmnClCZrzYKsEXgv3dcLifQdB04t89/1O/w1cDnyilFU=}"
  }
  let body = JSON.stringify({
    view: {
      type: "tall",
      url: urlMsg
    }
  })
  const response = await request.post({
    url: "https://api.line.me/liff/v1/apps",
    headers: headers,
    body: body
  })
  let res = JSON.parse(response)
  return res.liffId
}

async function delLiff(liffId) {
    let headers = { 
      Authorization:
        "Bearer {M9MipC2I8aSvbYB65LR56z5IScjq4U+ZU4uigiwhEx7D9zImwJw7doAlRmcMj6F7jFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1BuZ4hDoAbL12H3cdv5Y3/BmnClCZrzYKsEXgv3dcLifQdB04t89/1O/w1cDnyilFU=}"
    } 
    request.delete({
      url: "https://api.line.me/liff/v1/apps/" + liffId,
      headers
    })
  }

async function replyLiffId(replyToken, liffId) {
  console.log("==============function replyLiffId===============")
  console.log(liffId)
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
        text: "line://app/" + liffId
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
  postHandler
}

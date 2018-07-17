const message = require('./messagingApi')
const liff = require('../liff/funcLiff')
// const getHandler = async (ctx) => {
//       ctx.body = 'Hello Get'
// }

const postHandler = async ctx => {
  console.log("==============ctx.request.body===============")
  console.log(ctx.request.body)
  console.log(process.env.DATABASE_URL)
  const replyToken = ctx.request.body.events[0].replyToken
  let msg = ctx.request.body.events[0].message
  if (msg.text.match("^addliff=")) {    
    let urlMsg = msg.text.split("=", 2) 
    let liffId = await liff.addLiff(urlMsg[1])     
    liff.replyLiffId(replyToken, liffId)
  }else if (msg.text.match("^delliff=")) {
    let liffId = msg.text.split("=", 2) 
    await liff.delLiff(liffId[1]) 
  }else if (msg.text.match("<auction>yes")) {
    let msg = {
      type: 'text',
      text: 'Thank You'
    }  
    message.replyMessage(replyToken, msg)
  }else{
    let msg = {
      type: 'text',
      text: 'This is a bot'
    }  
     message.replyMessage(replyToken, msg)
   }
  ctx.status = 200
} 

module.exports = {
  postHandler
}

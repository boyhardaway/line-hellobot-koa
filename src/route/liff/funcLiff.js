const request = require("request-promise")
const config = require('../../config/config') 
const addLiff = async (urlMsg) => {
    let headers = config.header
    let body = JSON.stringify({
        view: {
            type: "tall",
            url: urlMsg
        }
    })
    const response = await request.post({
        url: config.urlLiff,
        headers: headers,
        body: body
    })
    let res = JSON.parse(response)
    return res.liffId
}

const delLiff = async (liffId) => {
    let headers = config.header
    request.delete({
        url: `${config.urlLiff}/${liffId}`,
        headers
    })
}

const replyLiffId = async (replyToken, liffId) => {
    let headers = config.header
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
    addLiff,
    delLiff,
    replyLiffId
}
// const channelAccessToken = process.env.channelAccessToken
const channelAccessToken = process.env.channelAccessToken || 'Iiz5TIHYjsH/hCbj1t1VMieBt1J1yvFZnr9SBg9R2lr4UkTN/2Abh6xMOqyZXu3vkIjb7b+BSSgS6v5AhDOwXQx5frX+UxTUrtID79h9mQEzxdM9kaw5OCw6NH3djSOzdRUN5Ewpqkc5bb/XqAykoAdB04t89/1O/w1cDnyilFU='
const channelSecret = process.env.channelSecret || '22d6e817c19950080a6fa75c316a97da'
const urlRestApi = ''
const urlLiff = 'https://api.line.me/liff/v1/apps/'
const header = {    
                    "Content-Type": "application/json",
                    "Authorization": `Bearer { ${channelAccessToken} }`
                }
module.exports = {
    channelAccessToken,
    urlRestApi,
    header,
    urlLiff,
    channelSecret
  }
  
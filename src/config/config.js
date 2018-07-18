// const channelAccessToken = process.env.channelAccessToken
const channelAccessToken = 'Iiz5TIHYjsH/hCbj1t1VMieBt1J1yvFZnr9SBg9R2lr4UkTN/2Abh6xMOqyZXu3vkIjb7b+BSSgS6v5AhDOwXQx5frX+UxTUrtID79h9mQEzxdM9kaw5OCw6NH3djSOzdRUN5Ewpqkc5bb/XqAykoAdB04t89/1O/w1cDnyilFU='
const urlRestApi = ''
const header = {    "Content-Type": "application/json",
                    "Authorization": `Bearer { ${channelAccessToken} }`
                }
module.exports = {
    channelAccessToken,
    urlRestApi,
    header
  }
  
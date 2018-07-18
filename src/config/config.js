// const channelAccessToken = process.env.channelAccessToken
const channelAccessToken = 'M9MipC2I8aSvbYB65LR56z5IScjq4U+ZU4uigiwhEx7D9zImwJw7doAlRmcMj6F7jFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1BuZ4hDoAbL12H3cdv5Y3/BmnClCZrzYKsEXgv3dcLifQdB04t89/1O/w1cDnyilFU='
const urlRestApi = ''
const header = {    "Content-Type": "application/json",
                    "Authorization": `Bearer { ${channelAccessToken} }`
                }
module.exports = {
    channelAccessToken,
    urlRestApi,
    header
  }
  
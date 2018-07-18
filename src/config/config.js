// const channelAccessToken = process.env.channelAccessToken
const channelAccessToken = 'y/h0pUKHJ1OiTR0CAQ6JSvvjdttgVZaiM7iLNGMSTZApgvaw8NeK8CKQqktvJQfKjFITY6cZdrHru1NKGkbaFEMfDQRwzwbw9/YFyO+JW1AdJPvg4Zguv4b9Sl5YILnBkp+qsxWHvSERgdKO25aYjFGUYhWQfeY8sLGRXgo3xvw='
const urlRestApi = ''
const header = {    "Content-Type": "application/json",
                    "Authorization": `Bearer { ${channelAccessToken} }`
                }
module.exports = {
    channelAccessToken,
    urlRestApi,
    header
  }
  
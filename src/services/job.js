const schedule = require('node-schedule')
const message = require('../route/chatbot/message')

// var rule = new schedule.RecurrenceRule();
// rule.second = 20
const runJob = schedule.scheduleJob('*/5 * * * * *', function(){
  console.log(`The answer to life, the universe, and everything!`) 
  message.replyMessage('U82d78fbd0a435be08b2b5b22f122da30')
  runJob.cancel()
})

module.exports = runJob
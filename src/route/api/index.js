const Router = require('koa-router')

const productapi = require('./productapi') 

const router = new Router()

router.get('/productapi', productapi.getHandler) 


module.exports = router.routes()
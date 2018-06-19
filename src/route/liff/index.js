const Router = require('koa-router')

const product = require('./product') 

const router = new Router()

router.get('/product', product.getHandler) 


module.exports = router.routes()
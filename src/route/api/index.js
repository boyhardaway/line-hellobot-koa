const Router = require('koa-router')

const product = require('./product') 
const healthcheck = require('./healthcheck') 
const router = new Router()

router.get('/product', product.getHandler) 
router.get('/healthcheck', healthcheck.getHandler) 

module.exports = router.routes()
const Koa = require('koa')
const serve = require('koa-static')
const render = require('koa-ejs')
const path = require('path')
const koaBody = require('koa-body') 

const app = new Koa()

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false
})

app 
.use(koaBody({ multipart: true}))
.use(require('./route'))
.use(serve('public')) 
.listen(process.env.PORT || 8000)


// .use(router.allowedMethods({
//     throw: true,
//     notImplemented: () => new Boom.notImplemented(),
//     methodNotAllowed: () => new Boom.methodNotAllowed()
//   }))
const getHandler = async ctx => {
    let obj = {}
    obj.products = [
        {code: '0000000201458777',name: 'ProductName A'},
        {code: '0000000201458121',name: 'ProductName B'},
        {code: '0000000201365591',name: 'ProductName C'},
        {code: '0000000201322541',name: 'ProductName E'}        
    ] 
    await ctx.render('product', obj)
  }

  module.exports = {
    getHandler
  }
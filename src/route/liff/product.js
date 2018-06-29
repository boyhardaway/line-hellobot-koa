const getHandler = async ctx => {
    let obj = {}
    obj.products = [
        {code: '0000000201458777',name: '0000000201458777'},
        {code: '0000000201458121',name: '0000000201458121'},
        {code: '0000000201365591',name: '0000000201365591'},
        {code: '0000000201322541',name: '0000000201322541'}        
    ] 

    obj.farmorgs = [
      {code: '781701-A101-0020-0001',name: '781701-A101-0020-0001'},
      {code: '781701-A101-0021-0001',name: '781701-A101-0021-0001'},
      {code: '781701-A101-0022-0001',name: '781701-A101-0022-0001'},
      {code: '781701-A101-0023-0001',name: '781701-A101-0023-0001'}        
  ] 
    await ctx.render('product', obj)
  }

  module.exports = {
    getHandler
  }
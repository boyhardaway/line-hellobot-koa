const getHandler = ctx => {
  let obj = {}
  obj.products = [
    { code: "0000000201458777", name: "Name A" },
    { code: "0000000201458121", name: "Name B" },
    { code: "0000000201365591", name: "Name C" },
    { code: "0000000201322541", name: "Name E" }
  ]
  ctx.body = obj
}

module.exports = {
  getHandler
}

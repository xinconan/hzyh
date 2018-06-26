// 摇号信息
const axios = require('axios')
module.exports = {
  list: async (ctx) => {
    let {page} = ctx.request.query
    page = page || 1
    const list = await axios.get('http://www.hz-notary.com/showYhjgPage?yhjg_page.pageNum=' + page)
    ctx.state = {
      data: list.data && (list.data.dataList || [])
    }
  },
  subList: (ctx) => {
    const {id} = ctx.request.body
    ctx.state = {
      data: id
    }
  }
}

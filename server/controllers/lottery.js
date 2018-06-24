// 摇号信息查询
const axios = require('axios')
module.exports = {
  project: (ctx) => {
    return axios.get('https://xcxactivityapi.house365.com/yaohao/api/index.php?method=project')
      .then(resp => {
        console.log(resp.data)
        ctx.state = {
          code: 0,
          data: resp.data
        }
      })
  }
}

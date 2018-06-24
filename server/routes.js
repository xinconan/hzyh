/**
 * ajax 服务路由集合
 */

const router = require('koa-router')({
  prefix: '/yh'
})
const lottery = require('./controllers/lottery')

// 摇号楼盘
router.get('/project', lottery.project)

module.exports = router

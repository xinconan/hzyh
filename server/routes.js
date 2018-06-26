/**
 * ajax 服务路由集合
 */

const router = require('koa-router')({
  prefix: '/yh'
})
const notice = require('./controllers/notice')
const lottery = require('./controllers/lottery')

// 摇号楼盘
router.get('/project', lottery.project)
// 摇号信息
router.get('/list', notice.list)
// 摇号信息——子列表
router.post('/subList', notice.subList)

module.exports = router

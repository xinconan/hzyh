const request = require('request')
const {saveLotteryInfo, saveContentInfo} = require('./dbService')
// deprecated 此处官方接口已经没有了，只能以爬虫解析的方式获取，暂停本项目
let infoUrl = 'http://www.hz-notary.com/showYhjgPage?yhjg_page.pageNum='
const yhUrl = 'http://www.hz-notary.com/showYhjg'
const detailUrl = 'http://www.hz-notary.com/showYhjgOne'
let totalPage = 10
let currentPage = 1
async function getAll () {
  // 先获取第一页数据，根据返回的页面数量进行抓取
  let first = await getData({url: infoUrl + 1})
  totalPage = first.pageCnt
  savePageList(first.dataList)
  currentPage++
  for (;currentPage < totalPage; currentPage++) {
    let next = await getData({url: infoUrl + currentPage})
    console.log(next.dataList)
    savePageList(next.dataList)
  }
  console.log(first)
}

// 保存每页数据并获取内容列表保存
async function savePageList (list) {
  const pagePromise = list.map(async item => {
    try{
      // 存储每一项
      await saveLotteryInfo(item)
      // 获取详情列表和内容
      let contentList = await getData({
        url: yhUrl,
        method: 'POST',
        form: {'jgsc.id': item.id}
      })
      contentList = contentList.dataList
      for (let i = 0; i < contentList.length; i++) {
        let info = await getData({
          url: detailUrl,
          method: 'POST',
          form: {'jgscContent.id': contentList[i].id}
        })
        info.title = contentList[i].title
        info.createtime = contentList[i].createtime
        await saveContentInfo(info)
        // console.log(info.id + ' done!')
      }
    } catch (e) {
      console.log(e)
      return e
    }
  })

  for (const page of pagePromise) {
    await page
  }
}

// 获取每页列表数据
function getData (option) {
  return new Promise((resolve, reject) => {
    request(option, (error, resp, body) => {
      if (!error && resp.statusCode === 200) {
        body = JSON.parse(body)
        resolve(body)
      } else {
        reject(error)
      }
    })
  })
}

getAll()

// function test() {
//   getData({
//     url: yhUrl,
//     method: 'POST',
//     form: {'jgsc.id': 'f5e835eac71b41c9bd4a425fffdb3949'}
//   }).then(resp => {
//     console.log(resp)
//   })
// }
// test()
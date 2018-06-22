const mysql = require('./mysql')

function saveLotteryInfo(lottery) {
  const {id, title, createtime} = lottery
  return mysql('info').insert({
    id,
    title,
    create_time: createtime
  }).then(()=> ({
    id
  })).catch(e => {
    console.log(e)
  })
}

function saveContentInfo(contentInfo) {
  const {id, content, createtime, title, jgsc_id} = contentInfo
  return mysql('content').insert({
    id,
    content,
    title,
    jgsc_id,
    create_time: createtime
  }).then(()=> ({
    id
  })).catch(e => {
    console.log(e)
  })
}

module.exports = {
  saveLotteryInfo,
  saveContentInfo
}


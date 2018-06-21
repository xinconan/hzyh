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

function saveContentInfo(content) {
  const {id, content, createtime, jgsc_id} = content
  return mysql('info').insert({
    id,
    content,
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


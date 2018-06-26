<template>
  <div >
    <Card v-for="item in list" :key="item.id" :card="item"></Card>
  </div>
</template>

<script>
import config from '@/config'
import Fly from 'flyio/dist/npm/wx'
import Card from '@/components/card'
const fly = new Fly()

export default {
  components: {
    Card
  },

  data () {
    return {
      list: []
    }
  },
  methods: {
    async getList (page, init) {
      if (init) {
        page = 1
      }
      let list = await fly.get(config.list + '?page=' + page)
      list = list.data.data
      console.log(list)
      if (init) {
        this.list = list
      } else {
        this.list = this.data.list.concat(list)
      }
    }
  },

  created () {
    this.getList(1, true)
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>

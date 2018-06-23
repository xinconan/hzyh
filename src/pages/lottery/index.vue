<template>
  <div class="container">
    摇号信息查询
  </div>
</template>

<script>

export default {
  data () {
    return {
      num: ''
    }
  },

  components: {
  },

  methods: {
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
  }
}
</script>

<style scoped>

</style>

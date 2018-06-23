<template>
  <div class="card-wrapper">
    <p class="title">title</p>
    <p class="time">2018-06-22 10:22:22</p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  padding: 10px;

  .title{
    font-size: 16px;
    color: #333;
  }
  .time{
    font-size: 14px;
    color: #999;
  }
}
</style>

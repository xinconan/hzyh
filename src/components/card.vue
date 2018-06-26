<template>
  <div class="card-wrapper">
    <p class="title">{{card.title}}</p>
    <p class="time">{{card.createtime}}</p>
  </div>
</template>

<script>
export default {
  props: ['card']
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

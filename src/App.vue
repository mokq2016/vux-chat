<template>
  <div id="app" style="height:100%">
  	<view-box ref="viewBox">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    </view-box>
  </div>
</template>

<script>
import { ViewBox } from 'vux'
export default {
  name: 'app',
  components:{
  	ViewBox
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
</style>

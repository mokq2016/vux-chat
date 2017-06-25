<template>
	<div>
	<tabbar>
      <tabbar-item :class="{'weui-bar__item_on':$route.path == '/home'}" link="/home">
        <i slot="icon" class="iconfont icon-interactive"></i>
        <span slot="label">微信</span>
      </tabbar-item>
      <tabbar-item :class="{'weui-bar__item_on':$route.path == '/contacts'}" link="/contacts">
        <i slot="icon" class="iconfont icon-addressbook"></i>
        <span slot="label">通讯录</span>
      </tabbar-item>
      <tabbar-item :class="{'weui-bar__item_on':$route.path == '/hello'}" link="/hello">
        <i slot="icon" class="iconfont icon-remind"></i>
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item :class="{'weui-bar__item_on':$route.path == '/hello2'}" link="/hello2">
        <i slot="icon" class="iconfont icon-people"></i>
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
	</div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
	components: {
		Tabbar,
		TabbarItem
	}
}
</script>
<style>
	.weui-tabbar .weui-tabbar__icon > sup{
		top:0px;
	}
</style>
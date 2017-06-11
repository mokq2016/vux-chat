<template>
	 <div style="height:100%;">
	
	  <v-headerbar title="发表11">
	  	<!-- <span slot='left'>微信</span> -->
	  	<div class="item" slot="right">
	  	<a>
	  	<i class="iconfont icon-search"></i>	
	  	</a>
        <i class="iconfont icon-add"></i>
      </div>
	  </v-headerbar>
   <view-box ref="viewBox">
    
   		<ul>
   			<li v-for='item in items'>{{item.name}}</li>
   		</ul>
     
   </view-box>
   <v-footbar></v-footbar>
 </div>
</template>
<script>
import { ViewBox, Tabbar } from 'vux'
export default {
	components: {
		ViewBox,
		Tabbar
	},
	data (){
		return {
			title:'sss',
		items:[
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
			{name:123},
		]
		}	
	}
}
</script>
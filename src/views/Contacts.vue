<template>
	<div style="height:100%" class="contact-div">
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
    
   	<group>
      <cell title="新的朋友" >
      	<i slot="icon" style="color:#FF632B" class="iconfont icon-people"></i>
      </cell>
      <cell title="群聊" >
      	<i slot="icon" style="color:#51DC25" class="iconfont icon-people"></i>
      </cell>
      <cell title="标签" >
      	<i slot="icon" style="color:#244FD5" class="iconfont icon-people"></i>
      	<a @click="showMsg()">1234</a>
      </cell>
      <cell title="公众号" link="/hello">
      	<i slot="icon" style="color:#244FD5" class="iconfont icon-people"></i>
      </cell>
    </group>
     
     <group :title="group.name" v-for="group in groups">
      <cell :title="val.name" v-for="(val,index) in group.items">
      	<i slot="icon" class="iconfont icon-people"></i>
      </cell>
    </group>
   </view-box>
	<v-footbar></v-footbar>
	</div>
</template>
<script>
import { Group, Cell ,ViewBox} from 'vux'

export default {
	components: {
		Group,
		Cell,
		ViewBox
	},
	data (){
		return {
			title:'sss',
			groups:[]

		}	
	},
	methods:{
		showMsg (){
			this.$confirm({title:'你好',content:'<span>123</span>'}).then(function(){
				console.log(13)
			})
			console.log(11)
		}
	},
	created(){
		this.$http("/api/common/getUsers").then((result) => {
			if(result.success){
				this.$data.groups = result.groups;
			}else{
				this.$alert(result.message);
			}
		})
	}
	
}
</script>
<style lang="less" scoped>
	.contact-div .weui-cells .iconfont {
		font-size:1.8rem;
		margin-right:0.4rem;
	}
</style>
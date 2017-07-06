<template>
	<div class="container" id='chatting'>
		<div>
			<v-headerbar title="发表11">
	  	<!-- <span slot='left'>微信</span> -->
	  	<!-- <div class="item" slot="right">
	  	      </div> -->
	  </v-headerbar>
		</div>
		
	  <!-- <view-box ref="viewBox"> -->
	  	 <div class="content" id='content-div'>
	  	 	<div v-for="item in items" :class="{'row-reverse':item.self == true}" class="flex msg-container-div" style='width:100%'>
	  	 		<div>
	  	 			{{item.name}}
	  	 		</div>
	  	 		<div class='msg-div' style='width:80%'>{{item.msg}}</div>
	  	 	</div>
	  	 </div>
	 <!--  </view-box> -->
	  <div class='foot-div'>
	  	<div class="foot-operate">
	  	<span>
	  		<input type='text' v-model='msg'/>
	  	</span>
	  		
	  		<x-button mini action-type='button' type="primary" @click.native='sendMsg()'>发送</x-button>
	  	</div>
	  </div>
	</div>
</template>
<script>
	import { Group ,ViewBox ,XButton,XInput } from 'vux'
	export default {
		components:{
			Group,
			ViewBox,
			XButton,
			XInput
		},
		data (){
			return {
				msg: '',
				items: []	
			}
		},
		methods:{
			sendMsg (){
				let postData = {'msg':this.$data.msg,
				'name':this.$store.state.user.userName
				};
				socket.emit('postMsg', postData);
				this.$data.items.push(Object.assign(postData,{'self':true}));
				this.msg = '';
				this.scollerBottom();
				
			},
			scollerBottom() {
				let contentDiv = document.querySelector("#content-div");
				console.log(contentDiv.scrollHeight);
				contentDiv.scrollTop = contentDiv.scrollHeight;
			}
		},
		mounted (){
			socket.emit('online', this.$store.state.user.userName);
			socket.on('online',(name) =>{
				this.$toast(name+" 上线了！");	
			})

			socket.on('receiveMsg',(data) =>{
				this.$data.items.push(data);
			})

		}
	}
</script>
<style lang="less">

	#chatting.container{
		display: flex;
		flex-direction:column;
		height: 100vh;
		margin-bottom: -50px;
		.foot-div{
			align-self:flex-end;
			background-color: #fff;
			border-top: 1px solid #ccc;
			width: 100%;
			/* position: fixed;
			bottom: 0; */
			.foot-operate {
				text-align: right;
				margin: 0.5rem;
				span {
					height: 1.9rem;
					display: inline-block;
					border-bottom: 1px solid #ccc;
					width: 68%;
					input {
						outline: none;
						width: 100%;
						-webkit-appearance:none;
						height: 1.8rem;
						border: none;
				}
				}
				
			}
		}
		.content{
			flex:1;
			padding: 0 0.4rem 1rem 0.4rem;
			overflow: auto;
			.msg-container-div {
				margin-top: 1rem;
				.msg-div {
				/* border:1px solid #ccc; */
				padding: 0.4rem;
				background-color: #fff;
				border-radius: 0.5rem;
				word-break:break-word;
				}
			}
			.row-reverse {
				flex-direction:row-reverse;
				.msg-div {
					background-color: #60F072;
				}
			}
			
		}
		.weui-tab__panel{
		padding-bottom: 0!important;
	}
	}
	
</style>
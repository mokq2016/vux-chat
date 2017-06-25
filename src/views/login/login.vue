<template>
	<div class="container">
		<div class="bg-div"></div>
		<div class="content">
			<div class='login-div'>
		<group>
    	<x-input label-width='4rem'  placeholder="请输入用户名" 
    	v-validate ="'required'"
    	 data-vv-name='用户名'
    	v-model="userName">
    		<i slot="label" class="iconfont icon-people"></i>

    	</x-input>
    	<span v-show="errors2.has('用户名') && submitted" class="errors-tip is-danger">{{ errors2.first('用户名') }}</span>
    	<x-input label-width='4rem'  :type='inpType'
    	v-validate ="'required'"
		data-vv-name='密码' 
    	 placeholder="请输入密码" v-model="passWord">
    	<i slot="label" class="iconfont icon-lock"></i>	
    		 <i slot="right" class="iconfont icon-attention" @click='changeInp()'></i>
    	</x-input>
    	<span v-show="errors2.has('密码') && submitted" class="errors-tip is-danger">{{ errors2.first('密码') }}</span>
  	</group>
  	<x-button type="primary"  class='w80 reg-btn' action-type='button' @click.native='login()'>登录</x-button>
	</div>
		</div>
	
	</div>
</template>
<script>
import { XInput, Group ,XButton } from 'vux'

export default {
	components:{
		XInput,
		Group,
		XButton 
	},
	data (){
		return {
			inpType:'password',
			userName:'',
			passWord:'',
			email:'',
			submitted:false
		}
	},
	methods:{
		changeInp (){
			if(this.inpType == 'password'){
				this.inpType = 'text';	
			}else{
				this.inpType = 'password'
			}
		},
		login (){
			if(this.$formValidate(this.fields)){
				let param = {
					userName:this.userName,
					password:this.password
				}	
				this.$http('/api/login/login',param).then((result) => {
				if(result.success){
					this.$toast('登录成功！');
					this.$router.replace('/home');	
				}else{
					this.$alert(result.message);
					this.$router.replace('/home');	
				}
			})
			}else{
				this.submitted = true;	
			}
			
		}
	}
}
</script>
<style lang="less">
	.bg-div {
	/* background-color:#000; */
	position: absolute;
    z-index: -3;
    top: 0;
    left: 0;
    width: 100%;
    height:100vh;
   /*  opacity:0.3;  */
    background: url('../../img/login_bg.jpg');
    background-size:100% 100%;

}
.content{
	position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    color:white;
    height:100vh;
    background: rgba(0, 0, 0, 0.5);
    .login-div{
	width:96%;
	margin: 10rem auto 0;
	border-radius:4rem;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	.iconfont {
		font-size:1.6rem;
		color:white;
		
	}
	.weui-icon{
		color: #fff
	}
	.icon-people,.icon-lock {
		margin-right:1rem;
	}
	.weui-cells.vux-no-group-title{
		background-color: rgba(255, 255, 255,0.4);
	}
	input::-webkit-input-placeholder{
    color: #fff;opacity:1;
}
}
}

.reg-btn {
	margin-top:1rem;
}
</style>
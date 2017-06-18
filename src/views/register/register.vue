<template>
	<div class='container-div'>
	<div class="bg-div"></div>
	<div style='text-align:center;padding-top:3rem;'>
		<img src='../../img/1.jpg' style='width:5rem;height:5rem;border-radius:50%'/>
		<h4>深圳国税</h4>
	</div>
	<div class='register-div'>
	<group>
    	<x-input label-width='4rem'  placeholder="请输入用户名" 
    	v-validate ="'required|idCard'"
    	initial="off" data-vv-name='用户名'
    	v-model="userName">
    		<i slot="label" class="iconfont icon-people"></i>

    	</x-input>
    	<span v-show="errors2.has('用户名') && submitted" class="errors-tip is-danger">{{ errors2.first('用户名') }}</span>
    	<x-input label-width='4rem'  :type='inpType'
		data-vv-name='密码'
    	 placeholder="请输入密码" v-model="passWord">
    	<i slot="label" class="iconfont icon-lock"></i>	
    		 <i slot="right" class="iconfont icon-attention" @click='changeInp()'></i>
    	</x-input>
  	</group>
	</div>
  	<x-button type="primary"  class='w80 reg-btn' action-type='button' @click.native='submit2()'>注册</x-button>
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
	methods:{
		changeInp (){
			if(this.inpType == 'password'){
				this.inpType = 'text';	
			}else{
				this.inpType = 'password'
			}
		},
		submit2 (){
			
			if(this.$formValidate(this.fields)){

			}else{
				this.submitted = true;	
			}
			let param = {
				userName:this.userName,
				password:this.password
			}
			this.$http('/api/news/1',param).then((result) => {
				if(result){
					this.$toast('注册成功！');	
				}else{
					this.$toast('注册失败啦...');
				}
			})
		},
		valiUserName (){
			if(this.userName == '123'){
				return {valid:false, msg:'用户名不能为空！'}
			}else{
				return {valid:true}
			}
		}

	},
	data (){
		return{
			inpType:'password',
			userName:'',
			passWord:'',
			email:'',
			submitted:false
		}
	}
}
</script>
<style lang='less' scoped>
.bg-div {
	/* background-color:#000; */
	position: absolute;
    z-index: -3;
    top: 0;
    left: 0;
    width: 100%;
    height:100vh;
    opacity:0.6;
	 /* background: linear-gradient(to right, #0099FF, #0025FF); */
	 background: -webkit-linear-gradient(left top, #0099FF , #0025FF); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(bottom right, #0099FF, #0025FF); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(bottom right, #0099FF, #0025FF); /* Firefox 3.6 - 15 */
  background: linear-gradient(to bottom right, #0099FF , #0025FF); /* 标准的语法 */
}
.register-div{
	width:96%;
	margin:auto;
	border-radius:4rem;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	.iconfont {
		font-size:1.6rem;
		color:#DAD3C6;
		
	}
	.icon-people,.icon-lock {
		margin-right:1rem;
	}
}
.reg-btn {
	margin-top:1rem;
}

</style>
import Vue from 'vue'
import { ToastPlugin, AlertPlugin,ConfirmPlugin   } from 'vux'
import { Promise } from 'es6-promise';

Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

const Message = {};
Message.install = () => {
	const msg = {
		$toast: config => {
			let def = {
				type:'text',
				text:''
			}
			if(typeof  config  === 'string' || typeof  config  === 'number'){
				Vue.$vux.toast.show({type:'text',text:config})
			}else{
				Vue.$vux.toast.show(Object.assign(def,config))
			}
			
		},
		$alert: config => {
			let def = {
				title:'提示',
				content:'请设置提示内容到content属性',
				buttonText:'确定'
			}
			if(typeof  config  === 'string' || typeof  config  === 'number'){
				Vue.$vux.alert.show(Object.assign(def,{content:config}));
			}else{
				Vue.$vux.alert.show(Object.assign(def,config));
			}
		},
		$confirm: config => {
			let isConfirm = false;
			let def = {
				title:'提示',
				content:'请设置提示内容到content属性',
				confirmText:'确定',
				cancelText:'取消',
				onConfirm:() =>{
					isConfirm = true;
				}
			}
			if(typeof  config  === 'string' || typeof  config  === 'number'){
				Vue.$vux.confirm.show(Object.assign(def,{content:config}));
			}else{
				Vue.$vux.confirm.show(Object.assign(def,config));
			}
			/*return new Promise((resolve,reject) => {
				if(isConfirm){
					resolve();
				}
			})*/
		}


	}
	Object.entries(msg).forEach(([method,fn]) => {
		Vue.prototype[method] = fn;
	})
}
Vue.use(Message)

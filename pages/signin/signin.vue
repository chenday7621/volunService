<template>
	<view class="root">
		<view class="form">
			<van-cell-group>
			  <van-field
			  label="姓名"
			    :value="form.value"
			    placeholder="请输入姓名"
			    border="{{ false }}"
			  />
			  <van-field
			  label="地址"
			    :value="form.value"
			    placeholder="请输入您的家庭地址"
			    border="{{ false }}"
			  />
			 <van-field name="radio" label="角色">
			    <template #input>
			      <van-radio-group :value="radio" direction="horizontal" @change="onChange">
			        <van-radio name="居民">居民</van-radio>
			        <van-radio name="志愿者">志愿者</van-radio>
			      </van-radio-group>
			    </template>
			  </van-field>
			  
			  <van-field
			  label="手机号"
			    :value="form.phone"
			    placeholder="请输入手机号"
				type="number"
				    maxlength="11"
			    border="{{ false }}"
			  />
			  <van-field
			  label="密码"
			    :value="form.pwd"
			    placeholder="请设置8位密码,包含大写字母、小写字母、数字、特殊符号中的三项"
			    border="{{ false }}"
			  />
			  <van-field
			     :value="form.sms"
			     center
			     clearable
			     label="短信验证码"
			     placeholder="请输入短信验证码"
			     border="{{ false }}"
			     use-button-slot
			   >
			     <van-button slot="button" size="small" plain color="#a92c1e">
			       获取验证码
			     </van-button>
			   </van-field>
			</van-cell-group>
		</view>
		<view style="margin: 16px;" class="btn">
		    <van-button round block type="primary" native-type="submit" color="#a92c1e">
		      注册
		    </van-button>
		  </view>
		  <view class="link">
		  	已有账号？去<text @click="goLogin">登录</text>
			<button @click="goLogin">111</button>
		  </view>
	</view>
</template>

<script>
import { ref } from "vue";
	export default {
		data() {
			let isResident=ref(false)
			function onChange(e){
				console.log(e.detail);
				radio.value=e.detail
				if(e.detail=='居民'){
					isResident.value=true
				}else{
					isResident.value=false
				}
			}
			function goLogin(){
				uni.reLaunch({
					url:"/pages/login/login"
				})
			}
			let radio=ref('居民')
			return {
				isResident,
				show:false,
				form:{
					value:'',
				checked:true,
				radio:'1',
				pwd:'',
				phone:'',
				sms:''
				},
				onChange,
				radio,
				goLogin
			};
		}
	}
</script>

<style lang="scss" scoped>
	.root{
		.form{}
		.btn{}
		.link{
			text{
				color:darkgoldenrod;
				
			}
		}
	}
</style>

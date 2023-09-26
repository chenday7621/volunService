<template>
	<view class="root">
		<view class="logo">
			
		</view>
		
		<view class="input">
			<van-form @submit="onSubmit">
			  <van-cell-group inset>
			<van-field
			  v-model="pwd"
			   :type="type1"
			  name="新密码"
			  label="新密码"
			  placeholder="请输入密码"
			  :rules="[{ required: true, message: '请填写密码' }]"
			  
			>
			<template #button>
				<image src="../../../static/hide.png" mode="" v-show="isHide1" @click="changeMode1"></image>
				<image src="../../../static/see.png" mode="" v-show="!isHide1"  @click="changeMode1"></image>
			    </template>
				</van-field>
			<van-field
			  v-model="pwd2"
			  :type="type2"
			  name="确认密码"
			  label="确认密码"
			  placeholder="请输入密码"
			  :rules="[{ required: true, message: '请填写密码' }]"
			  
			>
			<template #button>
				<image src="../../../static/hide.png" mode="" v-show="isHide2"  @click="changeMode2"></image>
				<image src="../../../static/see.png" mode="" v-show="!isHide2"  @click="changeMode2"></image>
			    </template>
				</van-field>
			</van-cell-group>
			<view style="margin: 16px;" class="btn">
			    <van-button round block type="primary" native-type="submit" color="#a92c1e">
			      修改密码
			    </van-button>
			  </view>
			</van-form>
		</view>
	</view>
</template>

<script>
import { ref } from "vue";
	export default {
		data() {
			const onSubmit = (values) => {
			  console.log('submit', values);
			};
			let isHide1=ref(true)
			let isHide2=ref(true)
			let type1=ref('password')
			let type2=ref('password')
			function changeMode1(){
				isHide1.value=isHide1.value?false:true
				type1.value=type1.value=='password'?'text':'password'
			}
			function changeMode2(){
				isHide2.value=isHide2.value?false:true
				type2.value=type2.value=='password'?'text':'password'
			}
			return {
				pwd:"",
				pwd2:"",
				onSubmit,
				isHide1,
				isHide2,
				changeMode1,
				changeMode2,
				type1,
				type2
			};
		}
	}
</script>

<style lang="scss" scoped> 
.root{
	.logo{
		background-color: darkgray;
		width: 100%;
		height: 400rpx;
	}
	image{
		height: 50rpx;
		width: 50rpx;

	}
}
</style>

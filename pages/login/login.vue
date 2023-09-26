<template>
	<view class="root">
		<view class="logo">
		</view>
		<view v-show="isAccount">
			<loginByAccount></loginByAccount>
		</view>
		<view v-show="!isAccount">
			<loginByPhone></loginByPhone>
		</view>
		<view class="footer">
			<view class="">
				还没有账号？去<text @click="goSignin">注册</text>
			</view>
			<view class="">
				<text v-show="isAccount" @click="goAccount">使用验证码登录</text>
				<text v-show="!isAccount" @click="goPwd">使用密码登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { ref } from 'vue';
	export default {
		data() {
			// let isAccount=true
			let isAccount=ref(true)
			const goSignin=()=>{
				console.log(1);
				uni.reLaunch({
					url:"/pages/signin/signin"
				})
			}
			function goAccount(){
				isAccount.value=true
				// isAccount=true
				console.log(isAccount.value);
			}
			function goPwd(){
				isAccount.value=false
				// isAccount=false
				console.log(isAccount);
			}
			 return{
				 isAccount,
				 goPwd,
				 goAccount,
				 goSignin
			 }
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
	.footer{
		margin:10rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;	
		text{
			color:#EA9618;
		}
	}
}
</style>

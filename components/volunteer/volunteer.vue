<template>
	<view class="root">
		<van-image round width="3.5rem" height="3.5rem"
			src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
		<view class="word">
			<view class="name">
				月岛萤
			</view>
			<view class="detail">
				擅长心理咨询、体育服务
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"volunteer",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.root{
	background-color: #f5f5f5;
	margin: 10rpx 25rpx;
	display: flex;
	align-items: center;
	van-image{
		margin: 20rpx;
	}
	.word{
		.name{
			margin: 15rpx 0;
		}
		.detail{
			color: #323233;
			font-size: small;
		}
	}
}
</style>
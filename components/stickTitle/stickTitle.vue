<template>
	<view>
		<view class="title">
			<view class="stick">
			</view>
			<view class="txt">
				{{title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"stickTitle",
		data() {
			return {
				
			};
		},
		props:['title']
	}
</script>

<style lang="scss">
.title {
			display: flex;
			align-items:center;
			margin: 10rpx;
			.stick{
				background-color: #D23228;
				width: 4rpx;
				height: 1rem;
				margin-right: 8rpx;
			}
			.txt{
				color: #D23228;
				font-weight: bold;
			}
		}
</style>
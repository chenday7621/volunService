<template>
	<view>
		<view class="item" v-for="(item,index) in list" :key="index">
			<image :src="item.url" mode="aspectFill"></image>
			<view class="word">
				<view class="title">
					{{item.title}}
				</view>
				<view class="time">
					{{item.time}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			let list=[
				{
					url:"../../../static/bg.jpg",
					title:"甘霖社区服务中心2023年度优秀志愿者公示",
					time:"2023-08-23 14：06：15"
				},
				{
					url:"../../../static/bg.jpg",
					title:"甘霖社区服务中心2023年度优秀志愿者公示",
					time:"2023-08-23 14：06：15"
				},
				{
					url:"../../../static/bg.jpg",
					title:"甘霖社区服务中心2023年度优秀志愿者公示",
					time:"2023-08-23 14：06：15"
				},
				{
					url:"../../../static/bg.jpg",
					title:"甘霖社区服务中心2023年度优秀志愿者公示",
					time:"2023-08-23 14：06：15"
				},
				{
					url:"../../../static/bg.jpg",
					title:"甘霖社区服务中心2023年度优秀志愿者公示",
					time:"2023-08-23 14：06：15"
				},
				{
					url:"../../../static/bg.jpg",
					title:"甘霖社区服务中心2023年度优秀志愿者公示",
					time:"2023-08-23 14：06：15"
				}
			]
			return {
				list
			};
		}
	}
</script>

<style lang="scss" scoped>
.item{
	display: flex;
	align-items: center;
	image{
		width: 340rpx;
		height: 140rpx;
		margin: 15rpx;
	}
	.word{
		height: 130rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.title{
			font-size: smaller;
			font-weight: bolder;
		}
		.time{
			font-size: small;
			color: #7D7E80;
		}
	}
}
</style>

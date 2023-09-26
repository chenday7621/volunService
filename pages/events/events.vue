<template>
	<view class="root">
		<view class="search">
			<van-search
			  :value="value"
			  placeholder="搜索志愿者"
			  :search="onSearch"
			/>
		</view>
		<view class="nav">
			<view class="item" @click="goPointBoard" hover-class="bg-click">
				<image src="../../static/积分排行榜.png" mode="aspectFill"></image>
				积分排行榜
			</view>
			<view class="item" hover-class="bg-click">
				<image src="../../static/优秀志愿者.png" mode="aspectFill"></image>
				优秀志愿者
			</view>
			<view class="item">
				<image src="../../static/服务跟踪.png" mode="aspectFill"></image>
				服务跟踪
			</view>
		</view>
		<view class="claim" hover-class="bg-click">
			<view class="head">
				通知
			</view>
			<view class="title">
				表彰 | 甘霖社区服务中心2023年度优秀志愿优秀志愿优秀志愿
				
			</view>
			<view class="more" @click="goAnnounce">
				<view class="stick">
					</view>
				<view class="txt">
					更多
				</view>
			</view>
		</view>
		<view class="content">
			<stickTitle title="服务技能帅选"></stickTitle>
			<van-tabs>
			  <van-tab v-for="(item,index) in list" :title="item" :key="index">
				  <stickTitle title="为您推荐"></stickTitle>
				  <view class="lists">
				  	<volunteer v-for="item in 10" :key="item"></volunteer>
				  </view>
			  </van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			function onSearch(){
				
			}
			let list=[
				"体育服务",
				"家政服务",
				"沟通能力",
				"技术服务",
				"医疗服务"
				
			]
			function goPointBoard(){
				uni.navigateTo({
					url:"/pages/events/pointBoard/pointBoard"
				})
			}
			function goAnnounce(){
				uni.navigateTo({
					url:"/pages/events/announce/announce"
				})
			}
			return {
				onSearch,
				value:"",
				list,
				goPointBoard,
				goAnnounce
			};
		}
	}
</script>

<style lang="scss" scoped>
.root{
	background-color: #f5f5f5;
	.nav{
		background-color: #ffffff;
		display: flex;
		justify-content: space-evenly;
		margin: 25rpx 0;
		padding: 10rpx;
		.bg-click{
			background-color: #f5f5f5;
		}
		.item{
			display: flex;
			flex-direction: column;
			align-items: center;
			image{
				margin: 15rpx 0;
				width: 80rpx;
				height: 80rpx;
			}
			
		}
	}
	.claim{
		margin: 25rpx 0;
		background-color: #ffffff;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 10rpx;
		.head{
			font-size: smaller;
			color: #D23228;
			font-weight: bold;
		}
		.title{
			width: 500rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
			font-size: small;
		}
		.more{
			display: flex;
			align-items: center;
			.stick{
				background-color: #D23228;
				width: 3rpx;
				height: 1rem;
				margin-right: 8rpx;
			}
			.txt{
				color: #D23228;
				font-weight: bold;
				font-size: smaller;
			}
		}
	}
	.content{
		.lists{
			padding: 10rpx;
			background-color: #ffffff;
		}
	}
}
</style>

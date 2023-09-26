<template>
	<view class="root">
		<view class="search">
			<van-search
			  :value="value"
			  placeholder="搜索"
			  :search="onSearch"
			/>
		</view>
		<view class="content">
			<van-tabs :change="onChange">
			  <van-tab title="我的社区">
				  <view class="lists">
				  	<view v-for="(item,index) in communities" :key="index" class="item" hover-class="bg-click">
				  		<view class="title">
							<image src="../../../static/房子.png" mode="aspectFill"></image>
							{{item.text}}
						</view>
				  		<text class="time">{{item.num}}人</text>
				  						
				  	</view>
				  </view>
				  <view class="btn">
				  	<van-button round block type="primary" @click="go('communityApply')"
				  	color="#a92c1e">
				  	  +申请加入
				  	</van-button>
				  </view>
			  </van-tab>
			  <van-tab title="我的志愿团队">
				  <view class="lists">
				  	<view v-for="(item,index) in teams" :key="index" class="item" hover-class="bg-click" @click="go('teamInfo')">
				  		<view class="title">
							<image src="../../../static/用户.png" mode="aspectFill"></image>
							{{item.text}}
						</view>
				  		<text class="time">{{item.point}}分，{{item.num}}人</text>
				  	</view>
				  </view>
				  <view class="btn">
				  	<view class="row">
				  		<van-button round block type="primary" @click=""
				  		color="#a92c1e">
				  		  加入团队
				  		</van-button>
				  		<van-button round block type="primary" @click="go('createTeam')"
				  		color="#a92c1e">
				  		  创建团队
				  		</van-button>
				  	</view>
				  </view>
			  </van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script>
import { ref } from "vue";
	export default {
		data() {
			function onSearch(){
				
			}
			function onChange(e){
				
			}
			function go(target){
				uni.navigateTo({
					url:`/pages/functions/tissue/${target}/${target}`
				})
			}
			let value=ref('')
			let communities=[
				{
					text:'新北苑社区',
					num:4
				},
				{
					text:'新北苑社区',
					num:4
				}
			]
			let teams=[
				{
					text:'勇往直前',
					point:0,
					num:4
				},
				{
					text:'所向披靡',
					point:50,
					num:10
				}
			]
			return {
				onSearch,
				value,
				onChange,
				communities,
				teams,
				go
			};
		}
	}
</script>

<style lang="scss" scoped>
.root{
	.content{
		margin: 0 20rpx;
		.lists{
			.bg-click{
				background-color: #f5f5f5;
			}
			height: 900rpx;
			overflow: scroll;
			.item{
				font-size: smaller;
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #EBEDF0;
				.title{
					display: flex;
					align-items: center;
					margin: 10rpx 20rpx;
					image{
						width: 50rpx;
						height: 50rpx;
						margin-right: 10rpx;
					}
				}
				.time{
					margin: 10rpx;
					color: #7D7E80;
				}
			}
		}
		.btn{
			padding: 20rpx;
			position: fixed;
			bottom: 0;
			width: 90%;
			.row{
				display: flex;
				justify-content: space-between;
				van-button{
					width: 48%;
				}
			}
			
		}
		
	}
}
</style>

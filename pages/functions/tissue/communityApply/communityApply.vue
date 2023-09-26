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
				  <view class="lists">
				  	<view v-for="(item,index) in communities" :key="index" class="item" hover-class="bg-click">
				  		<view class="title">
							<image src="../../../static/房子.png" mode="aspectFill"></image>
							{{item.text}}
						</view>
				  		<view class="time">
				  			<van-button  block type="primary" @click="" size="small"
				  			color="#a92c1e">
				  			  申请加入
				  			</van-button>
				  		</view>
				  						
				  	</view>
				  </view>
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
			let value=ref('')
			let communities=[
				{
					text:'新北苑社区',
					num:4
				},
				{
					text:'新北苑社区',
					num:4
				},
				{
					text:'新北苑社区',
					num:4
				},
				{
					text:'新北苑社区',
					num:4
				}
			]
			return {
				onSearch,
				value,
				onChange,
				communities,
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
		
	}
}
</style>

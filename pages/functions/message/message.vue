<template>
	<view class="root">
		<view class="search">
			<van-search
			  :value="value"
			  placeholder="搜索感兴趣的服务"
			  :search="onSearch"
			/>
		</view>
		<view class="content">
			<van-tabs :change="onChange">
			  <van-tab title="系统消息">
				  <view v-for="(item,index) in msg" :key="index" class="item">
				  	<text class="title">{{item.text}}</text>
				  	<text class="time">{{item.time}}</text>
					
				  </view>
			  </van-tab>
			  <van-tab title="通知公告">
				  
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
			let value=ref('')
			let msg=[
				{
					text:'加入社区已审核通过!',
					time:'2023-08-25'
				},
				{
					text:'新用户注册成功',
					time:'2023-08-24'
				}
			]
			return {
				onSearch,
				value,
				onChange,
				msg
			};
		}
	}
</script>

<style lang="scss" scoped>
.root{
	.content{
		margin: 0 20rpx;
		.item{
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #EBEDF0;
			.title{
				margin: 10rpx 20rpx;
			}
			.time{
				margin: 10rpx;
				color: #7D7E80;
			}
		}
	}
}
</style>

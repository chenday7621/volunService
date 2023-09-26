<template>
	<view>
		<view class="search">
			<van-search
			  :value="value"
			  placeholder="搜索"
			  :search="onSearch"
			/>
		</view>
		<view class="content">
			<van-tabs :change="onChange">
			  <van-tab title="进行中">
				  <view v-for="(item,index) in list1" 
				  :key="index" 
				  class="item"
				  style="background-image:url('../../../static/bg.jpg');"
				  >
				  	
					<van-tag type="danger">进行中</van-tag>
					<view class="title">
				  		{{item.title}}
				  	</view>
				  </view>
			  </van-tab>
			  <van-tab title="已结束">
				  <view v-for="(item,index) in list2" 
				  :key="index" 
				  style="background-image:url('../../../static/bg.jpg');"
				  class="item">
				  	<van-tag>已结束</van-tag>
				  	<view class="title">
				  		{{item.title}}
				  	</view>
				  					
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
			let list1=[
				{
					title:"全心全意社区助老服务队 招募计划",
					tag:'需求'
				},
				{
					title:"全心全意社区助老服务队 招募计划",
					tag:'需求'
				},
				{
					title:"全心全意社区助老服务队 招募计划",
					tag:'需求'
				},
				{
					title:"全心全意社区助老服务队 招募计划",
					tag:'需求'
				},
				{
					title:"全心全意社区助老服务队 招募计划",
					tag:'需求'
				}
			]
			let list2=[
				{
					title:"全心全意社区助老服务队 招募计划",
					tag:'需求'
				},
				{
					title:"全心全意社区助老服务队 招募计划",
					tag:'需求'
				},
				{
					title:"全心全意社区助老服务队 招募计划",
					tag:'需求'
				},
				{
					title:"全心全意社区助老服务队 招募计划",
					tag:'需求'
				},
				{
					title:"全心全意社区助老服务队 招募计划",
					tag:'需求'
				},
				
			]
			return {
				value:'',
				onSearch,
				list1,
				list2
			};
		}
	}
</script>

<style lang="scss" scoped>
.content{
	.item{
		height: 250rpx;
		margin: 20rpx;
		background-color: red;
		background-size: cover;
		background-repeat: no-repeat;
		van-tag{
			position: relative;
			left: 625rpx;
			bottom: 25rpx;
		}
		.title{
			background-color: #0000004D;
			text-align: center;
			position: relative;
			top: 140rpx;
			color: #ffffff;
			font-size: smaller;
			padding: 10rpx;
		}
	}
}
</style>

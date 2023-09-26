<template>
	<view>
		<view class="address">
			<view v-for="(item,index) in list" :key="index" class="item">
				<view class="text">
					<view class="up">
						<view class="name">
							{{item.name}}
						</view>
						<view class="phone">
							{{item.phone}}
						</view>
					</view>
					<view class="down">
						{{item.address}}
					</view>
				</view>
				<view class="operation">
					<image src="../../../static/修改.png" mode="aspectFill" @click="change(item)"></image>
					<image src="../../../static/删除.png" mode="aspectFill"  @click="del(item)"></image>
				</view>
			</view>
		</view>
		<view class="btn">
			<van-button round block type="primary" @click="goAdd"
			color="#a92c1e">
			  +添加地址
			</van-button>
			
		</view>
		<van-dialog id="van-dialog" />
	</view>
</template>

<script>
	import Dialog from '../../../wxcomponents/dist/dialog/dialog.js';
	export default {
		data() {
			let list=[
				{
					name:"张三",
					phone:"12345678909",
					address:"北京市 北京市 丰台区 王佐镇魏各庄路27号中英民族大学"
				},
				{
					name:"张三",
					phone:"12345678909",
					address:"北京市 北京市 丰台区 王佐镇魏各庄路27号中英民族大学"
				}
			]
			function goAdd(){
				uni.navigateTo({
					url:"/pages/functions/addAddress/addAddress"
				})
			}
			function change(target){
				console.log(target);
				uni.navigateTo({
					url:"/pages/functions/changeAddress/changeAddress"
				})
			}
			function del(target){
				console.log(target);
				Dialog.confirm({
				  message: '确定要删除收货地址吗？',
				})
				  .then(() => {
				    // on confirm
					uni.showToast({
						title: '删除成功',
					});
					setTimeout(() => {
						uni.hideToast();
					}, 1500)
				  })
				  .catch(() => {
				    // on cancel
				  });
			}
			return {
				list,
				goAdd,
				change,
				del
			};
		}
	}
</script>

<style lang="scss">
.address{
	height: 1070rpx;
	
	overflow: scroll;
	.item{
		display: flex;
		border-bottom: 1px solid #f5f5f5;
		padding: 10rpx;
		align-items: center;
		.text{
			width: 600rpx;
			margin: 10rpx;
			display: flex;
			flex-direction: column;
			.up{
				margin: 10rpx 0;
				display: flex;
				.name{
					margin-right: 20rpx;
				}
			}
			.down{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
				font-size: small;
				color: #7D7E80;
			}
		}
		.operation{
			display: flex;
			image{
				width: 50rpx;
				height: 50rpx;
				margin: 5rpx;
			}
		}
	}
}
.btn{
	padding: 20rpx;
	position: fixed;
	bottom: 0;
	width: 90%;
}
</style>

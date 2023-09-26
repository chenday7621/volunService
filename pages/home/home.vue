<template>
	<view class="root">
		<view class="myInfo">
			<view class="img">
				<van-image round width="3.5rem" height="3.5rem"
					src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
			</view>
			<view class="txt">
				<view class="basis">
					<text>{{usr.name}}</text>
					<text>{{usr.phone}}</text>
				</view>
				<view class="tags">
					<view v-for="(item,index) in usr.tag" :key="index" class="tag">
						{{item}}
					</view>
				</view>
				<view class="address">
					{{usr.address}}
				</view>
			</view>
			<view class="divide">
				
			</view>
			<view class="code">
				<image src="../../static/HomeNav/会员码.png" mode=""></image>
				<text>会员码</text>
			</view>
		</view>
		<view class="points">
			<stickTitle title="我的积分"></stickTitle>
			<view class="list" @click="goP">
				<view class="serveP">
					<text class="point">2</text>
					<view class="borderLine">
						
					</view>
					<text>
						服务积分
					</text>
				</view>
				<view class="P">
					<text class="point">2</text>
					<view class="borderLine">
						
					</view>
					<text>
						积分
					</text>
				</view>
				<view class="alliP">
					<text class="point">2</text>
					<view class="borderLine">
						
					</view>
					<text>
						联盟积分
					</text>
				</view>
				<view class="divide"></view>
				<view class="pointHistory">
					<image src="../../static/HomeNav/积分记录.png" mode="aspectFill"></image>
					<text>积分记录</text>
				</view>
			</view>
		</view>
		<view class="function">
			<stickTitle title="常用功能"></stickTitle>
			<view class="list">
				<view v-for="(item,index) in options" :key="index" 
				class="item" 
				hover-class="bg-click"
				@click="goFunc(index)"
				>
					<image :src="`../../static/HomeNav/${item}.png`" mode="aspectFill"></image>
					<text>{{item}}</text>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			let usr = {
				name: "张三",
				phone: "12145489822",
				tag: ['家政服务', '法律咨询', '陪伴老人'],
				address: '北京市海淀区紫竹院街道中关村南大街27号中央民族大学'
			}
			let options = {
				"message": "消息中心",
				"tissue": "我的组织",
				"serveList": "服务列表",
				"address": "地址簿",
				"myInfo": "个人信息",
				"record": "兑换记录",
				"identify": "切换身份",
				"serveTime": "服务时间表",
				"changePwd": "修改密码"
			}
			function goFunc(target){
				console.log(target);
				uni.navigateTo({
					url:`/pages/functions/${target}/${target}`
				})
			}
			function goP(){
				uni.navigateTo({
					url:"/pages/points/pointsInfo/pointsInfo"
				})
			}
			return {
				usr,
				options,
				goFunc,
				goP
			};
		}
	}
</script>

<style lang="scss" scoped>
	.root {
		//公共样式
		background-color: #f5f5f5;
		.list{
			background-color: #ffffff;
		}
		//个人信息
		.myInfo{
			background-color: #ffffff;
			margin: 25rpx;
			display: flex;
			// justify-content: center;
			.img{
				padding: 15rpx;
			}
			.txt{
				display: flex;
				flex-direction: column;
				padding: 20rpx;
				width: 350rpx;
				.basis{
					display: flex;
					justify-content: space-evenly;
				}
				.tags{
					display: flex;
					justify-content: space-evenly;
					margin: 10rpx;
					.tag{
						border: 1px solid #DCDEE0;
						border-radius: 50rpx;
						padding: 5rpx;
						font-size: 19rpx;
					}
				}
				.address{
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
					font-size: small;
					color: #7D7E80;
				}
			}
			.divide{
				height: 150rpx;
				width:1rpx;
				margin: 10rpx;
				background-color: #BBBBBB;
			}
			.code{
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 30rpx;
				image{
					height: 70rpx;
					width: 70rpx;
				}
				font-size: 26rpx;
				font-weight: 530;
			}
		}
		//我的积分
		.points{
			margin: 25rpx;
			.list{
				display: flex;
				font-size: 27rpx;
				.serveP,.P,.alliP{
					margin: 8rpx;
					width: 23%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-evenly;
					.point{
						font-weight: bold;
					}
					.borderLine{
						width: 70rpx;
						height: 10rpx;
						background-color: #7D7E80;
						border-radius: 10rpx;
					}
				}
				.divide{
					height: 150rpx;
					margin: 10rpx;
					width:1rpx;
					background-color: #BBBBBB;
				}
				.pointHistory{
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 20rpx;
					image{
						margin: 5rpx;
						width: 70rpx;
						height: 80rpx;
					}
				}
			}
		}
		//常用功能
		.function {
			margin: 25rpx;
			.list {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				flex-wrap: wrap;
				.bg-click{
					background-color: #f5f5f5;
				}
				.item{
					font-size: small;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 33.3%;
					margin: 30rpx 0;
					image{
						width: 80rpx;
						height: 80rpx;
						margin: 10rpx;
					}
					
				}
			}
		}
	}
</style>

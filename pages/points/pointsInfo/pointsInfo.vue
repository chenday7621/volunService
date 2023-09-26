<template>
	<view class="root">
		<view class="content">
			<view @click="goExchange">
				<view class="point">
					<view class="serveP">
						<text>服务积分</text>
						<view>
							<text class="text1">{{num}}</text>
							<text class="text2">分</text>
						</view>
					</view>
					<view class="P">
						<text>积分</text>
						<view>
							<text class="text1">{{num}}</text>
							<text class="text2">分</text>
						</view>
					</view>
					<view class="alliP">
						<text >联盟积分</text>
						<view>
							<text class="text1">{{num}}</text>
							<text class="text2">分</text>
						</view>
					</view>
				</view>
				<view class="footer">
					联盟积分兑换积分
				</view>
			</view>
			<view class="history">
				<stickTitle title="积分记录"></stickTitle>
				<view class="list">
					<view class="item"
					v-for="(item,index) in list"
					:key="index"
					>
						<view>
							<view class="txt">
								{{item.title}}
							</view>
							<view class="time">
								{{item.time}}
							</view>
						</view>
						<view class="point">
							{{item.point}}
						</view>
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
			let list=ref()
			list.value=[
				{
					title:'您的积分大礼包中的2.0积分已到账',
					time:'2023-08-23 14: 06: 15',
					point:'+2分'
				},
				{
					title:'您的积分大礼包中的2.0积分已到账',
					time:'2023-08-23 14: 06: 15',
					point:'+2分'
				}
			]
			function goExchange(){
				uni.navigateTo({
					url:"/pages/points/pointsExchange/pointsExchange"
				})
			}
			return {
				num:2,
				list,
				goExchange
			};
		}
	}
</script>

<style lang="scss" scoped>
.root{
	background-color: #f5f5f5;
	
	.content{
		margin: 25rpx;
		background-color: #ffffff;
		.point{
			display: flex;
			justify-content: space-evenly;
			.serveP,.P,.alliP{
				display: flex;
				flex-direction: column;
				align-items: center;
				.text1{
					font-size: 40rpx;
					font-weight: bold;
					margin: 10rpx;
					color: #D23228;
				}
				.text2{
					font-size: small;
				}
			}
		}
		
		.footer{
			font-size: smaller;
			color: #EA9618;
			display: flex;
			justify-content: flex-end;
			border-bottom: 1px solid #f5f5f5;
			padding: 10rpx;
			margin: 10rpx;
		}
	
		.history{
			.list{
				.item{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20rpx;
					.txt{
						font-weight: bolder;
						font-size: smaller;
					}
					.time{
						color: #7D7E80;
						font-size: small;
					}
					.point{
						color: #33A04B;
						font-size: smaller;
					}
				}
			}
		}
	}
}
</style>

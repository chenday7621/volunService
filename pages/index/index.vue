<template>
	<view class="content">
		<view class="search">
			<van-search
			  :value="value"
			  placeholder="搜索感兴趣的服务"
			  :search="onSearch"
			/>
		</view>
		<view class="news">
			<view class="swiper">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
								:duration="duration">
								<swiper-item>
									<image src="../../static/bg.jpg" mode="widthFix"></image>
								</swiper-item>
								<swiper-item>
									<image src="../../static/bg.jpg" mode="widthFix"></image>
								</swiper-item>
								<swiper-item>
									<image src="../../static/bg.jpg" mode="widthFix"></image>
								</swiper-item>
							</swiper>
			</view>
			123
		</view>
		<uni-section title="密码框" subTitle="指定属性 type=password 使用密码框,右侧会显示眼睛图标" type="line" padding>
					<uni-easyinput type="password" v-model="password" placeholder="请输入密码"></uni-easyinput>
				</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			function test(){
				console.log(1);
			}
			function onSearch(){
				
			}
			return {
				value:'',
				onSearch,
				background: ['color1', 'color2', 'color3'],
				            indicatorDots: true,
				            autoplay: true,
				            interval: 2000,
				            duration: 500
			}
		},
		onLoad() {

		}
	}
</script>

<style scoped>
	  .my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
	    background-color: #39a9ed;
	  }
</style>

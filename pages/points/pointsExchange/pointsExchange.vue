<template>
	<view>
		<view class="input">
			<van-form @submit="onSubmit">
				<van-cell-group inset>
					<van-field label="联盟积分" :value="alliPoint" readonly />
					<van-field
					v-model="number"
					   type="number"
					  name="兑换数量"
					  label="兑换数量"
					  placeholder="请输入要兑换的联盟积分数量"
					  :rules="[{ required: true, message: '请填写数量' }]"
					/>
					<van-field label="等额积分" :value="equalPoint" readonly />
				</van-cell-group>
				<view style="margin: 16px;" class="btn">
					<van-button round block type="primary" native-type="submit" color="#a92c1e">
					  兑换
					</van-button>
				</view>
			</van-form>
		</view>
		<view class="description">
			<view class="title">
				兑换说明
			</view>
			<view class="detail">
				<view>1.当前兑换比率为2，即100联盟积分=200积分</view>
				<view>2.联盟积分兑换成积分胡可在积分商城进行消费</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const onSubmit = (values) => {
			  console.log('submit', values);
			};
			return {
				alliPoint:2,
				equalPoint:4,
				onSubmit,
				number:0
			};
		}
	}
</script>

<style lang="scss" scoped>
.description{
	font-size: smaller;
	.title{
		color: #EA9618;
		margin: 25rpx;
	}
	.detail{
		color: #7D7E80;
		margin: 25rpx;
	}
}
</style>

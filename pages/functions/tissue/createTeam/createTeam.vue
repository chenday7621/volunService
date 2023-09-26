<template>
	<view>
		<view class="input">
			<van-form @submit="onSubmit">
				<van-cell-group inset>
					<van-field
					v-model="name"
					  name="名称"
					  label="名称"
					  placeholder="请给团队起个名称"
					  :rules="[{ required: true, message: '请填写团队名称' }]"
					/>
				</van-cell-group>
				<view style="margin: 16px;" class="btn">
					<van-button round block type="primary" native-type="submit" color="#a92c1e">
					  保存
					</van-button>
				</view>
			</van-form>
		</view>
		<view class="description">
			<view class="title">
				团队说明
			</view>
			<view class="detail">
				<view>1.积分是所有成员积分总和</view>
				<view>2.加入该团队后，您可以选择将个人积分转移到团队</view>
				<view>3.团队积分可以用来兑换团队专属商品</view>
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
				name:""
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

<template>
	<view>
		<van-form @submit="onSubmit">
			<van-cell-group inset>
				<van-field v-model="address.name" name="联系人" label="联系人" placeholder="请输入联系人的姓名"
					:rules="[{ required: true, message: '请填写姓名' }]" />
				<van-field v-model="address.phone" name="手机号" label="手机号" placeholder="请输入收货手机号"
					:rules="[{ required: true, message: '请填写手机号' }]" />
				<van-field v-model="address.detail" name="具体地址" label="具体地址" placeholder="例:B座6楼606室" />
				<van-checkbox v-model="address.isDefault" class="checkbox">设为默认地址</van-checkbox>
			</van-cell-group>
			<view style="margin: 16px;" class="btn">
				<van-button round block type="primary" native-type="submit" color="#a92c1e" @click="onSubmit">
					保存
				</van-button>
			</view>
		</van-form>

	</view>
</template>

<script>
	import {
		ref
	} from 'vue';
	export default {
		data() {
			const onSubmit = (values) => {
				console.log('submit', values);
				setTimeout(() => {
					uni.showToast({
						title: '添加成功',
					});
					setTimeout(() => {
						uni.hideToast();
						//关闭提示后跳转
						uni.redirectTo({
							url: "/pages/functions/address/address"
						})
					}, 1500)
				}, 0);
			};
			let address = ref({
				name: "",
				phone: "",
				area: "",
				detail: "",
				isDefault: false
			})
			return {
				onSubmit,
				address
			};
		}
	}
</script>

<style lang="scss">
	.checkbox {
		margin: 10rpx;
	}
</style>

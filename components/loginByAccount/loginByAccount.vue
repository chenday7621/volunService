<template>
	<view>
		<van-form @submit="onSubmit">
		  <van-cell-group inset>
		    <van-field
		      v-model="username"
		      name="账号"
		      label="账号"
		      placeholder="请输入账号"
		      :rules="[{ required: true, message: '请填写账号' }]"
		    />
		    <van-field
		      v-model="password"
		      type="password"
		      name="密码"
		      label="密码"
		      placeholder="请输入密码"
		      :rules="[{ required: true, message: '请填写密码' }]"
		    />
		  </van-cell-group>
		  <view style="margin: 16px;" class="btn">
		      <van-button round block type="primary" native-type="submit" color="#a92c1e">
		        登录
		      </van-button>
		    </view>
		</van-form>
	</view>
</template>

<script>
	import { ref } from "vue";
	export default {
		name:"loginByAccount",
		data() {
			const username = ref('');
			    const password = ref('');
			    const onSubmit = (values) => {
			      console.log('submit', values);
			    };
			return {
				 username,
				      password,
				      onSubmit,
			};
		}
	}
</script>

<style lang="scss">

</style>
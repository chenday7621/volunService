<template>
	<view>
		<van-cell-group>
		<van-field
		  label="手机号"
		    :value="phone"
		    placeholder="请输入手机号"
			type="number"
			    maxlength="11"
		    border="{{ false }}"
		  />
		  <van-field
		     :value="sms"
		     center
		     clearable
		     label="验证码"
		     placeholder="请输入6位验证码"
		     border="{{ false }}"
		     use-button-slot
		   >
		     <van-button slot="button" size="small" plain color="#a92c1e">
		       获取验证码
		     </van-button>
		   </van-field>
		</van-cell-group>
	</view>
</template>

<script>
import { ref } from "vue";
	export default {
		name:"loginByPhone",
		data() {
			let phone=ref('')
			let sms=ref('')
			return {
				phone,
				sms
			};
		}
	}
</script>

<style lang="scss">

</style>
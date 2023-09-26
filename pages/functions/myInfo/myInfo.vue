<template>
	<view>
		<van-cell-group inset>
		  <van-field label="姓名" :value="name" readonly />
		  <van-field label="角色" :value="role" readonly />
		  <van-field label="手机号" :value="phone" readonly />
		  
		  <van-field label="电子卡" :value="card" readonly />
		</van-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"张三",
				role:"志愿者",
				phone:"2561270278",
				card:"1FA5G14B5",
				isResident:false
			};
		}
	}
</script>

<style lang="scss" scoped>

</style>

<template>
	<view>
		<view class="search">
			<van-search
			  :value="value"
			  placeholder="搜索志愿者"
			  :search="onSearch"
			/>
		</view>
		<stickTitle title="为您推荐"></stickTitle>
						  <volunteer v-for="item in 10" :key="item"></volunteer>
		
	</view>
</template>

<script>
	export default {
		data() {
			function onSearch(){
				
			}
			return {
				onSearch,
				value:"",
			};
		}
	}
</script>

<style lang="scss">

</style>

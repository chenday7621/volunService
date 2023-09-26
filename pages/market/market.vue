<template>
	<view>
		<view class="top">
			
		</view>
		<view class="search">
			<van-search
			  :value="value"
			  placeholder="输入关键词搜索"
			  :search="onSearch"
			/>
		</view>
		<view class="content">
			<stickTitle title="种类筛选"></stickTitle>
			<van-tabs>
			  <van-tab v-for="(item,index) in list" :title="item" :key="index">
				  <view class="lists">
				  	</view>
			  </van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script>
	import { ref } from "vue";
	export default {
		data() {
			function onSearch(){
				
			}
			let value=ref('')
			let list=[
				"全部",
				"食品精选",
				"日用百货",
				"家居便民",
				"团队专属"
				
			]
			return {
				onSearch,
				value,
				list
			};
		}
	}
</script>

<style lang="scss" scoped>

</style>

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			if (true) {
			            uni.switchTab({
			                url: 'pages/index/index'
			            })
			        } else {
			            uni.reLaunch({
			                // url: 'pages/login/login'
			                url: 'pages/signin/signin'
			            })
			        }
			},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "/wxcomponents/dist/common/index.wxss"
	/*每个页面公共css */
</style>

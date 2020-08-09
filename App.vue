<script>
	export default {
		onLaunch: function() {
			console.log('App Launch', '当uni-app 初始化完成时触发（全局只触发一次）')
			// #ifdef H5
			console.log('web')
			// #endif
			
			// #ifdef APP-PLUS
			console.log('app')
			// #endif
			
			// #ifdef MP
			console.log('小程序')
			// #endif
			
			// 检查更新
			const updateManager = uni.getUpdateManager();
			updateManager.onCheckForUpdate(function(res) {
				// 请求完新版本信息的回调
				console.log(res.hasUpdate);
				
			});
			updateManager.onUpdateReady(function(res) {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
					}
				});

			});
			updateManager.onUpdateFailed(function(res) {
				// 新的版本下载失败
			});

		},
		onShow: function() {
			console.log('App Show', '当uni-app 初始化完成时触发（全局只触发一次）')
		},
		onHide: function() {
			console.log('App Hide', '当 uni-app 从前台进入后台')
		},
		onError(e) {
			console.log('报错', e)
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
</style>

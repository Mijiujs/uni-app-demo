<template>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		beforeCreate() {
			console.log('beforeCreate')
		},
		created() {
			console.log('created')
		},
		beforeMount() {
			console.log('beforeMount')
		},
		onLoad(option){
			console.log('onLoad')
			this.deviceId=option.deviceId
		},
		onShow(){
			console.log('onShow')
			this.active=0
		},
		mounted() {
			console.log('mounted')
			this.active=1
		},
		onReady(){
			console.log('onReady')
			this.active=2
		},
		beforeUpdate() {
			console.log('beforeUpdate')
		},
		updated() {
			console.log('updated')
		},
		onUnload(){
			console.log('onUnload')
		},
		beforeDestroy(){
			console.log('beforeDestroy')
		},
		destroyed() {
			console.log('destroyed')
		},
		onHide(){
			console.log('onHide')
		},
	}
</script>

<style>
</style>

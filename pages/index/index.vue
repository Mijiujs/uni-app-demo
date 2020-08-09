<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}} {{userInfo.name}}</text>
		</view>
		<view class="text-area">
			<text class="title">{{url}}</text>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters
	} from 'vuex'
	import api from '@/config/api.js'
	import areaList from '@/config/area.js'
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';
	export default {
		data() {
			return {
				title: 'Hello',
				url: api.login,
				areaList: areaList,
			}
		},
		computed: {
			...mapState(['userInfo']),
		},
		onLoad() {},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

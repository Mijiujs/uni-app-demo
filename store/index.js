import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo:{
			name:'lpr'
		}
		// token: uni.getStorageSync('token') == '' ? null : uni.getStorageSync('token'),
	},
	getters: {},
	mutations: {
		login(state, n) {
			state.token = n;
			uni.setStorageSync('token', n);
		},
	},
	actions: {},
	modules: {}
})

export default store

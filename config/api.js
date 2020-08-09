// const baseurl = 'http://home.jinxin.live:9281'
const baseurl = 'http://192.168.1.113:8080'
const api = {
	login:'/login'
}
const exportAPI = new Proxy(api,{
	get(target, propKey, receiver){
		return `${baseurl}${target[propKey]}`
	}
})

export default exportAPI
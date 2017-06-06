import radio from './radio'
import theme from './radio.theme'

radio.install = function(Vue) {

	if(!radio.name) {

		throw Error('The name attribute is required')
	}

	//注册组件
	Vue.component(radio.name, radio)
	//注册样式文件
	Vue._registerStyle(theme)
}

export default radio

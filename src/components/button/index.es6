import button from './button'
import theme from './button.theme'

button.install = function(Vue) {

	if(!button.name) {

		throw Error('The name attribute is required')
	}

	//注册组件
	Vue.component(button.name, button)
	//注册样式文件
	Vue._registerStyle(theme)
}

export default button

/**
 * vc入口文件
 * 
 * @module
 * @author hahacoo zhangdi525@163.com
 */
import locale from './locale'
import button from './components/button'
import buttonGroup from './components/buttonGroup'
import icon from './components/icon'

function install(Vue) {

	locale(Vue)
}

if(typeof window !== 'undefined' && window.Vue) {

	install(window.Vue)
}

export default {

	install
}

export {

	button,
	buttonGroup,
	icon
}

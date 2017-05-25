/**
 * vc入口文件
 * 
 * @module
 * @author hahacoo zhangdi525@163.com
 */
import locale from './locale'
import icon from './components/icon'
import button from './components/button'
import buttonGroup from './components/buttonGroup'
import radio from './components/radio'
import radioGroup from './components/radioGroup'
import checkbox from './components/checkbox'
import checkboxGroup from './components/checkboxGroup'

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
	icon,
	radio,
	radioGroup,
	checkbox,
	checkboxGroup
}

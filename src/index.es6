/**
 * vc入口文件
 * 
 * @module
 * @author hahacoo zhangdi525@163.com
 */
import localeInstall from './locale'
import themeInstall from './theme/index'
import defaultTheme from './theme/theme'

import icon from './components/icon/index'
import button from './components/button/index'
import buttonGroup from './components/buttonGroup/index'
import radio from './components/radio/index'
import radioGroup from './components/radioGroup/index'
import checkbox from './components/checkbox/index'
import checkboxGroup from './components/checkboxGroup/index'
import input from './components/input/index'

const components = [

	icon,
	button,
	buttonGroup,
	radio,
	radioGroup,
	checkbox,
	checkboxGroup,
	input
]

function install(Vue) {

	//国际化安装
	localeInstall(Vue)
	//主题安装
	themeInstall(Vue)
	//组件安装
	components.forEach(component => {

		component.install(Vue)
	})

	//设置默认主题
	Vue.config.vcTheme = {

		default: defaultTheme
	}
	Vue.vcSkin('default')
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
	checkboxGroup,
	input
}

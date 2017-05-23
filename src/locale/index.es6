/**
 * vc国际化支持模块
 *
 * @function locale
 * @author hahacoo zhangdi525@163.com
 */
import defaultLang from './lang/zh-CN'

import { VC_NUM_ZERO } from 'vconstant'

const pathCache = Object.create(null)

let localeVM

function install(Vue, {

	locale = 'zh-CN'
} = {}) {

	if(!localeVM) {

		localeVM = new Vue({

			data: {

				lang: locale,
				locales: {

					'zh-CN': defaultLang
				}
			},

			computed: {

				localeLang() {

					return this.locales[this.lang]
				}
			}
		})
	}

	//设置初始化语言
	Object.defineProperty(Vue.config, 'vcLang', {

		enumerable: true,
		configurable: true,
		get: () => localeVM.lang,
		set: val => { 

			localeVM.lang = val
		}
	})

	Vue.vcLocale = function(lang, locales) {

		localeVM.locales[lang] = locales
	}
}

function parsePath(path) {

	let paths = pathCache[path]

	if(!paths) {

		paths = path.split('.').filter(item => item !== '')
		pathCache[path] = paths
	}

	return paths
}

function getValue(path) {

	let paths = parsePath(path),
		localeLang = localeVM.localeLang

	if(!localeLang) {

		return path
	} 

	const len = paths.length

	if(len === VC_NUM_ZERO) {

		return null
	}

	let result = localeLang

	let i = VC_NUM_ZERO

	while(i < len) {

		const value = result[paths[i++]]

		if(value === undefined) {

			return result = path
		}

		result = value
	}

	return result
}

function $t(path) {

	return getValue(path)
}

export default install

export {

	$t
}

/**
 * vc主题支持模块
 *
 * @author hahacoo zhangdi525@163.com
 */
import Color from 'color'
import { VC_THEME_TYPE, VC_THEME_STATE, VC_THEME_PROP } from 'vconstant'
import { typeis, extend } from 'vcutils'
import defaultTheme from './theme'

/**
 * 动态创建style标签
 * @param  {[type]} style [description]
 * @param  {[type]} theme [description]
 * @return {[type]}       [description]
 */
function createThemeStyleElement(style, theme) {

	let head = document.head
	let styleId = 'vc-theme-' + theme
	let styleElement = head.querySelector('#' + styleId)

	if (!styleElement) {

		let styleTag = document.createElement('style')

		style = style.replace(/THEME_NAME/g, styleId)

		styleTag.type = 'text/css'
		styleTag.id = styleId
		styleTag.textContent = style

		head.appendChild(styleTag)
	} else {

		styleElement.textContent = style
	}
}

/**
 * 解析主题文件
 * @param  {[type]} style [description]
 * @param  {[type]} theme [description]
 * @return {[type]}       [description]
 */
function parseStyle(style, theme) {

	let themeType = VC_THEME_TYPE.join('|'),
		themeState = VC_THEME_STATE.join('|'),
		themeProp = VC_THEME_PROP.join('|')

	let regexp = new RegExp(`vc_(${themeType})_?(${themeState})?_(${themeProp})`, 'g')

	style = style.replace(regexp, (match, type, state, prop) => {

		if(!state) {

			//默认状态
			return theme[type][prop]
		}

		return theme[type][state][prop]
		
	})

	return style
}

/**
 * 解析样式
 *
 * theme: {
 * 
 *    default: {
 *    
 *    	 color: '',
 *    	 background: '',
 *    	 border: ''
 *    },
 *
 *    primary: {
 *
 * 		 color: '',
 *    	 background: '',
 *    	 border: ''
 *    }
 *
 *    ...
 * }
 * @param  {[type]} theme [description]
 * @return {[type]}       [description]
 */
function calcTheme(theme) {

	for(let key in theme) {

		if(theme.hasOwnProperty(key)) {

			let style = theme[key]

			if(typeis(style) !== 'object') {

				continue
			}

			let	color = style.color,
				background = style.background,
				border = style.border

			style.focus = {

				color: color,
				background: Color(background).darken(0.1).hex(),
				border: Color(border).darken(0.25).hex()
			}

			style.hover = style.active = {

				color: color,
				background: Color(background).darken(0.1).hex(),
				border: Color(border).darken(0.12).hex()
			}

			style.darken = {

				color: Color(color).lighten(0.05).hex(),
				background: Color(background).darken(0.15).hex(),
				border: Color(border).darken(0.25).hex()
			}

			style.disabled = {

				color: color,
				background: background,
				border: border
			}
		}
	}

	return theme
}

let skinVM

export default function install(Vue) {

	if(!skinVM) {

		skinVM = new Vue({

			data: {

				styles: [],
				skin: '',
				theme: {}
			},

			watch: {

				skin(val) {

					if(!this.theme[val]) {

						console.warn(`${val} theme is not existed！`)
					}

					this.changeCurrentTheme(val)
				},

				theme(themes) {

					this.registerThemes(themes)
				}
			},

			methods: {

				changeCurrentTheme(skin) {

					document.body.classList.remove(`vc-theme-${this.skin}`)
					document.body.classList.add(`vc-theme-${skin}`)
				},

				registerThemes(themes) {

					for(let theme in themes) {

						if(themes.hasOwnProperty(theme)) {

							createThemeStyleElement(parseStyle(this.styles.join('\n'), calcTheme(themes[theme])), theme)
						}
					}
				}
			}
		})
	}

	//配置主题
	Object.defineProperty(Vue.config, 'vcTheme', {

		enumerable: true,
		configurable: true,
		get: () => skinVM.theme,
		set: val => { 

			if(typeis(val) !== 'object') {

				console.warn('Theme type error')

				skinVM.theme = extend({}, { 'default': defaultTheme })
			} else {

				for(let theme in val) {

					if(val.hasOwnProperty(theme)) {

						val[theme] = extend({}, defaultTheme, val[theme])
					}
				}

				skinVM.theme = val
			}

			
		}
	})

	//设置皮肤
	Vue.vcSkin = function(skin) {

		skinVM.skin = skin
	}

	//组件内部注册主题样式
	Vue._registerStyle = function(style) {

		skinVM.styles.push(style)
	}

}

import input from './input'
import theme from './input.theme'

input.install = function(Vue) {

	if(!input.name) {

		throw Error('The name attribute is required')
	}

	Vue.component(input.name, input)
	Vue._registerStyle(theme)
}

export default input

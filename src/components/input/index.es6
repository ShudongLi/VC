import input from './input'

input.install = function(Vue) {

	if(!input.name) {

		throw Error('The name attribute is required')
	}

	Vue.component(input.name, input)
}

export default input

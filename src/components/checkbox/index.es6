import checkbox from './checkbox'

checkbox.install = function(Vue) {

	if(!checkbox.name) {

		throw Error('The name attribute is required')
	}

	Vue.component(checkbox.name, checkbox)
}

export default checkbox

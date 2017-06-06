import buttonGroup from './buttonGroup'

buttonGroup.install = function(Vue) {

	if(!buttonGroup.name) {

		throw Error('The name attribute is required')
	}

	Vue.component(buttonGroup.name, buttonGroup)
}

export default buttonGroup

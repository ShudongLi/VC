import checkboxGroup from './checkboxGroup'

checkboxGroup.install = function(Vue) {

	if(!checkboxGroup.name) {

		throw Error('The name attribute is required')
	}

	Vue.component(checkboxGroup, checkboxGroup)
}

export default checkboxGroup

/**
 * 工具库
 *
 * @module
 * @author hahacoo zhangdi525@163.com
 */
import { VC_NAMESPACE, VC_CLASS_SEPARATOR } from 'vconstant'

let rawToString = Object.prototype.toString

function getClosestVueParent($parent, cssClass) {

	if(!$parent || !$parent.$el) {

		return false
	}

	if($parent._uid == 0) {

		return false
	}

	if($parent.$el.classList.contains(cssClass)) {

		return $parent
	}

	return getClosestVueParent($parent.$parent, cssClass)
}

function getClassPrefix(type) {

	return VC_NAMESPACE + VC_CLASS_SEPARATOR + type + VC_CLASS_SEPARATOR
}

function typeis(target) {

	let isAny = /^\[object (\w+)\]$/,
        result = isAny.exec(rawToString.call(target))

    return result ? result[1].toLowerCase() : 'unknown'
}

function contains(source, target) {

	if(!source || !target) {

		return false
	}
	
	if(typeis(source) === 'array') {

		let len = source.length,
			i = 0

		while(i < len) {

			if(source[i] === target) {

				return true
			}

			i++
		}

		return false
	}

	if(typeis(source) === 'object') {

		for( let key in source) {

			if(source.hasOwnProperty(key) && source[key] == target) {

				return true
			}
		}

		return false
	}

}

export { default as adapter } from './adapter'

export { default as calcTextareaHeight } from './calcTextareaHeight'

export {

	getClosestVueParent,
	getClassPrefix,
	typeis,
	contains
}

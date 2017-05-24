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

export { default as adapter } from './adapter'

export {

	getClosestVueParent,
	getClassPrefix,
	typeis
}

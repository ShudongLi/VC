const DOC_PREFIX = 'doc'

let rawToString = Object.prototype.toString

function _mixins(docName) {

	return {

		data() {

			return {

				dname: docName
			}
		},

		ready() {

			this.parentContent = getClosestVueParent(this.$parent, 'skyeye-content')

			if(!this.parentContent) {

				throw new Error('必须插入到正确组件')
			}

			this.parentContent.registryDocs(this.dname)
		}
	}
}

function mixinDocs(docs) {

	let result = Object.assign({}, docs)
	
	let docItems = Object.keys(result),
		i = docItems.length

	while(i) {

		let doc = docItems[--i]

		Object.assign(result[doc], {

			mixins: [_mixins(doc)]
		})
	}

	return result
}

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

function type(target) {

	let isAny = /^\[object (\w+)\]$/,
        result = isAny.exec(rawToString.call(target))

    return result ? result[1].toLowerCase() : 'unknown'
}

function formatterPath() {
	
}

export {

	getClosestVueParent,
	mixinDocs,
	type
}

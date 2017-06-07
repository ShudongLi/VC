/**
 * 兼容模块
 * 尽可能解决1.x和2.x的兼容性问题
 */
export default function install(Vue) {

	const version = (Vue.version && Number(Vue.version.split('.')[0])) || -1

	if(version < 2) {

		Vue.mixin({

			created() {

				//兼容2.x $slots属性
				Object.defineProperty(this, '$slots', {

					get() {

						return this._slotContents || {}
					}
				})
			}
		})
	}
}

<template>

	<div class="vc-input" :class="inputClass">
		
		<template v-if="!textarea">
			<label class="vc-input-prepend"
				:for="name"
				v-if="$slots.prepend">
				<slot name="prepend"></slot>
			</label>
			<vc-icon class="vc-input-icon" 
				:vc-name="vcIcon" 
				@click.native="handleClick"
				v-if="vcIcon" 
			></vc-icon>
			<input :id="name" 
				type="text" 
				class="vc-input-original"
				:style="originalStyle" 
				:placeholder="placeholder" 
				:disabled="disabled" 
				:readonly="readonly" 
				v-model="vcModel"
			>
			<label class="vc-input-append"
				:for="name"
				v-if="$slots.append">
				<slot name="append"></slot>
			</label>
		</template>
		<textarea class="vc-textarea-original" 
			v-model="vcModel"
			:rows="vcRows"
			:style="textareaStyle"
			:placeholder="placeholder"
			:disabled="disabled" 
			:readonly="readonly"
			v-else
		>
			
		</textarea>
	</div>
	
</template>

<script>

	import { calcTextareaHeight, getClassPrefix } from 'vcutils'
	import mixins from '../../mixins'

	const prefix = getClassPrefix('input')

	export default {

		name: 'vc-input',

		props: {

			'vc-model': null,
			//icon值
			'vc-icon': String,
			//初始化行数
			'vc-rows': {

				type: Number,
				default: 2
			},
			//是否自适应
			'vc-autoSize': {

				type: Boolean,
				default: false
			},
			//是否可调整大小
			'vc-resize': {

				type: String,
				default: 'vertical'
			},
			value: null,
			placeholder: String,
			name: String,
			//是否文本域
			textarea: {

				type: Boolean,
				default: false
			},
			disabled: {

				type: Boolean,
				default: false
			},
			readonly: {

				type: Boolean,
				default: false
			}
		},

		data() {

			return {

				textareaCalcStyle: {}
			}
		},

		computed: {

			inputClass() {

				let classes = []

				if(this.classes) {

					classes.push('disabled')
				}

				if(this.$slots.prepend || this.$slots.append) {

					classes.push(prefix + 'group')
				}

				return classes
			},

			originalStyle() {

				let radius = {}

				if(this.$slots.prepend){

					radius['border-top-left-radius'] = 0
					radius['border-bottom-left-radius'] = 0
				}

				if(this.$slots.append) {

					radius['border-top-right-radius'] = 0
					radius['border-bottom-right-radius'] = 0
				}

				return radius
			},

			textareaStyle() {

				if(this.vcAutoSize) {

					return Object.assign({}, this.textareaCalcStyle, {

						resize: 'none'
					})
				}

				return Object.assign({}, this.textareaCalcStyle, {
					resize: this.vcResize
				})
			}
		},

		watch: {

			vcModel(val) {

				this.resizeTextarea()
			}
		},

		mixins: [...mixins],

		methods: {

			resizeTextarea() {

				if(this.textarea && this.vcAutoSize) {

					let textarea = this.$el.querySelector('.vc-textarea-original')

					this.textareaCalcStyle = calcTextareaHeight(textarea)
				}
			},

			handleClick() {

				this.$emit('icon.click')
			}
		},

		ready() {

			this.resizeTextarea()
		}
	}

</script>

<style src="./input.less" lang="less"></style>

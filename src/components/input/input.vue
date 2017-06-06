<template>

	<div class="vc-input" :class="inputClass">
		
		<template v-if="!textarea">
			<div class="vc-input-prepend" 
				v-if="(_slotContents && _slotContents.prepend) || ($slots && $slots.prepend)">
				<slot name="prepend"></slot>
			</div>
			<vc-icon class="vc-input-icon" 
				:vc-name="vcIcon" 
				@click.native="handleClick"
				v-if="vcIcon" 
			></vc-icon>
			<input type="text" class="vc-input-original" 
				:placeholder="placeholder" 
				:disabled="disabled" 
				:readonly="readonly" 
				v-model="vcModel"
			>
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

	import { calcTextareaHeight } from 'vcutils'

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

				return classes
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

<style src="vcless/input" lang="less"></style>

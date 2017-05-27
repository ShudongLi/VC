<template>

	<div class="vc-input" :class="inputClass">
		
		<template v-if="!vcTextarea">
			
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

	import icon from './icon'

	export default {

		props: {

			'vc-model': null,
			'vc-icon': String,
			'vc-textarea': {

				type: Boolean,
				default: false
			},
			'vc-autoSize': {

				type: Boolean,
				default: false
			},
			'vc-resize': {

				type: String,
				default: 'none'
			},
			value: null,
			placeholder: String,
			disabled: {

				type: Boolean,
				default: false
			},
			readonly: {

				type: Boolean,
				default: false
			},
			resize: {

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

				return Object.assign({}, this.textareaCalcStyle, {
					resize: this.vcResize
				})
			}
		},

		components: {

			vcIcon: icon
		},

		watch: {

			vcModel(val) {

				this.resizeTextarea()
			}
		},

		methods: {

			resizeTextarea() {

				let textarea = this.$el.querySelector('.vc-textarea-original')

				let { vcTextarea } = this

				if(!vcTextarea) {

					return 
				}

				this.textareaCalcStyle = calcTextareaHeight(textarea)
			},

			handleClick() {

				this.$emit('icon.click')
			}
		},
	}

</script>

<style src="vcless/input" lang="less"></style>

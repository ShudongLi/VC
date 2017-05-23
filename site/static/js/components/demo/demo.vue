<template>

	<div class="vc-demo row" :style="demoStyle" >
		
		<div class="vc-demo-example" :style="horStyle">
			
			<slot name="example"></slot>
			<slot name="desc"></slot>
		</div>
		<div class="vc-demo-split" v-if="!verLayout"></div>
		<div class="vc-demo-code" :style="horStyle">
			
			<vc-code>

				<slot></slot>
			</vc-code>
		</div>
		<div class="vc-demo-more" @click="more" v-if="hasMore">
			{{fold ? '显示更多' : '隐藏更多'}}
		</div>
	</div>

</template>

<script>

	import vcCode from '../code'

	const prefix = 'col-md-',
		initHeight = 160

	export default {

		data() {

			return {

				fold: true,
				maxHeight: initHeight,
				hasMore: false
			}
		},

		props: {

			'vc-vertical': null,
		},

		computed: {

			demoStyle() {

				return {

					height: this.maxHeight + 'px'
				}
			},

			verLayout() {

				return this.vcVertical === '' || this.vcVertical 
			},

			horStyle() {

				if(this.vcVertical !== '' && !this.vcVertical) {

					return {

						width: '50%',
						float: 'left'
					}
				}
			}
		},

		methods: {

			more() {

				this.maxHeight = ( this.fold = !this.fold ) 
								? initHeight 
								: this.computedHeight()
			},

			computedHeight() {

				let exampleHeight = this.example.offsetHeight,
					codeHeight = this.code.offsetHeight

				return Math.max(

					initHeight, 
					Math.max(exampleHeight, codeHeight)
				)
			}
		},

		components: {

			vcCode
		},

		ready() {

			let demo = this.$el
				
			this.example = demo.querySelector('.vc-demo-example')
			this.code = demo.querySelector('.vc-demo-code')

			this.hasMore = this.computedHeight() > initHeight
		}
	}
</script>

<style lang="less">

	@import '../../../css/variables';

	.vc-demo {
		
		margin: @base-space 0;
		border-radius: 6px;
		box-shadow: 0 1px 3px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
		position: relative;
		transition: height .4s ease;
		overflow: hidden;

		.vc-button {

			margin-bottom: 10px;
		}

		.vc-demo-split {
			
			height: 100%;
			left: 50%;
			margin-left: -1px;
			border: 1px solid #dcdcdc;
			position: absolute;
		}

		.vc-demo-example, .vc-demo-code {

			padding: 2 * @base-space;
			padding-bottom: 25 + 2 * @base-space;

			pre {
				
				border: 0;
				background-color: transparent;
			}
		}

		.vc-demo-more {

			width: 100%;
			height: 25px;
			line-height: 25px;
			text-align: center;
		    border-radius: 0 0 4px 4px;
		    background-color: rgba(239, 239, 239, 0.8);
		    cursor: pointer;
		    position: absolute;
		    bottom: 0;

		    &:hover {

		    	background-color: rgba(239, 239, 239, 0.9);
		    }
		}
	}
</style>

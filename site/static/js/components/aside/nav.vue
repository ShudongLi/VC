<template>

	<li class="vc-nav-item">	
		
		<a class="vc-nav-title" :class="{active: active}" :href="vcData.url | path">{{vcData.title}}</a>
		<ul v-if="hasChildren">
			
			<app-nav v-for="item in vcData.children" :vc-data="item" ></app-nav>
		</ul>
	</li>
	
</template>

<script type="text/javascript">

	import { type } from '../../utils'
	
	export default {

		name: 'appNav',

		data() {

			return {

				active: false
			}
		},

		props: {

			depth: {

				tyep: Number,
				default: 0
			},

			vcData: {

				type: Object,
				default: function() {

					return {

						name: '',
						title: '',
						url: '',
						children: []
					}
				}
			}
		},

		watch: {

			'$route'(route) {

				this.setActive(route)
			}
		},

		computed: {

			hasChildren() {

				return type(this.vcData.children) === 'array' && this.vcData.children.length > 0
			}
		},

		filters: {

			path(url) {

				if(!url) {

					return null
				}

				return '#component' + url
			}
		},

		methods: {

			setActive(route) {

				if(!this.vcData.name) {

					return this.active = false
				}

				let routeName = route.name.toLowerCase(),
					navName = this.vcData.name.toLowerCase()

				this.active = routeName === navName
			}
		},

		created() {

			this.setActive(this.$route)
		}
	}
</script>

<style lang="less">

	@import '../../../css/variables';

	.vc-nav-item {

		> .vc-nav-title {
			
			line-height: 40px;
			color: @main-color;
			text-decoration: none;

			&.active, &:hover {
				
				color: @vue-color;
				text-decoration: none;
			}
		}

		.vc-nav-item {

			padding-left: @base-space;
		}

	}
</style>

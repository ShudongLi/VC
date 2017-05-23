<template>
	
	<aside class="vc-aside">
			
		<nav>
			
			<ul>
				
				<app-nav v-for="nav in navItems" :vc-data="nav"></app-nav>
			</ul>
		</nav>
	</aside>

</template>

<script>

	import appNav from './nav'
	import navConf from './nav.conf'
	import docConf from '../../../comp.conf'

	const NAMESPAVE = 'component'

	function concatNav(source, target) {

		let len = source.length,
			doc = source[len - 1]

		if(!doc.children) {

			doc.children = []
		}

		doc.children = doc.children.concat(target)

		return source
	}

	export default {

		data() {

			return {

				navItems: concatNav(navConf, docConf)
			}
		},

		components: {

			appNav
		}
	}
	
</script>

<style lang="less">
	
	@import '../../../css/variables';

	.vc-aside {

		> nav > ul > .vc-nav-item > .vc-nav-title {
		
			font-size: @aside-title-size;
		}
	}
</style>

<template>
	<div id="vc-component">

		<app-header></app-header>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>

import header from './js/header'
import footer from './js/footer'

import { mixinDocs } from './js/utils'

export default {

	components: {

		appHeader: header,
		appFooter: footer,
	}
}

</script>

<style lang="less"> 

	@import "./css/base";
	@import "./css/variables";

	#vc-component {

		height: 100%;
		padding-top: @header-height;
		background-color: @main-bg-color;
		position: relative;

		> main {

			padding-top: @base-space;
		}
	}
</style>


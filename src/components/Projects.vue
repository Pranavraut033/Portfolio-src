<template>
	<b-container>
		<h1 class="section-title">Some of my work...</h1>
		<div class="p-3"></div>
		<b-row class="py-3">
			<b-col v-for="(project, index) in projects" :key="index">{{project}}</b-col>
		</b-row>
	</b-container>
</template>

<style lang="scss">
$sm: 576px;
$md: 768px;
$lg: 992px;
$xl: 1200px;
$primary-color: #3380e7;
$secondary-color: #e0b232;
$gray: #707070;

.m-active-btn {
	border-radius: 8px !important;

	&:first-child {
		border-radius: 8px;
	}
	.v-btn--active {
		color: $primary-color !important;
		box-shadow: none;
	}
}
</style>

<script>
import Utils from "../constants/Utils.js";

export default {
	props: { animate: { type: Boolean, default: false } },
	data() {
		return {
			platformFilter: 0,
			animated: false,
			platforms: ["All", "Android", "web", "Tools & Libaries"],
			projects: [
				{
					title: "Encrypted QR-Code Generator",
					description: "This ",
					banner: "",
					platform: "android"
				}
			]
		};
	},
	watch: {
		animate(a) {
			if (a && !this.animated) {
				this.animated = true;

				setTimeout(() => {
					// Animate here
				}, 250);
			}
		}
	},
	mounted() {}
};
</script>



<template>
	<v-container fill-height fluid>
		<v-layout align-center>
			<v-flex
				xs12
				class="banner mb-5"
				v-bind:class="{'animate-start': !animate, 'animate-final' : !startAnimation}"
			>
				<div class="px-md-1">Hi, I'am</div>
				<div class="main-content">
					<p>Pranav Raut</p>
					<br />
					<p>&mdash;</p>
					<p>&nbsp;Developer</p>
					<br />
					<p>&amp;</p>
					<p>&nbsp;Tech enthuse.</p>
				</div>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { setTimeout } from "timers";
export default {
	data() {
		return {
			animate: false
		};
	},
	mounted() {
		setTimeout(() => (this.animate = true), 100);
	}
};
</script>

<style lang="scss" scoped>
@import "@/assets/init.scss";

.banner {
	padding-left: 5%;
	position: relative;

	&.animate-start {
		div:first-child {
			opacity: 0 !important;
			transform: translateY(20px) !important;
		}
		.main-content {
			p:nth-child(1),
			p:nth-child(4),
			p:nth-child(6),
			p:nth-child(7) {
				opacity: 0 !important;
				transform: translateY(20px) !important;
			}
			p:nth-child(3) {
				opacity: 0 !important;
				transform: translateX(-20px) !important;
			}
		}
	}

	&.animate-final {
		.main-content {
			$p-indices: 1 3 4 6 7;

			@each $index in $p-indices {
				$i: index($p-indices, $index);

				p:nth-child(#{$index}) {
					opacity: 1;
					transform: translateY(0px) translatex(0px);
					transition: 500ms ease (500ms + $i * 600ms);
				}
			}
		}
	}

	p {
		white-space: nowrap;
		display: inline-block;
	}

	div:first-child {
		font-size: 16pt;
		color: #676767;
		opacity: 0.8;
		transition: 500ms ease;
	}

	.main-content {
		color: $primary-color;
		font-size: 2.435rem;
		line-height: 3.274rem;
		transition: 500ms ease;

		p:nth-child(3) {
			color: $secondary-color;
		}

		@media (min-width: $sm) {
			font-size: 4.5rem;
			line-height: 4.974rem;
		}

		@media (min-width: $md) {
			font-size: 5rem;
			line-height: 6.174rem;
		}
	}
}
</style>

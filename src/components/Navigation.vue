<template>
	<aside id="navigation" v-bind:class="{'n-close': close, 'start-animation' : !startAnimation }">
		<div class="nav-sidebar">
			<a href="\">
				<div class="nav-title">
					<h3>PR</h3>
				</div>
			</a>
			<div cols="12" class="flex-column" style="display: flex; flex:1;">
				<v-spacer></v-spacer>
				<ul class="nav-links mx-2 pl-3 pb-5" type="none">
					<li
						v-ripple="v != link.ref"
						v-for="(link, i) in links"
						:key="i"
						class="p-2 pr-4 mb-3"
						v-bind:class="{ active: v == link.ref }"
						@click="push(link.ref)"
					>{{ link.text }}</li>
				</ul>
				<v-spacer></v-spacer>
			</div>
		</div>
		<div class="back-drop rounded" @click="close = true"></div>
	</aside>
</template>

<script>
export default {
	props: {
		value: { type: String },
		links: { type: Array }
	},
	data() {
		return {
			close: true,
			v: this.value,
			emitted: false
		};
	},
	methods: {
		push(a) {
			this.emitted = true;
			this.$emit("input", a);
		}
	},
	watch: {
		value(a) {
			if (!this.emitted) this.v = a;
			else this.emitted = false;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/assets/init.scss";

#navigation {
	z-index: 999;
	transition: 500ms ease;

	.back-drop {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 3;
		opacity: 0;
		visibility: hidden;
		background: #00000067;
		transition: 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.nav-sidebar {
		display: flex;
		flex-direction: column;
		height: 100vh;
		min-width: 275px;
		margin-left: -10px;
		overflow-x: hidden;
		text-align: right;
		font-family: "Chivo", sans-serif !important;
		transition: 300ms cubic-bezier(0.075, 0.92, 0.165, 1.1);

		.nav-title {
			padding: 2rem;
			margin-top: 2rem;
			text-align: center;
			font-family: "Fredoka One", cursive;
			color: $gray;

			h3 {
				border: 3px solid $gray;
				display: inline;
				padding: 0.65rem;
				border-radius: 2px;
			}
		}

		.nav-links {
			text-decoration: none;

			li {
				cursor: default;
				font-size: 1.4rem;
				font-weight: 100;
				border-radius: 1.6rem;
				background: transparent;
				transition: 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
				color: #707070;

				&.active {
					font-size: 2.3rem;
					font-weight: bold;
					text-transform: lowercase;
					color: $secondary-color !important;

					&:before {
						content: ".";
					}
				}

				&:hover:not(.active) {
					cursor: pointer;
					background: rgba(#676767, 0.2);
				}
			}
		}
	}
}

@media (max-width: $lg) {
	#navigation {
		.nav-sidebar {
			min-width: 300px;
			position: fixed;
			left: 0px;
			text-align: center;
			z-index: 4;
			background: white;
			box-shadow: 4px 2px 10px rgba(black, 0.45);
			transition: 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
		}

		.back-drop {
			visibility: visible;
			opacity: 1;
		}

		&.n-close {
			.nav-sidebar {
				left: -300px;
				box-shadow: unset;
			}

			.back-drop {
				opacity: 0;
				visibility: hidden;
			}
		}
	}
}
</style>

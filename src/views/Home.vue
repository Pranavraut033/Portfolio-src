<template>
	<b-container fluid class="main" v-bind:class="!startAnimation ? 'landing-start' : cls">
		<b-row style="height: 100vh">
			<Navigation v-model="active" :links="links" />
			<b-col style="flex: 1; z-index:1;" class="pr-0">
				<Main v-model="active" :links="links" />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import Main from "@/components/Main";
import Navigation from "@/components/Navigation";

export default {
	components: {
		Main,
		Navigation
	},
	data() {
		return {
			active: "landing",
			lastActive: this.active,
			cls: "",
			links: [
				{
					text: "Me",
					ref: "landing"
				},
				{
					text: "Story",
					ref: "story"
				},
				{
					text: "Skills",
					ref: "skill"
				},
				{
					text: "Projects",
					ref: "project"
				},
				// {
				// 	text: "Achivements",
				// 	ref: "achivement"
				// },
				{
					text: "Contact",
					ref: "social"
				}
			]
		};
	},
	watch: {
		active(a) {
			this.cls = a + "-" + this.lastActive;
			this.lastActive = a;
		}
	}
};
</script>

<style lang="scss">
@import "@/assets/init.scss";

.main {
	transition: 800ms linear;
	position: relative;
	&.landing-start {
		&:after {
			background: #eee !important;
		}
		&:before {
			opacity: 0;
		}
	}
	&:after,
	&:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		transition: 8000ms cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	&:before {
		opacity: 1;
		background: $landing;
	}

	$i: 0;
	$j: 0;
	@each $name1, $gradient1 in $links {
		$i: index(($links), ($name1 $gradient1));
		@each $name2, $gradient2 in $links {
			$j: index(($links), ($name2 $gradient2));
			@if ($i > $j) {
				&.#{$name1}-#{$name2} {
					&:before {
						background: $gradient2;
						opacity: 0;
					}
					&:after {
						opacity: 1;
						background: $gradient1;
					}
				}
				&.#{$name2}-#{$name1} {
					&:before {
						background: $gradient2;
						opacity: 1;
					}
					&:after {
						opacity: 0;
						background: $gradient1;
					}
				}
			}
		}
	}
}
</style>
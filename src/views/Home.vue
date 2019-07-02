<template>
	<b-container fluid class="main" v-bind:class="cls">
		<b-row style="height: 100vh">
			<Navigation v-model="active" :links="links"/>
			<b-col style="flex: 1; z-index:1;" class="p-0">
				<Main v-model="active" :links="links"/>
			</b-col>
		</b-row>
	</b-container>
</template>
<style lang="scss">
$landing: linear-gradient(-45deg, #d4e6ff 0%, #f6f1ff 100%);
$skill: linear-gradient(-45deg, #dbffe9 0%, #fdfff3 100%);
$story: linear-gradient(-45deg, #f3ffdb 0%, #fae8d0 100%);
$project: linear-gradient(-45deg, #e7dbff 0%, #fae8d0 100%);
$achivement: linear-gradient(-45deg, #e8ffaa 0%, #f1c2fd 100%);
$contact: linear-gradient(-45deg, #ffd2d2 0%, #a0ccfd 100%);

$links: (
	"landing": $landing,
	"skill": $skill,
	"story": $story,
	"project": $project,
	"social": $contact,
	"achivement": $achivement
);
.main {
	transition: 800ms linear;
	position: relative;
	&:after,
	&:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: $landing;
		transition: 8000ms cubic-bezier(0.075, 0.82, 0.165, 1);
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
				{
					text: "Contact",
					ref: "social"
				},
				{
					text: "Achivements",
					ref: "achivement"
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

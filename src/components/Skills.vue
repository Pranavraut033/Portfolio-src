<template>
	<b-container id="skills">
		<h1 class="section-title">My Superpowers...</h1>
		<b-row class="text-center py-3 align-items-end">
			<b-col offset="1" cols="2" class="text-muted h5">
				em...
				<br>what's that?
			</b-col>
			<b-col offset="6" cols="2" class="text-muted h5">Rockstar</b-col>
		</b-row>
		<b-row class="pb-3">
			<b-col offset="2" cols="8">
				<img src="img/ruler.png" class="img-fluid">
			</b-col>
		</b-row>
		<b-row v-for="skill in skills" :key="skill.head" class="align-items-center skill-value-set">
			<b-col cols="2" class="item-title" v-bind:title="skill.title">{{skill.head}}</b-col>
			<b-col cols="8" class="item-value">
				<div v-bind:data-value="skill.value"></div>
			</b-col>
		</b-row>
		<p class="py-3 text-muted" style="font-size: 11.5pt">
			<strong>Note:</strong> The graph is only a guideline.
			Knowledge of all of these technologies update daily with experience.
		</p>
		<h2 class="sub-heading text-muted">
			Looking for working with me? Here, my
			<b class="primary--text">Traits</b>...
		</h2>
		<ul id="traits" class="row">
			<li class="col-4" v-for="t in traits" :key="t">{{ t }}</li>
		</ul>
	</b-container>
</template>

<style lang="scss">
@import "@/assets/init.scss";

#skills {
	.skill-value-set .item-title,
	#traits > * {
		color: $gray;
		line-height: 2.86rem;
	}
	#traits {
		padding: 1rem;
		width: 90%;
		margin: auto;
		font-size: 1.4rem !important;
	}
	.skill-value-set {
		opacity: 0.8;
		transition: 800ms cubic-bezier(0.075, 0.82, 0.165, 1);

		&:hover {
			opacity: 1;
			transform: scale(1.0125);
		}

		.item-title {
			font-size: 1.65rem;
			text-align: right;
			text-transform: capitalize;
		}
		.item-value {
			height: 34px !important;

			& > div {
				color: white;
				line-height: 250%;
				text-align: right;
				padding: 0px;
				height: 100%;
				border-radius: 17px;
				background-image: linear-gradient(
					30deg,
					#e0be7f 0%,
					#af5d00 100%
				);
				width: 0%;
				opacity: 0.78;
				transition: 800ms cubic-bezier(0.075, 0.82, 0.165, 1);
			}
		}
	}
}
</style>

<script>
import Utils from "../constants/Utils.js";

export default {
	props: { animate: { type: Boolean, default: false } },
	data() {
		return {
			animated: false,
			traits: [
				"Perfectionist",
				"Hardworking",
				"Intuitive",
				"Curious",
				"Teamwork",
				"Friendly",
				"Loyal",
				"Problem solving"
			],
			skills: [
				{ head: "Android", value: 68 },
				// { head: "Web", value: 94 },
				// { head: "SQL", value: 67 },
				{ head: "Git", value: 74 },
				{ head: "HTML(5)", value: 86 },
				{ head: "MS-Word", value: 83 },
				{ head: "MS-PPT", value: 64, title: "Microsoft Powerpoint" },
				{ head: "Kotlin", value: 84 },
				{ head: "Java", value: 78 },
				{ head: "Adobe XD", value: 84 },
				{ head: "Adobe PS", value: 54, title: "Adobe Photoshop" },
				// { head: "MS-EXCEL", value: 54 },
				{
					head: "SASS",
					value: 90,
					title: "Syntactically Awesome Style Sheets"
				},
				{ head: "CSS(3)", value: 92 },
				{ head: "JavaScript(ES6)", value: 86 }
			]
		};
	},
	watch: {
		animate(a) {
			if (!this.animated && a) {
				this.animated = true;

				setTimeout(() => {
					let items = document.querySelectorAll("*[data-value]");

					for (let i = 0; i < items.length; i++) {
						setTimeout(() => {
							const item = items[i];
							const value = item.attributes["data-value"].value;
							item.innerHTML = value + "%";
							item.style.width = value + "%";
							item.style.opacity = 1;
							item.style.padding = "0px 1rem";

							let color = Utils.blend_colors(
								"#e0be7f",
								"#af5d00",
								value / 100
							);
							item.style.background =
								"linear-gradient(30deg, #e0be7f 20%, " +
								color +
								" 100%)";
						}, i * 50);
					}
				}, 150);
			}
		}
	},
	mounted() {
		this.traits = this.traits.sort();
		this.skills = this.skills.sort(Utils.sort_by("head", false));
	}
};
</script>



<template>
	<b-container id="skills">
		<h1 class="section-title">My Superpowers...</h1>

		<b-row class="pb-3">
			<b-col offset="0" offset-lg="2" cols="12" lg="8">
				<b-row class="py-3 align-items-end text-muted h5 m-0" align-h="between">
					<b-col cols="4" md="2" class="text-center">
						em...
						<br />
						<span class="text-nowrap">what's that?</span>
					</b-col>
					<b-col cols="4" md="2">Proficient</b-col>
				</b-row>
			</b-col>
			<b-col offset="0" offset-lg="2" cols="12" lg="8">
				<img src="img/ruler.png" class="img-fluid" />
			</b-col>
		</b-row>
		<b-row v-for="skill in skills" :key="skill.text" class="skill-value-set">
			<b-col
				lg="2"
				class="item-title text-lg-right"
				v-bind:title="skill.title || skill.text"
			>{{skill.text}}</b-col>
			<b-col cols="12" lg="8" class="item-value mb-3 py-md-0">
				<div v-bind:data-value="skill.value"></div>
			</b-col>
		</b-row>
		<p class="py-1 py-md-3 text-muted" style="font-size: 1.2rem">
			<strong>Note:</strong> The graph is only a guideline.
			Knowledge of all of these technologies update daily with experience.
		</p>
		<h2 class="sub-heading text-muted">
			Looking for working with me?
			<span class="text-nowrap">
				Here, my
				<b class="primary--text">Traits</b>...
			</span>
		</h2>
		<ul id="traits" class="row">
			<li class="col-12 col-sm-6 col-lg-4" v-for="t in traits" :key="t">{{ t }}</li>
		</ul>
	</b-container>
</template>

<script>
import Utils from "../constants/Utils.js";

export default {
	props: { active: { type: Boolean, default: false } },
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
				{ text: "Android", value: 68 },
				// { text: "Web", value: 94 },
				{ text: "MySQL", value: 67 },
				{ text: "Git", value: 74 },
				{ text: "HTML(5)", value: 86 },
				{ text: "MS-Word", value: 83 },
				{ text: "MS-PPT", value: 64, title: "Microsoft Powerpoint" },
				{ text: "Kotlin", value: 84 },
				{ text: "Java", value: 78 },
				{ text: "Adobe XD", value: 84 },
				{ text: "Adobe PS", value: 54, title: "Adobe Photoshop" },
				{ text: "VueJS", value: 96 },
				{
					text: "SASS",
					value: 90,
					title: "Syntactically Awesome Style Sheets"
				},
				{ text: "CSS(3)", value: 92 },
				{ text: "JavaScript", value: 86 }
			]
		};
	},
	watch: {
		active(a) {
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
		this.skills = this.skills.sort(Utils.sort_by("text", false));
	}
};
</script>

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
			text-transform: capitalize;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
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
				position: relative;
			}
		}
	}
}
</style>

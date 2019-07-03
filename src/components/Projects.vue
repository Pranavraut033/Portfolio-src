<template>
	<b-container class="d-flex h-100 py-0 flex-column">
		<div class="flex-grow-0">
			<h1 class="section-title d-inline-block">Some of my work...</h1>&emsp;
			<mButtonGroup
				class="float-right"
				v-model="platformFilter"
				:items="platforms"
				color="orange darken-2"
			></mButtonGroup>
		</div>
		<b-row class="py-1 py-md-3">
			<b-col md="4" sm="6" cols="12" v-for="(project, index) in filteredProjects" :key="index">
				<v-card :ref="'item-' + index" class="project-card border" flat>
					<div class="project-card-content">
						<h5>{{ project.title }}</h5>
						<p>{{ project.description }}</p>
						<v-btn class="project-btn" outline color="white" :to="'projects/' + index">Know more...</v-btn>
					</div>
				</v-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import Utils from "../constants/Utils.js";
import mButtonGroup from "../components/mButtonGroup";

export default {
	props: { animate: { type: Boolean, default: false } },
	components: { mButtonGroup },
	data() {
		return {
			platformFilter: "all",
			animated: false,
			platforms: ["all", "android", "web", "tools & libaries"],
			projects: [
				{
					title: "Encrypted QR-Code Generator",
					description:
						"A small app to create password protected QR-Code along with other Standard barcode",
					banner: "",
					platform: "android"
				},
				{
					title: "Face recognition using DL",
					description: "This ",
					banner: "",
					platform: "tools & libaries"
				},
				{
					title: "Khelo Card",
					description: "This ",
					banner: "",
					platform: "web"
				},
				{
					title: "A Mathematical toolkit",
					description: "This ",
					banner: "",
					platform: "android"
				},
				{
					title: "Expression Evaluator",
					description: "This ",
					banner: "",
					platform: "tools & libaries"
				},
				{
					title: "Krishi Mitra",
					description: "This ",
					banner: "",
					platform: "android"
				},
				{
					title: "Digital document organizer",
					description: "This ",
					banner: "",
					platform: "web"
				}
			],
			filteredProjects: []
		};
	},
	mounted() {},
	watch: {
		filteredProjects(a) {
			for (let i = 0; i < a.length; i++) {
				setTimeout(() => {
					let ele = this.$refs["item-" + i][0].$el;
					Utils.HTML_UTILS.addClass(ele, "animate");
				}, i * 70);
			}
		},
		animate(a) {
			if (a && !this.animated) {
				this.animated = true;

				setTimeout(() => {
					this.filteredProjects = this.projects.slice();
				}, 150);
			}
		},
		platformFilter(a) {
			this.filteredProjects =
				a == "all"
					? this.projects.slice()
					: (this.filteredProjects = this.projects.filter(project => {
							return project.platform == a;
					  }));
		}
	}
};
</script>

<style lang="scss">
@import "@/assets/init.scss";

.project-card {
	position: relative;
	height: 300px;
	opacity: 0;
	margin-bottom: 1rem;
	border-radius: 4px;
	transform: translateY(80%) rotate(12deg) translateX(-20%);

	&.animate {
		opacity: 1;
		transform: translateY(0%) rotate(0deg) translateX(0%);
	}
	&.change .project-card-content {
		h1,
		p {
			animation: "animate-change" 1000ms linear 100ms;
			opacity: 1;
		}
		@keyframes animate-change {
			0% {
				opacity: 1;
			}
			60% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	}

	&:after {
		position: absolute;
		content: "";
		bottom: 0;
		right: 0;
		left: 0;
		height: 40%;
		opacity: 0;
		z-index: 2;
		border-radius: 4px;
		background-color: $primary-color;
		visibility: hidden;
	}

	.project-card-content {
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 34%;
		padding: 1rem 1.8rem;
		opacity: 1;
		background: #4b4b4b;
		transition: 300ms $ease-in-out 100ms;

		.project-btn {
			visibility: hidden;
			margin: 0;
			max-height: 0px;
			opacity: 0;
			flex: 0;
			width: 100%;
			text-transform: capitalize;
			text-align: center;
		}
		p,
		h5 {
			display: flex;
			&:before,
			&:after {
				content: "";
				transition: 300ms $ease-in-out;
			}
			&:before {
				flex: 1;
			}
		}
		h5 {
			font-size: 13pt;
			color: $primary-color;
			line-height: 18pt;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			display: flex;
		}
		p {
			flex: 1;
			line-height: 100%;
			font-size: 10pt;
			color: $gray;
			text-align: right;
			text-overflow: ellipsis;
			overflow: hidden;
			line-clamp: 2 "… (Read More)";
			transition: 300ms $ease-in-out;
		}
	}

	&:hover {
		&:after {
			top: 0;
			height: 30%;
			animation: close 600ms $ease-in-out;
		}

		@keyframes close {
			0% {
				top: 60%;
				height: 40%;
				opacity: 0;
				visibility: visible;
			}
			65% {
				top: 0;
				height: 100%;
				opacity: 1;
			}
			100% {
				opacity: 0;
				height: 30%;
			}
		}
		.project-card-content {
			height: 100%;
			opacity: 1;
			text-align: center;

			.project-btn {
				max-height: 48px;
				opacity: 1;
				visibility: visible;
				flex: unset;
			}

			h5::after {
				flex: 1;
			}

			p {
				text-align: center;
				line-height: 170%;
				color: #fff8;
				overflow: hidden;
				text-overflow: ellipsis;
				&:after {
					flex: 1;
				}
			}
		}
	}
}
</style>
<template>
	<!-- <b-container style="display:flex" class="flex-column h-100"> -->
	<b-container>
		<b-row align-h="between" class="pb-1 pb-md-3">
			<b-col>
				<h1 class="section-title text-nowrap">Some of my work...</h1>&emsp;
			</b-col>
			<b-col class="text-md-right">
				<mButtonGroup v-model="platformFilter" :items="platforms" color="orange darken-2"></mButtonGroup>
			</b-col>
		</b-row>
		<!-- <b-row class="flex-grow-1"> -->
		<b-row>
			<template v-for="(project, index) in filteredProjects">
				<v-slide-y-transition :key="index">
					<b-col lg="4" md="6" cols="12">
						<v-card :ref="'item-' + index" class="project-card border" flat>
							<div class="project-card-content">
								<h5>{{ project.title }}</h5>
								<p>{{ project.description }}</p>
								<v-btn class="project-btn" outline color="white" :to="'projects/' + index">Know more...</v-btn>
							</div>
						</v-card>
					</b-col>
				</v-slide-y-transition>
			</template>
		</b-row>
	</b-container>
</template>

<script>
import Utils from "../constants/Utils.js";
import mButtonGroup from "../components/mButtonGroup";

export default {
	props: { active: { type: Boolean, default: false } },
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
					title: "Automatic Attendence system ",
					description:
						"A college project in machine learning which uses Deep Learning and Computer Vision " +
						"to detect faces and automatically mark their attendance in the database",
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
		active(a) {
			if (a && !this.animated) {
				this.animated = true;

				setTimeout(() => {
					this.filteredProjects = this.projects.slice();
				}, 150);
			}
		},
		platformFilter(a) {
			if (a == "all") this.filteredProjects = this.projects.slice();
			else
				this.filteredProjects = this.projects.filter(
					project => project.platform == a
				);
			// this.filteredProjects = this.filteredProjects.slice(0, 3);
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
		background-color: #9eb9f5;
		visibility: hidden;
	}

	.project-card-content {
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 38%;
		padding: 1rem 1.8rem;
		opacity: 1;
		background: #4b4b4b;
		transition: 300ms ease 100ms;

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
				transition: 300ms ease;
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
			font-size: 10pt;
			color: $gray;
			text-align: right;
			overflow: hidden;

			-webkit-line-clamp: 2; /* number of lines to show */
			line-height: 18px; /* fallback */
			max-height: 18px * 2; /* fallback */

			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;

			transition: 300ms ease;
		}
	}

	&:hover {
		&:after {
			top: 0;
			height: 38%;
			animation: close 600ms ease;
		}

		@keyframes close {
			0% {
				top: 60%;
				height: 45%;
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
				height: 38%;
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
				line-height: 22px;
				color: #fffb;
				overflow: hidden;
				text-overflow: none;
				-webkit-line-clamp: unset; /* number of lines to show */
				text-overflow: ellipsis;
				max-height: 100%; /* fallback */
				display: unset;
				-webkit-box-orient: unset;

				&:after {
					flex: 1;
				}
			}
		}
	}
}
</style>
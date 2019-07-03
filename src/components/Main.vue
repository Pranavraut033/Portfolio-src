<template>
	<div ref="main" class="overflow-x-hidden" v-on:scroll.native="handleScroll" style="height: 100vh;">
		<b-container class="py-0">
			<b-row>
				<div
					v-ripple
					v-bind:class="lastScroll < 400 ? 'scroll-indicator': 'scroll-to-top'"
					@click="scroll()"
					v-bind:title="lastScroll < 400 ?'Expore':'Scroll to top'"
				>
					<img class="img-fluid" src="img/arrow.png" />
				</div>

				<section ref="landing" id="landing" class="d-flex flex-column">
					<v-spacer></v-spacer>
					<b-container class="banner">
						<div class="px-1">Hi, I'am</div>
						<div class="animate">
							<span>Pranav Raut</span>
							<br />
							<span>&mdash;</span>
							<span>&nbsp;Developer</span>
							<br />
							<span>&amp; Tech enthuse.</span>
						</div>
					</b-container>
					<v-spacer></v-spacer>
				</section>
				<section ref="story" class="p-5">
					<b-container>
						<h1 class="section-title">My Story</h1>
						<img class="img-fluid p-5" src="img/working.gif" alt />
					</b-container>
				</section>
				<section ref="skill" class="p-5">
					<Skills :animate="value == 'skill'" />
				</section>
				<section ref="project" class="p-5">
					<Projects :animate="value == 'project'" />
				</section>
				<section ref="social" class="p-5">
					<b-container>
						<h1 class="section-title">Achivement</h1>
						<img class="img-fluid p-5" src="img/working.gif" alt />
					</b-container>
				</section>

				<section ref="achivement" class="p-5">
					<b-container>
						<h1 class="section-title">Contact</h1>
						<img class="img-fluid p-5" src="img/working.gif" alt />
					</b-container>
				</section>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default {
	components: { Skills, Projects },
	props: { links: { type: Array }, value: { type: String } },
	data() {
		return {
			lastScroll: 0,
			lastRef: this.value,
			i: 0
		};
	},
	methods: {
		handleScroll(a) {
			let newScroll = Math.floor(a.target.scrollTop);
			let b;
			this.links.every(link => {
				var a = this.$refs[link.ref];
				if (a) {
					if (newScroll >= this.lastScroll) {
						if (
							a.offsetTop >=
							newScroll - window.innerHeight * 0.9
						) {
							b = link.ref;
							return false;
						}
					} else if (
						a.offsetTop <=
						newScroll + window.innerHeight * 0.5
					)
						b = link.ref;
				}
				return true;
			});
			this.lastScroll = Math.floor(a.target.scrollTop);

			this.$emit("input", (this.lastRef = b));
		},
		scroll() {
			this.animate(
				this.$refs.main.scrollTop,
				this.lastScroll >= 100
					? 0
					: this.$refs[this.links[1].ref].offsetTop,
				15,
				a => {
					this.$refs.main.scrollTop = a;
				}
			);
		},
		animate(a, b, duration, callback) {
			let steps = b - a;
			let increments = steps / duration;
			var scrollInterval = setInterval(() => {
				if (Math.ceil(a) == b || Math.floor(a) == b) {
					window.clearInterval(scrollInterval);
				} else callback((a += increments));
			}, 15);
		}
	},
	watch: {
		value(a, b) {
			if (this.lastRef == b) {
				this.animate(
					Math.ceil(this.$refs.main.scrollTop),
					Math.ceil(this.$refs[a].offsetTop),
					20,
					a => {
						this.$refs.main.scrollTop = a;
					}
				);
				this.lastRef = a;
			}
		}
	},
	mounted() {
		this.$refs.main.addEventListener("scroll", this.handleScroll);
	}
};
</script>

<style lang="scss">
@import "@/assets/init.scss";

section {
	min-height: 100vh;
	flex: 0 0 100%;
	max-width: 100%;
	// border: 1px solid red;
	.section-title {
		color: $primary-color;
	}
}
.scroll-indicator,
.scroll-to-top {
	position: absolute;
	bottom: 4rem;
	opacity: 0.6;
	right: 10%;
	z-index: 77;
	transition: 800ms cubic-bezier(0.23, 1, 0.32, 1);

	&:hover {
		opacity: 1;
	}
}
.scroll-indicator {
	background-color: $secondary-color;
	padding-bottom: 1.3rem;
	border-radius: 16px 16px 0px 0px;
	padding: 1rem;

	img {
		transform: scale(0.6) rotate(180deg);
	}
}
.scroll-to-top {
	bottom: 8rem !important;
	padding: 1.2rem !important;
	background-color: $primary-color !important;
	border-radius: 50% !important;
	height: 64px !important;
	width: 64px !important;
	text-align: center !important;

	img {
		height: 100%;
		transform: scale(1) rotate(0deg);
	}
}

#landing {
	.banner {
		padding-left: 5%;
		position: relative;

		div:first-child {
			font-size: 16pt;
			color: black;
			opacity: 0.59;
		}

		.animate {
			color: $primary-color;
			font-size: 5rem;
			line-height: 6.174rem;

			span:nth-child(3) {
				color: $secondary-color;
			}
		}
	}
}
</style>
